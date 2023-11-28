import { useNavigate } from "react-router";
import { PlanServerData } from "../../types"
import { formatNumber } from "../../utils";
import { useAuth } from "../../providers";

interface PlanSliderCardsProps {
    data: PlanServerData
    setDialog: React.Dispatch<React.SetStateAction<boolean>>
}
export const PlanSliderCards = ({
    data,
    setDialog
}: PlanSliderCardsProps) => {
    const navigate = useNavigate();
    const { userInfo } = useAuth();
    // finding the lowest plan amount
    let lockingPeriod = 0;
    const investmentAmounts = Object.keys(data.planDetails).sort((a,b) => Number(a) > Number(b) ? Number(a) : Number(b));
    const lowestInvestmentPlanWithHeader = data.planDetails[investmentAmounts[0]];
    const lowestInvestmentPlan = [...lowestInvestmentPlanWithHeader].slice(1,lowestInvestmentPlanWithHeader.length);
    lowestInvestmentPlan.every((row, index) => {
        return row[2] == '0' ? ++lockingPeriod : false; // It contains 3 element [yearlyIncome, Maturity, Surrender Value]
    })
    return <div className='mb-2 bg-dark-gradient text-white position-relative card' style={{ width: "50rem", margin: '10px', borderRadius: '10px' }}>
        <div className="d-inline-flex align-items-center py-3 fw-bold fs-4 card-header">
            <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center me-4 p-2">
                <img
                    src="https://cms.growpital.com/uploads/leafy_eleven_plan_fbfc42c562.png"
                    alt=""
                    className="img-fluid"
                    style={{ width: "1.5rem" }}
                />
            </p>
            {data.planCode}
        </div>
        <div className="d-flex align-items-center justify-content-between py-3 card-header">
            <div>
                <div className="text-main-green card-title h5">
                    ₹ {formatNumber(Number(investmentAmounts[0]))}
                </div>
                <p className="card-text">Min. Investment</p>
            </div>
            <div>
                <div className="text-main-green card-title h5">{Number(data.maturityValueOptions) * 100}%</div>
                <p className="card-text">ROI</p>
            </div>
        </div>
        <div className="text-center card-body">
            <div className="d-flex align-items-center justify-content-between mb-3 text-start">
                <div>
                    <p className="card-text">
                        <img
                            src="https://cms.growpital.com/uploads/soil_Farming_1_a2e926fff4_588c230283.svg"
                            alt=""
                            className="mb-1"
                            style={{ width: "1rem" }}
                        />
                        Tenure
                    </p>
                    <p className="card-text">
                        <img
                            src="https://cms.growpital.com/uploads/locking_205dde42f1.svg"
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1rem" }}
                        />
                        Lockin period
                    </p>
                    <p className="card-text">
                        <img
                            src="https://cms.growpital.com/uploads/uil_money_insert_f5b9a6c93a.svg"
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1.2rem" }}
                        />
                        Payout
                    </p>
                </div>
                <div>
                    <p className="card-text">:</p>
                    <p className="card-text">:</p>
                    <p className="card-text">:</p>
                </div>
                <div>
                    <p className="card-text">{lowestInvestmentPlan.length} Years</p>
                    <p className="card-text">{lockingPeriod} Years</p>
                    <p className="card-text">Monthly</p>
                </div>
            </div>
            <div className="py-2">
                    <button
                        type="button"
                        className="main-btn-service maincolor bg-transparent btn btn-primary"
                        onClick={() => { 
                            if(userInfo?.name){
                                if(userInfo.kycStatus === "NO"){
                                    navigate(`/user/profile`) 
                                }else{
                                    setDialog(true)
                                }
                            }else{
                                navigate(`/login`) 
                            }
                        }}
                    >
                        Invest Now
                    </button>
            </div>
            <div className="py-2">
                <a
                    href={`/plan-overview/${data.planCode}`}
                    className="fs-16 fw-700 text-white text-center py-2"
                >
                    Know more
                </a>
            </div>
        </div>
    </div>
}