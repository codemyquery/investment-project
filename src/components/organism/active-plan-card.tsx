import { color } from "@mui/system";
import { UserActivePlanServerData } from "../../types"
import { formatNumber } from "../../utils"
import { green } from "@mui/material/colors";

interface ActivePlanCardProps {
    data: UserActivePlanServerData
}
export const ActivePlanCard = ({
    data
}: ActivePlanCardProps) => {
    const policyTerm = data.purchase_plan_details.planDetails[data.planAmount].length-1;
    const startDate = new Date(data.orderDate);
    const maturityDate = new Date(data.orderDate);
    const today = new Date();
    let income = 0;
    let maturityValue =  0;
    let SurrenderValue = 0;
    let SurrenderYear =  today.getFullYear() - startDate.getFullYear() + 1;
    maturityDate.setFullYear(startDate.getFullYear()+policyTerm);
    data.purchase_plan_details.planDetails[data.planAmount].forEach( (element,index) => {
        if(index !== 0){
            income = income + parseInt(data.purchase_plan_details.planDetails[data.planAmount][index]['0']);
            maturityValue = maturityValue + parseInt(data.purchase_plan_details.planDetails[data.planAmount][index]['1']);
            SurrenderValue = parseInt(data.purchase_plan_details.planDetails[data.planAmount][SurrenderYear]['2']);
        }
        
   });
   let monthlyIncome = income/(12 * policyTerm)
    return <div data-aos="fade-up" className="d-flex justify-content-center align-items-center mb-5 col-lg-6 aos-init aos-animate">
        <div className="mb-2 bg-dark-gradient text-white position-relative card" style={{ width: "25rem" }}>
            <div className="d-inline-flex align-items-center py-3 fw-bold fs-4 card-header" style={{backgroundColor:'white',color:'green', textAlign:'center',float:'right'}} >
                {`${data.purchase_plan_details.planName} - ${data.purchase_plan_details.planCode}`}
            </div>
            <div className="text-center card-body">
                <div className="d-flex align-items-center justify-content-between mb-3 text-start">
                    <div style={{color:'green'}}>
                        <p className="card-text">Invest. Amount</p>
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
                        <p className="card-text">:</p>
                    </div>
                    <div>
                        <p className="card-text">₹ {formatNumber(Number(data.planAmount))}</p>
                        <p className="card-text">{startDate.toDateString()}</p>
                        <p className="card-text">{policyTerm} Years</p>
                        <p className="card-text">3 Years</p>
                        <p className="card-text">₹ {formatNumber(maturityValue)}</p>
                        <p className="card-text">₹ {formatNumber(parseInt(monthlyIncome.toString()))}</p>
                        <p className="card-text">{maturityDate.toDateString()}</p>
                        <p className="card-text">₹ {formatNumber(SurrenderValue)}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}