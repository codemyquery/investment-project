import { Box, useTheme, Skeleton, colors } from "@mui/material"
import { useState } from "react";
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import { PlanServerData } from "../../types";
import { PlanSliderCards } from "../molecules";
import { Sell } from "../../services";
import { green } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface PlanSliderProps {
    planDetail: PlanServerData[],
    loader: boolean
}

export const PlanSlider = ({
    
    loader,
    planDetail
}: PlanSliderProps) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const isMobile = window.matchMedia("(max-width: 600px)").matches;

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    if (loader) {
        return <Skeleton sx={{ width: '100%', height: '200px' }} />
    }
    
    return <section className="py-3" id="invest-now-plans">
        <div className="container">
            <div className="d-flex justify-content-center align-items-center row">
                <div
                    data-aos="fade-up"
                    className="text-center col aos-init aos-animate"
                >
                    <p className="text-uppercase fs-18 fw-500 text-main-green">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 16 16"
                            className="me-1"
                            height={8}
                            width={8}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx={8} cy={8} r={8} />
                        </svg>
                        WHICH PLAN WHOULD YOU LIKE TO INVEST IN ?
                    </p>
                    <h2 className="text-white fw-600 display-6 mb-3 mb-md-4">
                        Invest in our
                        <span className="text-main-green"> high return </span> plans
                    </h2>
                </div>
            </div>
            <div className="/* d-flex justify-content-center px-md-5 align-items-center pt-2 row */">
                <Box sx={{ flexGrow: 1 }}>
                    {/* <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    > */}
                        {
                            (() => {
                               
                                const planSlider = [];
                                for (let i = 0; i < 6; isMobile ? i++ : i += 3) {
                                    const plan1 = planDetail[i]
                                    const plan2 = planDetail[i + 1]
                                    const plan3 = planDetail[i + 2]
                                    planSlider.push(
                                        <div key={plan1.planCode} >
                                            <div data-aos="fade-up" className="d-flex justify-content-center align-items-center aos-init aos-animate">
                                                {plan1 && <PlanSliderCards key={plan1.planCode} data={plan1} />}
                                                {!isMobile && plan2 && <PlanSliderCards key={plan2.planCode} data={plan2} />}
                                                {!isMobile && plan3 && <PlanSliderCards key={plan3.planCode} data={plan3} />}
                                            </div>
                                        </div>
                                    );
                                }
                                
                                planSlider.push(<div style={{color:'green',textAlign:'right'}}>
                                    <button onClick={() => {
                                            
                                            navigate('./all-plan');
                                        }}>View More Plans</button></div>);
                                return planSlider;
                            })()
                        }
                    {/* </AutoPlaySwipeableViews> */}
                </Box>
            </div>
        </div>
    </section>
}