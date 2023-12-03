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
  ppt: 0,
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
        setFormState(prev => ({ 
          ...prev, 
          notificationOpen: true, 
          notificationType: 'success', 
          notificationMessage: t.successMessage 
        }))
      } else {
        setFormState(prev => ({ 
          ...prev, 
          notificationOpen: true, 
          notificationType: 'error', 
          notificationMessage: response.errMsg || t.errorMessage }))
      }
      setDialog(false)
    } catch (error) {
      setFormState(prev => ({ ...prev, notificationOpen: true, notificationType: 'error', notificationMessage: t.errorMessage }))
    }
  }

  function gradient(arg0: number, deg: any, arg2: any, arg3: number, c30: any, arg5: any, arg6: number) {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="app-root" style={{ height: "100%"}}>
      <div id="bond-details">
        <div>
          <div className="bond-details-content ">
            <div className="details-container sticky-popup">
              <div className="bond-banner-bg">
                <div className="side-icons">
                  <div className="side-icons-top">
                    <span className="help-text" style={{ color:'#dc3545'}}>Need Help ?</span>
                    <div className="button-phone gtm-cb-talk-expert">
                      <a href="tel:+91-9793909000">
                        <span><WifiCalling3Icon style={{ color: "#d63384", marginRight: '8px' }} />Talk to Expert</span>
                      </a>
                    </div>
                  </div>
                  <div className="side-icons-bottom" />
                </div>
                <div className="bond-banner">
                  <h4 style={{ color: "#07e57d" }}>{`${plan.current?.planName} (${plan.current?.planCode})`}</h4>
                  <div className="bond-name-container">
                    <div className="bond-name-div">
                      <h1 className="bond-name" style={{color:"#a0ed8d"}}>
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
                  <div className="main-container" style={{ backgroundColor: '#2a2d3c'}}>
                    <div className="info-main-container">
                      <div className="info-container">
                        <div className="flex-column">
                          <p className="text-value ">
                            <span className="rupee-symbol">₹</span>
                            {
                              formatNumber(planAmount.value/10)
                            }
                          </p>
                          <p className="text-title">Min. Investment</p>
                          <p className="text-value">
                            10 Years
                            {/* //todo Payment Term */}
                          </p>
                          <p className="text-title">Payment Term</p>
                          <p className="text-value">{formatNumber(planAmount.value)}</p>
                          <p className="text-title">Total Value</p>
                        </div>
                        <div className="flex-column ">
                        <p className="text-value">
                            <span className="rupee-symbol">₹</span>
                            15000 
                            {/* todo monthly income */}
                          </p>
                          <p className="text-title ">Monthly Income</p>
                          
                          <p className="text-value">
                            {cashFlowYears.length} Years
                            </p>
                          <p className="text-title ">Income Term</p>
                          <p className="text-value">
                            <span className="rupee-symbol">₹</span>
                            {formatNumber(planAmount.value)}
                          </p>
                          <p className="text-title ">Maturity Value</p>
                          
                        </div>
                        <div className="flex-column">
                          <p className="text-value">Assured</p>
                          <p className="text-title">Income Type</p>
                          <p className="text-value">{formatNumber((planAmount.value + income))}</p>
                          <p className="text-title">ROI</p>
                          
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
                        <h2 className="heading">Approx Net Benefits :        ₹{formatNumber(income+planAmount.value)}</h2>
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
                          renderInput={(params) => <TextField {...params} variant="outlined" label="₹ Invested Amount" />}
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
                {/* <div className="keyhighlight-parent">
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
                </div> */}
                {/* Key Highlight Section End */}
                {/* Invest Steps */}
                <div className="common-container">
                  <div id="three-steps" className="">
                    <h2 className="heading" style={{color:'#0dcaf0'}}>Invest in 3 easy steps</h2>
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
                          <div className="steps-text">Choose Amount</div>
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
        content={<>Our team will reach you for further process! <br /><br />Please confirm?</>}
        maxWidth='xs'
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