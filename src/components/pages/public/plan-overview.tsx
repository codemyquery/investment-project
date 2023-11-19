import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Plan } from "../../../services";
import { PlanServerData } from "../../../types";
import "../../../styles/virtual.css";
import Slider from '@mui/material/Slider';

function valueLabelFormat(value: number) {
  const units = ['KB', 'MB', 'GB', 'TB'];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 1024 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 1024;
  }

  return `${scaledValue} ${units[unitIndex]}`;
}

function calculateValue(value: number) {
  return 2 ** value;
}

export const PlanOverview = () => {
  const { itemID } = useParams();
  const [loader, setLoader] = useState<boolean>(true);
  const [planDetail, setPlanDetail] = useState<PlanServerData>();
  const planDetails = planDetail?.planDetails || [];

  const [value, setValue] = useState<number>(10);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    const init = async () => {
      const response = await Plan.fetchPlan(itemID!, abortController);
      setPlanDetail(response);
      setLoader(false);
    };
    init();
  }, []);

  const onYearClickHandler = (event: any) => {
    const currentTarget = event.currentTarget;
    const nextLi = currentTarget.nextElementSibling;
    if (nextLi.classList.contains("showYearsUl")) {
      nextLi.classList.remove("showYearsUl");
      nextLi.classList.add("hideYearsUl");
    } else {
      nextLi.classList.remove("hideYearsUl");
      nextLi.classList.add("showYearsUl");
    }
  };

  return (
    <div
      className="app-root"
      style={{ height: "100%", backgroundColor: "white" }}
    >
      <div id="bond-details">
        <div className="">
          <div className="bond-details-content ">
            <div className="details-container sticky-popup">
              <div className="bond-banner-bg">
                <div className="side-icons">
                  <div className="side-icons-top">
                    <span className="help-text">Need Help ?</span>
                    <div className="button-phone gtm-cb-talk-expert">
                      <img
                        src="https://d2tfvseypdp8pf.cloudfront.net/assets/img/phone-icon-yellow.svg"
                        alt=""
                      />
                      <span>Talk to Expert</span>
                    </div>
                  </div>
                  <div className="side-icons-bottom" />
                </div>
                <div className="bond-banner">
                  <h4 style={{ color: "brown" }}>{`${planDetail?.planName} (${planDetail?.planCode})`}</h4>
                  <div className="bond-name-container">
                    <div className="bond-name-div">
                      <h1 className="bond-name">
                        {planDetail?.insuranceCompany}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bond-details-header">
                <div className="scrollmenu">
                  <a className="gtm-scroll-menu active">Overview</a>
                  <div className="button-invest gtm-cb-invest-btn ">
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
                            <span className="rupee-symbol">₹</span> 2,98,782.74
                          </p>
                          <p className="text-title">Investment</p>
                          <div id="tooltip-component" className="">
                            <img
                              alt="tooltip"
                              src="https://d2tfvseypdp8pf.cloudfront.net/assets/img/info.svg"
                            />
                          </div>
                          <p />
                        </div>
                        <div className="flex-column ">
                          <p className="text-value ">24-Apr-2029</p>
                          <p className="text-title ">Maturity Date</p>
                          <div id="tooltip-component">
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
                          </p>
                        </div>
                        <div className="flex-column">
                          <p className="text-value">Monthly</p>
                          <p className="text-title">Payment Term</p>
                          <div id="tooltip-component">
                            <img
                              alt="tooltip"
                              src="https://d2tfvseypdp8pf.cloudfront.net/assets/img/info.svg"
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
                    <div className="returns-container concise">
                      <div className="header">
                        <h2 className="heading">Cash Flow ₹ { calculateValue(value) }</h2>
                      </div>
                      <div className="header" style={{ paddingTop: '0px', marginTop: '-15px' }}>
                        <Slider
                          value={value}
                          min={5}
                          step={1}
                          max={30}
                          scale={calculateValue}
                          getAriaValueText={valueLabelFormat}
                          valueLabelFormat={valueLabelFormat}
                          onChange={handleChange}
                          aria-labelledby="non-linear-slider"
                        />
                      </div>
                      <div>
                        <div className="square">
                          <ul className="archive_year">
                            <li
                              className="years"
                              onClick={onYearClickHandler}
                              style={{ cursor: "pointer" }}
                            >
                              2012
                            </li>
                            <ul className="archive_month hideYearsUl">
                              <li className="months">September</li>
                              <li className="months">August</li>
                            </ul>
                          </ul>
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
                          src="https://d2tfvseypdp8pf.cloudfront.net/assets/img/customer-icon.svg"
                        />
                        <div className="steps-text">Complete KYC</div>
                      </div>
                      <div className="next-steps">
                        <hr />
                        <div>
                          <img
                            className="step-icons"
                            src="https://d2tfvseypdp8pf.cloudfront.net/assets/img/certificate-icon.svg"
                          />
                          <div className="steps-text">Choose Bonds</div>
                        </div>
                      </div>
                      <div className="next-steps">
                        <hr />
                        <div>
                          <img
                            className="step-icons"
                            src="https://d2tfvseypdp8pf.cloudfront.net/assets/img/make-payment-icon.svg"
                          />
                          <div className="steps-text">Make Investment</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Invest Steps End */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
