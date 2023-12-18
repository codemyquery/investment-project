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
  const [averageMonthlyIncome, setAverageMonthlyIncome] = useState<number>(0);
  const [dialog, setDialog] = useState<boolean>(false);
  const [planAmount, setPlanAmount] = useState<SelectOptions>({ label: '', value: -1 });
  const [dataToPreview, setPataToPreview] = useState<Record<string, Record<string, any>>>({});
  const income = cashFlowYears.reduce((prev, current) => (prev + Number(current[0])), 0);

  useEffect(() => {
    const abortController = new AbortController();
    const init = async () => {
      plan.current = await Plan.fetchPlan(itemID!, abortController);
      const options: SelectOptions[] = Object.keys(plan.current.planDetails).map((amount) => ({ value: Number(amount), label: `₹ ${formatNumber(Number(amount)/(plan.current.ppt || 1))}` }));
      setOptions(options);
      setPlanAmount({label: `₹ ${(formatNumber(Number(investmentAmount)/plan.current.ppt)).toString()}`, value : Number(investmentAmount)})
    };
    init();
  }, []);

  useEffect(() => {
    const selectedInvestmentAmount = [...(plan.current.planDetails[investmentAmount as unknown as string] || [])];
    selectedInvestmentAmount.shift();
    setCashFlowYears(selectedInvestmentAmount);
  }, [options, planAmount.value])

  useEffect(() => {
    const updatedPlanToPreview: Record<string, Record<string, any>> = {};
    const dateForCashFlow = new Date();
    let totalMonths = 0;
    let totalIncome = 0;
    for (let i = 0; i < cashFlowYears.length; i++) {
      const [income] = cashFlowYears[i];
      totalIncome+= Number(income);
      for (let i = 0; i < 12; i++) {
        totalMonths+= 1;
        const currentMonth = dateForCashFlow.getMonth()
        dateForCashFlow.setMonth(currentMonth + 1);
        const year = dateForCashFlow.getFullYear().toString();
        const month = dateForCashFlow.getMonth();
        if (updatedPlanToPreview.hasOwnProperty(year)) {
          updatedPlanToPreview[year][MonthsName[month]] = Number(income) / 12;
        } else {
          updatedPlanToPreview[year] = {}
          updatedPlanToPreview[year][MonthsName[month]] = Number(income) / 12;
        }
      }
    }
    setAverageMonthlyIncome(totalIncome/totalMonths);
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
                          {/* <p className="text-value ">
                            <span className="rupee-symbol">₹</span>
                            {
                              formatNumber(planAmount.value/plan.current.ppt)
                            }
                          </p> */}
                          <div id='IntialAmoutCombo'>
                          <Autocomplete
                            fullWidth
                            id="combo-box-demo"
                            value={planAmount}
                            onChange={(event, newValue) => {
                              if (newValue) {
                                setPlanAmount(newValue)
                                navigate(`/plan-overview/${itemID}/${newValue.value}`)
                              }
                            }}
                            isOptionEqualToValue={(o, v) => o.value === v.value}
                            options={options}
                            renderInput={(params) => <TextField {...params} variant="outlined" />}
                          />
                          </div>
                          
                          <p className="text-title">Choose Initial Investment</p>
                          <p className="text-value">
                            {plan.current.ppt} Years
                          </p>
                          <p className="text-title">Payment Term</p>
                          <p className="text-value">{formatNumber(planAmount.value)}</p>
                          <p className="text-title">Total Value</p>
                        </div>
                        <div className="flex-column ">
                          
                        <p className="text-value">
                            <span className="rupee-symbol">₹</span>
                            { formatNumber(parseInt(averageMonthlyIncome.toString())) }
                          </p>
                          <p className="text-title ">Monthly Income</p>
                          
                          <p className="text-value">
                            {plan.current.incomeTermOptions} Years
                            </p>
                          <p className="text-title ">Income Term</p>
                          
                          <p className="text-value">Assured</p>
                          <p className="text-title">Income Type</p>
                        </div>
                        <div className="flex-column">
                          
                          <p className="text-value">
                            {(((parseFloat(plan.current.maturityValueOptions)*planAmount.value)+ income)/planAmount.value).toFixed(2)}x
                          </p>
                          <p className="text-title">ROI</p>
                          <p className="text-value">
                            <span className="rupee-symbol">₹</span>
                            {formatNumber(parseFloat(plan.current.maturityValueOptions)*planAmount.value)}
                          </p>
                          <p className="text-title ">Maturity Value</p>
                          <p className="text-value">{ formatNumber(((parseFloat(plan.current.maturityValueOptions)*planAmount.value)+ income)) }</p>
                          <p className="text-title">Total Benefit</p>
                        </div>
                        <div className="flex-column">
                          {/* <p className="text-value">{plan.current?.ageBand}</p>
                          <p className="text-title">Age Band</p> */}
                          <p className="text-value">Monthly</p>
                          <p className="text-title">Income Frequency</p>
                          <div id="tooltip-component">
                            <img
                              alt="tooltip"
                              src="https://virtual-property.in/static/media/info.549b062c6f71acfb7fc8c9292febec2a.svg"
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
                      <div className="header" style={{backgroundColor:'#07e57d'}}>
                        <h2 className="heading" style={{color:'white'}}>Income CashFlow</h2>
                      </div>
                      
                      <div>
                        <div className="square">
                          {
                            Object.keys(dataToPreview).map((year, i) => {
                              return <ExpandableList key={`${year}-${i}`} label={"Jan'" + year.slice(2,4) + " - Dec'" + year.slice(2,4)} items={dataToPreview[year]} />
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
                          src="https://virtual-property.in/static/media/kyc.1c0fefdf14a4563ba172f0a857084168.svg"
                          
                        />
                        <div className="steps-text" style={{color:'#fff'}}>Complete KYC</div>
                      </div>
                      <div className="next-steps">
                        <hr />
                        <div>
                          <img
                            className="step-icons"
                            src="https://virtual-property.in/static/media/bonds.5c0de1f01b17682af71837bb90a740c2.svg"
                          />
                          <div className="steps-text" style={{color:'#fff'}}>Choose Amount</div>
                        </div>
                      </div>
                      <div className="next-steps">
                        <hr />
                        <div>
                          <img
                            className="step-icons"
                            src="https://virtual-property.in/static/media/bonds.5c0de1f01b17682af71837bb90a740c2.svg"
                          />
                          <div className="steps-text" style={{color:'#fff'}}>Make Investment</div>
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