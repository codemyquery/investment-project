import { useNavigate } from "react-router";
import { PlanServerData } from "../../types"
import { formatNumber } from "../../utils";
import { useAuth } from "../../providers";
import tenure from "../../assets/images/tenure.svg";
import lockinPeriod from "../../assets/images/lockin-period.svg";
import payout from "../../assets/images/layout.svg";
import leaf from "../../assets/images/leafy.png";
interface PlanSliderCardsProps {
    data: PlanServerData
}
export const PlanSliderCards = ({
    data,
}: PlanSliderCardsProps) => {
    const navigate = useNavigate();
    const { userInfo } = useAuth();
    // finding the lowest plan amount
    let lockingPeriod = 0;
    let income = 0;
    let maturityValue = 0;
    const investmentAmounts = Object.keys(data.planDetails).sort((a, b) => Number(a) > Number(b) ? Number(a) : Number(b));
    const lowestInvestmentPlanWithHeader = data.planDetails[investmentAmounts[0]];
    const _plandetails = data.planDetails[investmentAmounts[4]];
    _plandetails.forEach( (element,index) => {
        if(index !== 0){
            income = income + parseInt(_plandetails[index]['0']);
            maturityValue = maturityValue + parseInt(_plandetails[index]['1']);
        }
        
   });
    const lowestInvestmentPlan = [...lowestInvestmentPlanWithHeader].slice(1, lowestInvestmentPlanWithHeader.length);
    lowestInvestmentPlan.every((row, index) => {
        return row[2] == '0' ? ++lockingPeriod : false; // It contains 3 element [yearlyIncome, Maturity, Surrender Value]
    })
    return <div className='mb-2 bg-dark-gradient text-white position-relative card' style={{ width: "50rem", margin: '10px', borderRadius: '10px' }}>
        <div className="d-inline-flex align-items-center py-3 fw-bold fs-4 card-header">
            <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center me-4 p-2">
                <img
                    src={leaf}
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
                    {/* ₹ {formatNumber(Number(investmentAmounts[0]))} */}
                    ₹ 1 Lac
                </div>
                <p className="card-text">Initial Min. Investment</p>
            </div>
            
            <div>
                <div className="text-main-green card-title h5">{((maturityValue+ income)/5000000).toFixed(2)}x</div>
                <p className="card-text">ROI</p>
            </div>
        </div>
        <div className="text-main-green card-title h5" style={{textAlign:'center'}}>What You Invest?</div>
        <div className="text-center card-body">
            <div className="d-flex align-items-center justify-content-between mb-3 text-start">
                <div>
                    <p className="card-text">
                        <img
                            src={tenure}
                            alt="tenure"
                            className="mb-1"
                            style={{ width: "1rem" }}
                        />
                        Initial Investment
                    </p>
                    <p className="card-text">
                        <img
                            src={lockinPeriod}
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1rem" }}
                        />
                        Payment Term
                    </p>
                    {/* <p className="card-text">
                        <img
                            src={payout}
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1.2rem" }}
                        />
                        Total Investment
                    </p> */}
                </div>
                <div>
                    <p className="card-text">:</p>
                    <p className="card-text">:</p>
                    {/* <p className="card-text">:</p> */}
                </div>
                <div>
                    <p className="card-text">₹ {formatNumber(Number(investmentAmounts[4])/data.ppt)} </p>
                    <p className="card-text">{data.ppt} Years</p>
                    {/* <p className="card-text">₹{formatNumber((Number(investmentAmounts[4])))}</p> */}
                </div>
            </div>
            <div className="text-main-green card-title h5" style={{textAlign:'center'}}>What You Get?</div>
            <div className="d-flex align-items-center justify-content-between mb-3 text-start">
                <div>
                    {/* <p className="card-text">
                        <img
                            src={tenure}
                            alt="tenure"
                            className="mb-1"
                            style={{ width: "1rem" }}
                        />
                        Income Started
                    </p> */}
                    <p className="card-text">
                        <img
                            src={lockinPeriod}
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1rem" }}
                        />
                        Assured Monthly Income
                    </p>
                    <p className="card-text">
                        <img
                            src={payout}
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1.2rem" }}
                        />
                        Yearly Assured Income
                    </p>
                    <p className="card-text">
                        <img
                            src={payout}
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1.2rem" }}
                        />
                        Income Term
                    </p>
                    {/* <p className="card-text">
                        <img
                            src={payout}
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1.2rem" }}
                        />
                        Matuarity Value
                    </p> */}
                    <p className="card-text">
                        <img
                            src={payout}
                            alt="locking"
                            className="img-fluid mb-1"
                            style={{ width: "1.2rem" }}
                        />
                        Total Assured Benefit
                    </p>
                </div>
                <div>
                    <p className="card-text">:</p>
                    <p className="card-text">:</p>
                    <p className="card-text">:</p>
                    <p className="card-text">:</p>
                    {/* <p className="card-text">:</p>
                    <p className="card-text">:</p> */}
                </div>
                <div>
                    {/* <p className="card-text">1st Year </p> */}
                    <p className="card-text">₹ {formatNumber(Math.round(income/(parseInt(data.incomeTermOptions)*12)))} </p>
                    <p className="card-text">₹ {formatNumber(Math.round(income/parseInt(data.incomeTermOptions)))}</p>
                    <p className="card-text"> {data.incomeTermOptions} Years</p>
                    {/* <p className="card-text">₹ {formatNumber(((Number(investmentAmounts[4]))) * parseFloat(data.maturityValueOptions))}</p> */}
                    <p className="card-text">₹ {formatNumber((maturityValue)+income)}</p>
                </div>
            </div>
            <div className="py-2">
                {/* <a
                    href={`/plan-overview/${data.planCode}/${investmentAmounts[4]}`}
                    className="fs-16 fw-700 text-white text-center py-2"
                > */}
                    <button
                        type="button"
                        className="main-btn-service maincolor bg-transparent btn btn-primary"
                        onClick={() => {
                                            
                            navigate(`/plan-overview/${data.planCode}/${investmentAmounts[4]}`);
                        }}
                    >
                        Invest Now
                    </button>
                {/* </a> */}
            </div>
        </div>
    </div>
}