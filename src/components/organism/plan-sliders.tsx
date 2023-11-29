import { Box, useTheme, Skeleton, Grid } from "@mui/material"
import { useState } from "react";
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import { DefaultFormState, PlanServerData } from "../../types";
import { PlanSliderCards } from "../molecules";
import { GenericDialog } from "./genique-dialog";
import { InsertSellData } from "../../services/sell";
import { useNavigate } from "react-router-dom";
import { SellFormData } from "../../types/sell";
import { Sell, useHookForm } from "../../services";
import { BASE_URL } from "../../utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface PlanSliderProps {
    planDetail: PlanServerData[],
    loader: boolean
}
export const PlanSlider = ({
    loader,
    planDetail
}: PlanSliderProps) => {
    const [dialog, setDialog] = useState(false)
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const isMobile = window.matchMedia("(max-width: 600px)").matches;

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    if (loader) {
        return <Skeleton sx={{ width: '100%', height: '200px' }} />
    }

    const closeDialog = () => {
        setDialog(false)
    }
    const YesPurchase = () => {
        const navigate = useNavigate();
        const [formState, setFormState] = useState<SellFormData>();
    
        const {
            control,
            handleSubmit,
            formState: { },
        } = useHookForm<SellFormData>({  });
    
        const onSubmitItem = async (data: SellFormData) => {
            try {
                const response = await Sell.InsertSellData(data);
                
                if (response) {
                    window.location.href = `${BASE_URL}/user/my-plan`
                } else {
                    
                }
            } catch (error) {
                
            }
        }
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
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {
                            (() => {
                                const planSlider = [];
                                for (let i = 0; i < planDetail.length; isMobile ? i++ : i += 2) {
                                    const plan1 = planDetail[i]
                                    const plan2 = planDetail[i + 1]
                                    planSlider.push(
                                        <div key={plan1.planCode} >
                                            <div data-aos="fade-up" className="d-flex justify-content-center align-items-center aos-init aos-animate">
                                                {plan1 && <PlanSliderCards setDialog={setDialog} key={plan1.planCode} data={plan1} />}
                                                {!isMobile && plan2 && <PlanSliderCards setDialog={setDialog} key={plan2.planCode} data={plan2} />}
                                            </div>
                                        </div>
                                    );
                                }
                                return planSlider;
                            })()
                        }
                    </AutoPlaySwipeableViews>
                </Box>
                <GenericDialog
                    open={dialog}
                    title={"Purchase Plan"}
                    content={<>Are you sure you want to purchase this plan?</>}
                    maxWidth='sm'
                    onClose={closeDialog}
                    onCloseText="No, Cancel"
                    onSubmit={YesPurchase}
                    onSubmitText="Yes, Purchase"
                />
            </div>
        </div>
    </section>
}