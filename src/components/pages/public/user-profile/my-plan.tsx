import { useState, useEffect } from "react";
import { useAuth } from "../../../../providers"
import { Plan, Users } from "../../../../services";
import { PlanServerData, UserActivePlanServerData } from "../../../../types";
import { ActivePlanCard, PlanSlider } from "../../../organism";
import { useNavigate } from "react-router-dom";

export const MyPlans = () => {
  window.scrollTo(0, 0);
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  const [loader, setLoader] = useState<boolean>(true)
  const [planDetail, setPlanDetail] = useState<PlanServerData[]>([]);
  const [activePlanDetail, setActivePlanDetail] = useState<UserActivePlanServerData[]>([]);

  useEffect(() => {
    const abortController = new AbortController();
    const init = async () => {
      const response = await Plan.fetchPlanList('', abortController);
      setPlanDetail(response.rows);
      if(userInfo?.id){
        const activePlan = await Users.fetchUserActivePlans(userInfo?.id);
        setActivePlanDetail(activePlan);
      }
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
    {
      activePlanDetail.length > 0 &&
      <section className="py-3">
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
              {
                activePlanDetail.map(activePlan => <ActivePlanCard data={activePlan} key={activePlan.plan_id} />)
              }
            </div>
          </div>
        </div>
      </section>
    }
  </>
}