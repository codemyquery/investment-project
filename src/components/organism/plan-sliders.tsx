import { Box, useTheme, Skeleton } from "@mui/material"
import { useState } from "react";
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import { PlanServerData } from "../../types";
import { PlanSliderCards } from "../molecules";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface PlanSliderProps {
    planDetail: PlanServerData[],
    loader: boolean
}
export const PlanSlider = ({
    loader,
    planDetail
}: PlanSliderProps) => {

    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = planDetail.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    if (loader) {
        return <Skeleton sx={{ width: '100%', height: '200px' }} />
    }

    return <section className="py-3">
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

                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {
                            (() => {
                                const arr = [];
                                for (let i = 0; i < planDetail.length; i += 2) {
                                    const plan1 = planDetail[i]
                                    const plan2 = planDetail[i + 1]
                                    arr.push(
                                        <div key={plan1.planCode} >
                                            <div data-aos="fade-up" className="d-flex justify-content-center align-items-center   aos-init aos-animate">
                                                <PlanSliderCards classss="mobileview1" key={plan1.planCode} data={plan1} />
                                                <PlanSliderCards classss="mobileview2" key={plan2.planCode} data={plan2} />
                                            </div>
                                        </div>
                                    );
                                }
                                return arr;
                            })()
                        }
                    </AutoPlaySwipeableViews>
                </Box>
            </div>
        </div>
    </section>
}