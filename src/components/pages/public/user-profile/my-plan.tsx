import { useState, useEffect } from "react";
import { useAuth } from "../../../../providers"
import { Plan } from "../../../../services";
import { PlanServerData } from "../../../../types";
import { PlanSlider } from "../../../organism";
import { useNavigate } from "react-router-dom";

export const MyPlans = () => {
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  const [loader, setLoader] = useState<boolean>(true)
  const [planDetail, setPlanDetail] = useState<PlanServerData[]>([])
  useEffect(() => {
    const abortController = new AbortController();
    const init = async () => {
      const response = await Plan.fetchPlanList('', abortController);
      setPlanDetail(response.rows);
      setLoader(false)
    }
    init();
  }, []);

  return <>
    {
      userInfo?.kycStatus === 'NO' ?
        <section className="py-3">
          <div className="container">
            <div className="d-flex justify-content-center align-items-center row">
              <div
                data-aos="fade-up"
                className="text-center col aos-init aos-animate"
              >
                <h2 className="text-white fw-600 display-6 mb-3 mb-md-4">
                  <span className="text-main-green"> KYC Status </span>
                </h2>
              </div>
            </div>
            <div className="d-flex justify-content-center px-md-5 align-items-center pt-2 row">

              <div className="d-flex justify-content-center align-items-center row">
                <p style={{ color: "antiquewhite" }}>
                  <span /> KYC Has not been completed. Please complete KYC first.
                </p>
                <div className="py-2">
                  <button type="button" onClick={() => navigate('/user/profile')} className="main-btn-service maincolor bg-transparent btn btn-primary">
                    <b>Click for KYC</b>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>
        :
        <PlanSlider loader={loader} planDetail={planDetail} />
    }

    {/* <section className="py-3">
          <div className="container">
            <div className="d-flex justify-content-center align-items-center row">
              <div
                data-aos="fade-up"
                className="text-center col aos-init aos-animate"
              >
                <h2 className="text-white fw-600 display-6 mb-3 mb-md-4">
                  <span className="text-main-green"> Active Investments </span>
                </h2>
              </div>
            </div>
            <div className="d-flex justify-content-center px-md-5 align-items-center pt-2 row">

              <div className="d-flex justify-content-center align-items-center row">
                <div
                  data-aos="fade-up"
                  className="d-flex justify-content-center align-items-center mb-5 col-lg-6 aos-init aos-animate"
                >
                  <div
                    className="mb-2 bg-dark-gradient text-white position-relative card"
                    style={{ width: "25rem" }}
                  >
                    <div className="d-inline-flex align-items-center py-3 fw-bold fs-4 card-header">
                      Plan Name
                    </div>
                    <div className="text-center card-body">
                      <div className="d-flex align-items-center justify-content-between mb-3 text-start">
                        <div>
                          <p className="card-text">Start Date</p>
                          <p className="card-text">Policy Term</p>
                          <p className="card-text">Lockin period</p>
                          <p className="card-text">Maturity Amount</p>
                          <p className="card-text">Est. Monthly Income</p>
                          <p className="card-text">Maturity Date</p>
                          <p className="card-text">Curr. Surrender Value</p>
                        </div>
                        <div>
                          <p className="card-text">:</p>
                          <p className="card-text">:</p>
                          <p className="card-text">:</p>
                          <p className="card-text">:</p>
                          <p className="card-text">:</p>
                          <p className="card-text">:</p>
                          <p className="card-text">:</p>
                        </div>
                        <div>
                          <p className="card-text">19 Nov,2023</p>
                          <p className="card-text">30 Years</p>
                          <p className="card-text">3 Years</p>
                          <p className="card-text">100%</p>
                          <p className="card-text">3000</p>
                          <p className="card-text">19 Nov,2053</p>
                          <p className="card-text">0</p>
                        </div>
                      </div>
                      <div className="py-2">
                        Do you need more clarification?
                        <button type="button" style={{ marginTop: '5px' }} className="main-btn-service maincolor bg-transparent btn btn-primary">
                          <b>Get a Callback</b>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

  </>
}