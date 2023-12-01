import { useParams } from "react-router";
import { useState, useEffect, useRef } from "react";
import { Plan, Sell } from "../../../services";
import { DefaultFormState, FormState, MonthsName, PlanServerData } from "../../../types";
import "../../../styles/virtual.css";
import { Autocomplete, TextField } from "@mui/material";
import { BASE_URL, formatNumber, t } from "../../../utils";
import { ExpandableList, Notifications } from "../../molecules";
import { capitalize } from "../../../utils/helper";
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../providers";
import { GenericDialog } from "../../organism";
import { bonds, info, investmentTime, kyc } from "../../../assets";

const defaultValue: PlanServerData = {
  id: "",
  planCode: "",
  insuranceCompany: "",
  planName: "",
  ageBand: "",
  incomeTermOptions: "",
  maturityValueOptions: "",
  incomeFrequency: "",
  ppt: "",
  planDetails: {}
}

interface SelectOptions {
  label: string,
  value: number
}

export const PlanOverview = () => {
  window.scrollTo(0, 0);
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const currentDate = date.getDate();
  const navigate = useNavigate();
  const plan = useRef<PlanServerData>(defaultValue);
  const { userInfo } = useAuth();
  const { itemID, investmentAmount } = useParams();
  const [formState, setFormState] = useState<FormState>({ ...DefaultFormState });
  const [cashFlowYears, setCashFlowYears] = useState<string[]>([]);
  const [options, setOptions] = useState<SelectOptions[]>([]);
  const [dialog, setDialog] = useState<boolean>(false);
  const [planAmount] = useState<SelectOptions>({ label: investmentAmount!, value: Number(investmentAmount) });
  const [dataToPreview, setPataToPreview] = useState<Record<string, Record<string, any>>>({});
  const income = cashFlowYears.reduce((prev, current) => (prev + Number(current[0])), 0);

  useEffect(() => {
    const abortController = new AbortController();
    const init = async () => {
      plan.current = await Plan.fetchPlan(itemID!, abortController);
      const options: SelectOptions[] = Object.keys(plan.current.planDetails).map((amount) => ({ value: Number(amount), label: `₹ ${formatNumber(Number(amount))}` }));
      setOptions(options);
    };
    init();
  }, []);

  useEffect(() => {
    const selectedInvestmentAmount = [...(plan.current.planDetails[investmentAmount as unknown as string] || [])];
    selectedInvestmentAmount.shift();
    setCashFlowYears(selectedInvestmentAmount);
  }, [plan.current.planDetails])

  useEffect(() => {
    const updatedPlanToPreview: Record<string, Record<string, any>> = {};
    const dateForCashFlow = new Date();
    for (let i = 0; i < cashFlowYears.length; i++) {
      const [income] = cashFlowYears[i];
      for (let i = 0; i < 12; i++) {
        const currentMonth = dateForCashFlow.getMonth()
        dateForCashFlow.setMonth(currentMonth + 1);
        const year = dateForCashFlow.getFullYear().toString();
        const month = dateForCashFlow.getMonth();
        if (updatedPlanToPreview.hasOwnProperty(year)) {
          updatedPlanToPreview[year][MonthsName[month]] = `₹${formatNumber(Number(income) / 12, 0)}`;
        } else {
          updatedPlanToPreview[year] = {}
          updatedPlanToPreview[year][MonthsName[month]] = `₹${formatNumber(Number(income) / 12, 0)}`;
        }
      }
    }
    setPataToPreview(updatedPlanToPreview)
  }, [cashFlowYears])

  const closeDialog = () => {
    setDialog(false)
  }

  const onSubmitDialog = async () => {
    try {
      const response = await Sell.InsertSellData({ planId: itemID!, purchaseAmount: Number(investmentAmount), customerId: userInfo?.id!, purchaseStatus: 'NO' });
      if (response.status) {
        setFormState(prev => ({ ...prev, notificationOpen: true, notificationType: 'success', notificationMessage: t.successMessage }))
      } else {
        setFormState(prev => ({ ...prev, notificationOpen: true, notificationType: 'error', notificationMessage: response.errMsg || t.errorMessage }))
      }
      setDialog(false)
    } catch (error) {
      setFormState(prev => ({ ...prev, notificationOpen: true, notificationType: 'error', notificationMessage: t.errorMessage }))
    }
  }

  return (
    <div className="app-root" style={{ height: "100%", backgroundColor: "white" }}>
      <div id="bond-details">
        <div>
          <div className="bond-details-content ">
            <div className="details-container sticky-popup">
              <div className="bond-banner-bg">
                <div className="side-icons">
                  <div className="side-icons-top">
                    <span className="help-text">Need Help ?</span>
                    <div className="button-phone gtm-cb-talk-expert">
                      <a href="tel:+91-7231844488">
                        <span><WifiCalling3Icon style={{ color: "brown", marginRight: '8px' }} />Talk to Expert</span>
                      </a>
                    </div>
                  </div>
                  <div className="side-icons-bottom" />
                </div>
                <div className="bond-banner">
                  <h4 style={{ color: "brown" }}>{`${plan.current?.planName} (${plan.current?.planCode})`}</h4>
                  <div className="bond-name-container">
                    <div className="bond-name-div">
                      <h1 className="bond-name">
                        {plan.current?.insuranceCompany}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bond-details-header">
                <div className="scrollmenu">
                  <a className="gtm-scroll-menu active">Overview</a>
                  <div className="button-invest gtm-cb-invest-btn" style={{ cursor: 'pointer' }} onClick={() => {
                    if (userInfo?.name) {
                      if (userInfo.kycStatus === "NO") {
                        navigate(`/user/profile`)
                      } else {
                        setDialog(true)
                      }
                    } else {
                      navigate(`/login`)
                    }
                  }}>
                    {" "}
                    Invest
                  </div>
                </div>
              </div>
              <div className="sticky-section stick-cashflow">
                <div id="overview-section">
                  <div className="main-container">
                    <div className="info-main-container">
                      <div className="info-container">
                        <div className="flex-column">
                          <p className="text-value ">
                            <span className="rupee-symbol">₹</span>
                            {
                              formatNumber(planAmount.value)
                            }
                          </p>
                          <p className="text-title">Investment</p>
                          <div id="tooltip-component" className="">
                            <img
                              alt="tooltip"
                              src={info}
                            />
                          </div>
                          <p />
                        </div>
                        <div className="flex-column ">
                          <p className="text-value">{currentDate}-{capitalize(MonthsName[currentMonth].slice(0, 3))}-{currentYear + cashFlowYears.length}</p>
                          <p className="text-title ">Maturity Date</p>
                          <p className="text-value">
                            <span className="rupee-symbol">₹</span>
                            {formatNumber(planAmount.value + income)}
                          </p>
                          <p className="text-title ">Maturity Value</p>
                          {/* <div id="tooltip-component">
                            <img
                              alt="tooltip"
                              src="https://d2tfvseypdp8pf.cloudfront.net/assets/img/info.svg"
                            />
                          </div>
                          <p />
                          <p className="text-subtitle ">
                            <span className="">5 Yr</span>
                            <span className="">5 Mo </span>
                            <span className="">12 Days</span>
                            <br /> to maturity
                          </p> */}
                        </div>
                        <div className="flex-column">
                          <p className="text-value">Monthly</p>
                          <p className="text-title">Payment Term</p>
                          <div id="tooltip-component">
                            <img
                              alt="tooltip"
                              src={info}
                            />
                          </div>
                          <p />
                        </div>
                        <div className="flex-column">
                          <p className="text-value">{plan.current?.ageBand}</p>
                          <p className="text-title">Age Band</p>
                          <div id="tooltip-component">
                            <img
                              alt="tooltip"
                              src={info}
                            />
                          </div>
                          <p />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="returns-parent">
                  <div className="return-section">
                    <div className="returns-container concise" style={{ overflowY: 'scroll' }}>
                      <div className="header">
                        <h2 className="heading">Cash Flow ₹{formatNumber(income)}</h2>
                      </div>
                      <div className="header" style={{ paddingTop: '0px', marginTop: '-15px' }}>
                        <Autocomplete
                          fullWidth
                          id="combo-box-demo"
                          value={planAmount}
                          onChange={(event, newValue) => {
                            if (newValue) {
                              window.location.href = `${BASE_URL}/plan-overview/${itemID}/${newValue.value}`
                            }
                          }}
                          isOptionEqualToValue={(o, v) => o.value === v.value}
                          options={options}
                          renderInput={(params) => <TextField {...params} variant="outlined" label="₹ Amount" />}
                        />
                      </div>
                      <div>
                        <div className="square">
                          {
                            Object.keys(dataToPreview).map((year, i) => {
                              return <ExpandableList key={`${year}-${i}`} label={year} items={dataToPreview[year]} />
                            })
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end old cash flow */}
                {/* Key Highlight Section */}
                <div className="keyhighlight-parent">
                  <div className="keyhighlight-section">
                    <div className="container">
                      <h2 className="key-highlight-heading common-padding-class details-section-header">
                        Key Highlights
                      </h2>
                      <div className="summary-container common-padding-class ">
                        <div className="exctv-summary-class">
                          <ul>
                            <li>
                              This bond can be considered for long term
                              Investment purpose with monthly returns. Coupon is
                              12.4% i.e you will receive Rs. 10,333.33 monthly
                              interest for every 10 lac Investment.
                            </li>
                            <li>
                              The bond issuer is of type NBFC Retail. The Issuer
                              raised total Rs. 100.0 Cr for this bond.
                            </li>
                            <li>It is rated A- by ICRA with STABLE outlook.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Key Highlight Section End */}
                {/* Invest Steps */}
                <div className="common-container">
                  <div id="three-steps" className="">
                    <h2 className="heading">Invest in 3 easy steps</h2>
                    <div className="step-images">
                      <div>
                        <img
                          className="step-icons"
                          src={kyc}
                        />
                        <div className="steps-text">Complete KYC</div>
                      </div>
                      <div className="next-steps">
                        <hr />
                        <div>
                          <img
                            className="step-icons"
                            src={bonds}
                          />
                          <div className="steps-text">Choose Bonds</div>
                        </div>
                      </div>
                      <div className="next-steps">
                        <hr />
                        <div>
                          <img
                            className="step-icons"
                            src={investmentTime}
                          />
                          <div className="steps-text">Make Investment</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GenericDialog
        open={dialog}
        title={"Purchase Plan"}
        content={<>Are you sure you want to purchase this plan?</>}
        maxWidth='sm'
        onClose={closeDialog}
        onCloseText="No, Cancel"
        onSubmit={onSubmitDialog}
        onSubmitText="Yes, Purchase"
      />
      <Notifications
        open={formState.notificationOpen}
        message={formState.notificationMessage}
        onClose={() => { setFormState(prev => { return { ...prev, notificationOpen: false, notificationType: 'error', notificationMessage: '' } }) }}
        severity={formState.notificationType}
      />
    </div>
  );
};