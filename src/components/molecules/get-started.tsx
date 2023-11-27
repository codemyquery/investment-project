import { content } from "../../utils/content"
import { ExpandableCard } from "../atoms"

export const GetStarted = () => {
    return <section className="py-5">
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
                        HOW TO GET STARTED?
                    </p>
                    <h2 className="text-white fw-600 display-6 mb-3 mb-md-3">
                        Start investing in
                        <span className="text-main-green"> 4 simple steps</span>
                    </h2>
                </div>
            </div>
            <div className="accordian-main">
                <div className="pt-5 mx-auto row">
                    <div className="text-center text-lg-start mb-5 mb-lg-0 d-flex justify-content-center justify-content-lg-start align-items-center col-lg-6 col-md-12 col-12">
                        <div className="vertical text-center carousel slide">
                            <div className="carousel-inner">
                                <div className="active carousel-item">
                                    <img
                                        className="d-block img-fluid accordian-main-img"
                                        src="https://cms.growpital.com/uploads/step_1_d82e1913f3.png"
                                        alt="First slide"
                                        style={{ width: "24rem" }}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="text-center text-md-end col-lg-6 col-md-12 col-12">
                        <ExpandableCard content={content} />
                    </div>
                </div>
            </div>
            <div className="d-flex my-3 justify-content-center">
                {/* <a href="https://app.growpital.com/signup" className="">
                    <button className="main-btn maincolor mb-2">Invest Now</button>
                </a> */}
            </div>
        </div>
    </section>
}