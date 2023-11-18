import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import { Box, Paper, Typography, MobileStepper, Button, useTheme } from "@mui/material"
import { theme } from "../../styles"
import { useState } from "react";
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];
export const PlanSlider = () => {

    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = images.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step: number) => {
      setActiveStep(step);
    };

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
                        {images.map((step, index) => (
                            <div key={step.label} >
                                <div data-aos="fade-up" className="d-flex justify-content-center align-items-center   aos-init aos-animate">
                                    <div className="mb-2 bg-dark-gradient text-white position-relative card mobileview1" style={{ width: "50rem" }}>
                                        <div className="d-inline-flex align-items-center py-3 fw-bold fs-4 card-header">
                                            <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center me-4 p-2">
                                                <img
                                                    src="https://cms.growpital.com/uploads/leafy_eleven_plan_fbfc42c562.png"
                                                    alt=""
                                                    className="img-fluid"
                                                    style={{ width: "1.5rem" }}
                                                />
                                            </p>
                                            Leafy Eleven
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between py-3 card-header">
                                            <div>
                                                <div className="text-main-green card-title h5">
                                                    ₹ 11,000/unit
                                                </div>
                                                <p className="card-text">Investment</p>
                                            </div>
                                            <div>
                                                <div className="text-main-green card-title h5">11%</div>
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
                                                    <p className="card-text">12 Months</p>
                                                    <p className="card-text">12 Months</p>
                                                    <p className="card-text">Monthly</p>
                                                </div>
                                            </div>
                                            <div className="py-2">
                                                <a href="https://app.growpital.com/signup">
                                                    <button
                                                        type="button"
                                                        className="main-btn-service maincolor bg-transparent btn btn-primary"
                                                    >
                                                        Invest Now
                                                    </button>
                                                </a>
                                            </div>
                                            <div className="py-2">
                                                <a
                                                    href="https://drive.google.com/file/d/1bUF3cdfk5gGHGSK7Jh35kQD9ZwrQMLTK/view"
                                                    className="fs-16 fw-700 text-white text-center py-2"
                                                >
                                                    Know more
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="mb-2 bg-dark-gradient text-white position-relative card mobileview2" style={{ width: "50rem", marginLeft:"15px"}}>
                                        <div className="d-inline-flex align-items-center py-3 fw-bold fs-4 card-header">
                                            <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center me-4 p-2">
                                                <img
                                                    src="https://cms.growpital.com/uploads/leafy_eleven_plan_fbfc42c562.png"
                                                    alt=""
                                                    className="img-fluid"
                                                    style={{ width: "1.5rem" }}
                                                />
                                            </p>
                                            EverGreen Returns
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between py-3 card-header">
                                            <div>
                                                <div className="text-main-green card-title h5">
                                                    ₹ 20,000/unit
                                                </div>
                                                <p className="card-text">Investment</p>
                                            </div>
                                            <div>
                                                <div className="text-main-green card-title h5">12%</div>
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
                                                    <p className="card-text">12 Months</p>
                                                    <p className="card-text">12 Months</p>
                                                    <p className="card-text">Quarterly</p>
                                                </div>
                                            </div>
                                            <div className="py-2">
                                                <a href="https://app.growpital.com/signup">
                                                    <button
                                                        type="button"
                                                        className="main-btn-service maincolor bg-transparent btn btn-primary"
                                                    >
                                                        Invest Now
                                                    </button>
                                                </a>
                                            </div>
                                            <div className="py-2">
                                                <a
                                                    href="https://drive.google.com/file/d/1bUF3cdfk5gGHGSK7Jh35kQD9ZwrQMLTK/view"
                                                    className="fs-16 fw-700 text-white text-center py-2"
                                                >
                                                    Know more
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                
                                
                                </div>
                                
                            </div>
                        ))}
                    </AutoPlaySwipeableViews>
                    
                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                            <Button
                                size="small"
                                onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}
                            >
                                Next
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft />
                                ) : (
                                    <KeyboardArrowRight />
                                )}
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowRight />
                                ) : (
                                    <KeyboardArrowLeft />
                                )}
                                Back
                            </Button>
                        }
                    />
                </Box>
            </div>
            
            {/* <div className="d-flex justify-content-center px-md-5 align-items-center pt-2 row">
                <div className="Service-Card d-none d-xl-block col-md-9">
                    <div className="d-flex justify-content-center align-items-center row">
                        <div data-aos="fade-up" className="d-flex justify-content-center align-items-center mb-5 col-lg-6 aos-init aos-animate">
                            <div className="mb-2 bg-dark-gradient text-white position-relative card" style={{ width: "25rem" }}>
                                <div className="d-inline-flex align-items-center py-3 fw-bold fs-4 card-header">
                                    <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center me-4 p-2">
                                        <img
                                            src="https://cms.growpital.com/uploads/leafy_eleven_plan_fbfc42c562.png"
                                            alt=""
                                            className="img-fluid"
                                            style={{ width: "1.5rem" }}
                                        />
                                    </p>
                                    Leafy Eleven
                                </div>
                                <div className="d-flex align-items-center justify-content-between py-3 card-header">
                                    <div>
                                        <div className="text-main-green card-title h5">
                                            ₹ 11,000/unit
                                        </div>
                                        <p className="card-text">Investment</p>
                                    </div>
                                    <div>
                                        <div className="text-main-green card-title h5">11%</div>
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
                                            <p className="card-text">12 Months</p>
                                            <p className="card-text">12 Months</p>
                                            <p className="card-text">Monthly</p>
                                        </div>
                                    </div>
                                    <div className="py-2">
                                        <a href="https://app.growpital.com/signup">
                                            <button
                                                type="button"
                                                className="main-btn-service maincolor bg-transparent btn btn-primary"
                                            >
                                                Invest Now
                                            </button>
                                        </a>
                                    </div>
                                    <div className="py-2">
                                        <a
                                            href="https://drive.google.com/file/d/1bUF3cdfk5gGHGSK7Jh35kQD9ZwrQMLTK/view"
                                            className="fs-16 fw-700 text-white text-center py-2"
                                        >
                                            Know more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            data-aos="fade-up"
                            className="d-flex justify-content-center align-items-center mb-5 col-lg-6 aos-init aos-animate"
                        >
                            <div
                                className="mb-2 bg-dark-gradient text-white position-relative card"
                                style={{ width: "25rem" }}
                            >
                                <div className="d-inline-flex align-items-center py-3 fw-bold fs-4 card-header">
                                    <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center me-4 p-2">
                                        <img
                                            src="https://cms.growpital.com/uploads/leafy_eleven_plan_fbfc42c562.png"
                                            alt=""
                                            className="img-fluid"
                                            style={{ width: "1.5rem" }}
                                        />
                                    </p>
                                    EverGreen Returns
                                </div>
                                <div className="d-flex align-items-center justify-content-between py-3 card-header">
                                    <div>
                                        <div className="text-main-green card-title h5">
                                            ₹ 20,000/unit
                                        </div>
                                        <p className="card-text">Investment</p>
                                    </div>
                                    <div>
                                        <div className="text-main-green card-title h5">12%</div>
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
                                            <p className="card-text">12 Months</p>
                                            <p className="card-text">12 Months</p>
                                            <p className="card-text">Quarterly</p>
                                        </div>
                                    </div>
                                    <div className="py-2">
                                        <a href="https://app.growpital.com/signup">
                                            <button
                                                type="button"
                                                className="main-btn-service maincolor bg-transparent btn btn-primary"
                                            >
                                                Invest Now
                                            </button>
                                        </a>
                                    </div>
                                    <div className="py-2">
                                        <a
                                            href="https://drive.google.com/file/d/1bUF3cdfk5gGHGSK7Jh35kQD9ZwrQMLTK/view"
                                            className="fs-16 fw-700 text-white text-center py-2"
                                        >
                                            Know more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}
            {/* <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events d-xl-none Service-Card">
                <div className="swiper-wrapper" style={{ cursor: "grab", transitionDuration: "0ms" }}>
                    <div className="swiper-slide swiper-slide-duplicate mb-5" data-swiper-slide-index={0}>
                        <div data-aos="fade-up" className="d-flex justify-content-center align-items-center mb-5 col-md-12 aos-init aos-animate">
                            <div className="mb-2 bg-dark-gradient text-white px-3 card" style={{ width: "25rem" }}>
                                <div className="d-inline-flex align-items-center py-3 fw-bold fs-4 card-header">
                                    <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center me-4 p-2">
                                        <img
                                            src="https://cms.growpital.com/uploads/leafy_eleven_plan_fbfc42c562.png"
                                            alt=""
                                            className="img-fluid"
                                            style={{ width: "1rem" }}
                                        />
                                    </p>
                                    Leafy Eleven
                                </div>
                                <div className="d-flex align-items-center justify-content-between py-3 card-header">
                                    <div>
                                        <div className="text-main-green card-title h5">
                                            ₹ 11000/unit
                                        </div>
                                        <p className="card-text">Investment</p>
                                    </div>
                                    <div>
                                        <div className="text-main-green card-title h5">11%</div>
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
                                                Lock in period
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
                                            <p className="card-text">12 Months</p>
                                            <p className="card-text">12 Months</p>
                                            <p className="card-text">Monthly</p>
                                        </div>
                                    </div>
                                    <div className="py-2">
                                        <a href="https://app.growpital.com/signup">
                                            <button
                                                type="button"
                                                className="main-btn-service maincolor bg-transparent btn btn-primary"
                                            >
                                                Invest Now
                                            </button>
                                        </a>
                                    </div>
                                    <div className="py-2">
                                        <a
                                            href="https://drive.google.com/file/d/1bUF3cdfk5gGHGSK7Jh35kQD9ZwrQMLTK/view"
                                            className="fs-16 fw-700 text-white text-center py-2"
                                        >
                                            Know more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="swiper-slide swiper-slide-duplicate mb-5"
                        data-swiper-slide-index={1}
                    >
                        <div
                            data-aos="fade-up"
                            className="d-flex justify-content-center align-items-center mb-5 col-md-12 aos-init aos-animate"
                        >
                            <div
                                className="mb-2 bg-dark-gradient text-white px-3 card"
                                style={{ width: "25rem" }}
                            >
                                <div className="d-inline-flex align-items-center py-3 fw-bold fs-4 card-header">
                                    <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center me-4 p-2">
                                        <img
                                            src="https://cms.growpital.com/uploads/leafy_eleven_plan_fbfc42c562.png"
                                            alt=""
                                            className="img-fluid"
                                            style={{ width: "1rem" }}
                                        />
                                    </p>
                                    EverGreen Returns
                                </div>
                                <div className="d-flex align-items-center justify-content-between py-3 card-header">
                                    <div>
                                        <div className="text-main-green card-title h5">
                                            ₹ 20000/unit
                                        </div>
                                        <p className="card-text">Investment</p>
                                    </div>
                                    <div>
                                        <div className="text-main-green card-title h5">12%</div>
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
                                                Lock in period
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
                                            <p className="card-text">12 Months</p>
                                            <p className="card-text">12 Months</p>
                                            <p className="card-text">Quarterly</p>
                                        </div>
                                    </div>
                                    <div className="py-2">
                                        <a href="https://app.growpital.com/signup">
                                            <button
                                                type="button"
                                                className="main-btn-service maincolor bg-transparent btn btn-primary"
                                            >
                                                Invest Now
                                            </button>
                                        </a>
                                    </div>
                                    <div className="py-2">
                                        <a
                                            href="https://drive.google.com/file/d/1bUF3cdfk5gGHGSK7Jh35kQD9ZwrQMLTK/view"
                                            className="fs-16 fw-700 text-white text-center py-2"
                                        >
                                            Know more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="swiper-slide swiper-slide-duplicate mb-5"
                        data-swiper-slide-index={2}
                    >
                        <div
                            data-aos="fade-up"
                            className="d-flex justify-content-center align-items-center mb-5 col-md-12 aos-init aos-animate"
                        >
                            <div
                                className="mb-2 bg-dark-gradient text-white px-3 card"
                                style={{ width: "25rem" }}
                            >
                                <div className="d-inline-flex align-items-center py-3 fw-bold fs-4 card-header">
                                    <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center me-4 p-2">
                                        <img
                                            src="https://cms.growpital.com/uploads/soil_Farming_1_a2e926fff4_588c230283.svg"
                                            alt=""
                                            className="img-fluid"
                                            style={{ width: "1rem" }}
                                        />
                                    </p>
                                    Harvest Bloom
                                </div>
                                <div className="d-flex align-items-center justify-content-between py-3 card-header">
                                    <div>
                                        <div className="text-main-green card-title h5">
                                            ₹ 200000/unit
                                        </div>
                                        <p className="card-text">Investment</p>
                                    </div>
                                    <div>
                                        <div className="text-main-green card-title h5">14%</div>
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
                                                Lock in period
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
                                            <p className="card-text">12 Months</p>
                                            <p className="card-text">12 Months</p>
                                            <p className="card-text">Quarterly</p>
                                        </div>
                                    </div>
                                    <div className="py-2">
                                        <a href="https://app.growpital.com/signup">
                                            <button
                                                type="button"
                                                className="main-btn-service maincolor bg-transparent btn btn-primary"
                                            >
                                                Invest Now
                                            </button>
                                        </a>
                                    </div>
                                    <div className="py-2">
                                        <a
                                            href="https://drive.google.com/file/d/1bUF3cdfk5gGHGSK7Jh35kQD9ZwrQMLTK/view"
                                            className="fs-16 fw-700 text-white text-center py-2"
                                        >
                                            Know more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide mb-5" data-swiper-slide-index={0}>
                        <div
                            data-aos="fade-up"
                            className="d-flex justify-content-center align-items-center mb-5 col-md-12 aos-init aos-animate"
                        >
                            <div
                                className="mb-2 bg-dark-gradient text-white px-3 card"
                                style={{ width: "25rem" }}
                            >
                                <div className="d-inline-flex align-items-center py-3 fw-bold fs-4 card-header">
                                    <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center me-4 p-2">
                                        <img
                                            src="https://cms.growpital.com/uploads/leafy_eleven_plan_fbfc42c562.png"
                                            alt=""
                                            className="img-fluid"
                                            style={{ width: "1rem" }}
                                        />
                                    </p>
                                    Leafy Eleven
                                </div>
                                <div className="d-flex align-items-center justify-content-between py-3 card-header">
                                    <div>
                                        <div className="text-main-green card-title h5">
                                            ₹ 11000/unit
                                        </div>
                                        <p className="card-text">Investment</p>
                                    </div>
                                    <div>
                                        <div className="text-main-green card-title h5">11%</div>
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
                                                Lock in period
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
                                            <p className="card-text">12 Months</p>
                                            <p className="card-text">12 Months</p>
                                            <p className="card-text">Monthly</p>
                                        </div>
                                    </div>
                                    <div className="py-2">
                                        <a href="https://app.growpital.com/signup">
                                            <button
                                                type="button"
                                                className="main-btn-service maincolor bg-transparent btn btn-primary"
                                            >
                                                Invest Now
                                            </button>
                                        </a>
                                    </div>
                                    <div className="py-2">
                                        <a
                                            href="https://drive.google.com/file/d/1bUF3cdfk5gGHGSK7Jh35kQD9ZwrQMLTK/view"
                                            className="fs-16 fw-700 text-white text-center py-2"
                                        >
                                            Know more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide mb-5" data-swiper-slide-index={1}>
                        <div
                            data-aos="fade-up"
                            className="d-flex justify-content-center align-items-center mb-5 col-md-12 aos-init aos-animate"
                        >
                            <div
                                className="mb-2 bg-dark-gradient text-white px-3 card"
                                style={{ width: "25rem" }}
                            >
                                <div className="d-inline-flex align-items-center py-3 fw-bold fs-4 card-header">
                                    <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center me-4 p-2">
                                        <img
                                            src="https://cms.growpital.com/uploads/leafy_eleven_plan_fbfc42c562.png"
                                            alt=""
                                            className="img-fluid"
                                            style={{ width: "1rem" }}
                                        />
                                    </p>
                                    EverGreen Returns
                                </div>
                                <div className="d-flex align-items-center justify-content-between py-3 card-header">
                                    <div>
                                        <div className="text-main-green card-title h5">
                                            ₹ 20000/unit
                                        </div>
                                        <p className="card-text">Investment</p>
                                    </div>
                                    <div>
                                        <div className="text-main-green card-title h5">12%</div>
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
                                                Lock in period
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
                                            <p className="card-text">12 Months</p>
                                            <p className="card-text">12 Months</p>
                                            <p className="card-text">Quarterly</p>
                                        </div>
                                    </div>
                                    <div className="py-2">
                                        <a href="https://app.growpital.com/signup">
                                            <button
                                                type="button"
                                                className="main-btn-service maincolor bg-transparent btn btn-primary"
                                            >
                                                Invest Now
                                            </button>
                                        </a>
                                    </div>
                                    <div className="py-2">
                                        <a
                                            href="https://drive.google.com/file/d/1bUF3cdfk5gGHGSK7Jh35kQD9ZwrQMLTK/view"
                                            className="fs-16 fw-700 text-white text-center py-2"
                                        >
                                            Know more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide mb-5" data-swiper-slide-index={2}>
                        <div
                            data-aos="fade-up"
                            className="d-flex justify-content-center align-items-center mb-5 col-md-12 aos-init aos-animate"
                        >
                            <div
                                className="mb-2 bg-dark-gradient text-white px-3 card"
                                style={{ width: "25rem" }}
                            >
                                <div className="d-inline-flex align-items-center py-3 fw-bold fs-4 card-header">
                                    <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center me-4 p-2">
                                        <img
                                            src="https://cms.growpital.com/uploads/soil_Farming_1_a2e926fff4_588c230283.svg"
                                            alt=""
                                            className="img-fluid"
                                            style={{ width: "1rem" }}
                                        />
                                    </p>
                                    Harvest Bloom
                                </div>
                                <div className="d-flex align-items-center justify-content-between py-3 card-header">
                                    <div>
                                        <div className="text-main-green card-title h5">
                                            ₹ 200000/unit
                                        </div>
                                        <p className="card-text">Investment</p>
                                    </div>
                                    <div>
                                        <div className="text-main-green card-title h5">14%</div>
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
                                                Lock in period
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
                                            <p className="card-text">12 Months</p>
                                            <p className="card-text">12 Months</p>
                                            <p className="card-text">Quarterly</p>
                                        </div>
                                    </div>
                                    <div className="py-2">
                                        <a href="https://app.growpital.com/signup">
                                            <button
                                                type="button"
                                                className="main-btn-service maincolor bg-transparent btn btn-primary"
                                            >
                                                Invest Now
                                            </button>
                                        </a>
                                    </div>
                                    <div className="py-2">
                                        <a
                                            href="https://drive.google.com/file/d/1bUF3cdfk5gGHGSK7Jh35kQD9ZwrQMLTK/view"
                                            className="fs-16 fw-700 text-white text-center py-2"
                                        >
                                            Know more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="swiper-slide swiper-slide-duplicate mb-5"
                        data-swiper-slide-index={0}
                    >
                        <div
                            data-aos="fade-up"
                            className="d-flex justify-content-center align-items-center mb-5 col-md-12 aos-init aos-animate"
                        >
                            <div
                                className="mb-2 bg-dark-gradient text-white px-3 card"
                                style={{ width: "25rem" }}
                            >
                                <div className="d-inline-flex align-items-center py-3 fw-bold fs-4 card-header">
                                    <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center me-4 p-2">
                                        <img
                                            src="https://cms.growpital.com/uploads/leafy_eleven_plan_fbfc42c562.png"
                                            alt=""
                                            className="img-fluid"
                                            style={{ width: "1rem" }}
                                        />
                                    </p>
                                    Leafy Eleven
                                </div>
                                <div className="d-flex align-items-center justify-content-between py-3 card-header">
                                    <div>
                                        <div className="text-main-green card-title h5">
                                            ₹ 11000/unit
                                        </div>
                                        <p className="card-text">Investment</p>
                                    </div>
                                    <div>
                                        <div className="text-main-green card-title h5">11%</div>
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
                                                Lock in period
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
                                            <p className="card-text">12 Months</p>
                                            <p className="card-text">12 Months</p>
                                            <p className="card-text">Monthly</p>
                                        </div>
                                    </div>
                                    <div className="py-2">
                                        <a href="https://app.growpital.com/signup">
                                            <button
                                                type="button"
                                                className="main-btn-service maincolor bg-transparent btn btn-primary"
                                            >
                                                Invest Now
                                            </button>
                                        </a>
                                    </div>
                                    <div className="py-2">
                                        <a
                                            href="https://drive.google.com/file/d/1bUF3cdfk5gGHGSK7Jh35kQD9ZwrQMLTK/view"
                                            className="fs-16 fw-700 text-white text-center py-2"
                                        >
                                            Know more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="swiper-slide swiper-slide-duplicate mb-5"
                        data-swiper-slide-index={1}
                    >
                        <div
                            data-aos="fade-up"
                            className="d-flex justify-content-center align-items-center mb-5 col-md-12 aos-init aos-animate"
                        >
                            <div
                                className="mb-2 bg-dark-gradient text-white px-3 card"
                                style={{ width: "25rem" }}
                            >
                                <div className="d-inline-flex align-items-center py-3 fw-bold fs-4 card-header">
                                    <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center me-4 p-2">
                                        <img
                                            src="https://cms.growpital.com/uploads/leafy_eleven_plan_fbfc42c562.png"
                                            alt=""
                                            className="img-fluid"
                                            style={{ width: "1rem" }}
                                        />
                                    </p>
                                    EverGreen Returns
                                </div>
                                <div className="d-flex align-items-center justify-content-between py-3 card-header">
                                    <div>
                                        <div className="text-main-green card-title h5">
                                            ₹ 20000/unit
                                        </div>
                                        <p className="card-text">Investment</p>
                                    </div>
                                    <div>
                                        <div className="text-main-green card-title h5">12%</div>
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
                                                Lock in period
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
                                            <p className="card-text">12 Months</p>
                                            <p className="card-text">12 Months</p>
                                            <p className="card-text">Quarterly</p>
                                        </div>
                                    </div>
                                    <div className="py-2">
                                        <a href="https://app.growpital.com/signup">
                                            <button
                                                type="button"
                                                className="main-btn-service maincolor bg-transparent btn btn-primary"
                                            >
                                                Invest Now
                                            </button>
                                        </a>
                                    </div>
                                    <div className="py-2">
                                        <a
                                            href="https://drive.google.com/file/d/1bUF3cdfk5gGHGSK7Jh35kQD9ZwrQMLTK/view"
                                            className="fs-16 fw-700 text-white text-center py-2"
                                        >
                                            Know more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="swiper-slide swiper-slide-duplicate mb-5"
                        data-swiper-slide-index={2}
                    >
                        <div
                            data-aos="fade-up"
                            className="d-flex justify-content-center align-items-center mb-5 col-md-12 aos-init aos-animate"
                        >
                            <div
                                className="mb-2 bg-dark-gradient text-white px-3 card"
                                style={{ width: "25rem" }}
                            >
                                <div className="d-inline-flex align-items-center py-3 fw-bold fs-4 card-header">
                                    <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center me-4 p-2">
                                        <img
                                            src="https://cms.growpital.com/uploads/soil_Farming_1_a2e926fff4_588c230283.svg"
                                            alt=""
                                            className="img-fluid"
                                            style={{ width: "1rem" }}
                                        />
                                    </p>
                                    Harvest Bloom
                                </div>
                                <div className="d-flex align-items-center justify-content-between py-3 card-header">
                                    <div>
                                        <div className="text-main-green card-title h5">
                                            ₹ 200000/unit
                                        </div>
                                        <p className="card-text">Investment</p>
                                    </div>
                                    <div>
                                        <div className="text-main-green card-title h5">14%</div>
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
                                                Lock in period
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
                                            <p className="card-text">12 Months</p>
                                            <p className="card-text">12 Months</p>
                                            <p className="card-text">Quarterly</p>
                                        </div>
                                    </div>
                                    <div className="py-2">
                                        <a href="https://app.growpital.com/signup">
                                            <button
                                                type="button"
                                                className="main-btn-service maincolor bg-transparent btn btn-primary"
                                            >
                                                Invest Now
                                            </button>
                                        </a>
                                    </div>
                                    <div className="py-2">
                                        <a
                                            href="https://drive.google.com/file/d/1bUF3cdfk5gGHGSK7Jh35kQD9ZwrQMLTK/view"
                                            className="fs-16 fw-700 text-white text-center py-2"
                                        >
                                            Know more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-button-prev" />
                <div className="swiper-button-next" />
                <div className="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal" />
            </div> */}
        </div>
    </section>

}