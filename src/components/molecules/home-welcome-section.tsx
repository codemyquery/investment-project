import { growth, percent, plant, virtualProperty } from "../../assets"
import { AutoWriting } from "../atoms"

export const HomeWelcomeSection = () => {
    return <section className="py-md-5 pt-3 pb-5">
        <div className="container">
            <div className="d-flex justify-content-center align-items-center py-0 mt-0 row">
                <div className="text-center text-md-start col-lg-7 col-md-12 col-12">
                    <div className="bg-shark3 rounded p-1 p-md-2 d-inline-block mb-3">
                        <h5 className="text-main-gradient fw-500 fs-22 fs-sm-18 mb-0">
                            <img
                                src="/static/media/TopIcon2.ac5c57a0b39d7c7f5619280ff0165a8d.svg"
                                alt=""
                                className="img-fluid me-2"
                            />
                            Virtual Property is the New Trend
                            <img
                                src="/static/media/TopIcon1.dcb427bef4e564145cec68daa97262db.svg"
                                alt=""
                                className="img-fluid ms-2"
                            />
                        </h5>
                    </div>
                    <div>
                        <h1 className="text-white fw-600 display-5 mb-3 mb-md-4">
                            Invest and earn assured Monthly Income &nbsp;
                            <span className="text-main-green pe-2">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 16 16"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                    />
                                </svg>
                            </span>
                            <span className="text-main-green">
                                <AutoWriting text='Sure Things' />
                                <span
                                    className="styles-module_blinkingCursor__yugAC"
                                    style={{ color: "inherit" }}
                                >
                                    |
                                </span>
                            </span>
                        </h1>
                        <p className="text-white fw-400 fs-24 my-3 mb-md-4 py-2">
                            Diversify your portfolio with guaranteed from RBI governed Investment.
                        </p>
                    </div>
                    <div className="px-5 px-lg-0">
                        <div className="row">
                            <div
                                data-aos="fade-up"
                                className="col-lg-4 col-md-4 aos-init aos-animate"
                            >
                                <div className="darkcard mb-3 mb-md-4 p-0 rounded text-start text-white card">
                                    <div className="m-1 bg-dark-gradient rounded px-4 py-5 py-md-4 card-body">
                                        <div className="darkcard-icon p-3 mx-auto mb-4 mb-md-2 d-flex justify-content-center align-items-center">
                                            <img
                                                src={percent}
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="fw-400 text-center fs-20 mb-0 pt-2 card-title h5">
                                            Guaranteed
                                            <span className="fw-600 text-main-gold"> Monthly Income from Day 1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                data-aos="fade-up"
                                className="col-lg-4 col-md-4 aos-init aos-animate"
                            >
                                <div className="darkcard mb-3 mb-md-4 p-0 rounded text-start text-white card">
                                    <div className="m-1 bg-dark-gradient rounded px-4 py-5 py-md-4 card-body">
                                        <div className="darkcard-icon p-3 mx-auto mb-4 mb-md-2 d-flex justify-content-center align-items-center">
                                            <img
                                                src={growth}
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="fw-400 text-center fs-20 mb-0 pt-2 card-title h5">
                                            Booking Amount<br /><br />
                                            <span className="fw-600 text-main-gold"> 10%</span>
                                            <br />

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                data-aos="fade-up"
                                className="col-lg-4 col-md-4 aos-init aos-animate"
                            >
                                <div className="darkcard mb-5 mb-md-4 p-0 rounded text-start text-white card">
                                    <div className="m-1 bg-dark-gradient rounded px-4 py-5 py-md-4 card-body">
                                        <div className="darkcard-icon px-3 py-1 mx-auto mb-4 mb-md-2 d-flex justify-content-center align-items-center">
                                            <img
                                                src={plant}
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="fw-400 text-center fs-20 mb-0 pt-2 card-title h5"><br />
                                            Assured<br />
                                            <span className="fw-600 text-main-gold"> Buy</span>
                                            Back<br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-offset={50}
                        className="aos-init aos-animate"
                    >
                        <div className="d-inline-block">
                            <a href='#invest-now-plans'>
                                <button
                                    className="main-btn maincolor mb-2"
                                >
                                    Invest Now
                                </button>
                            </a>
                        </div>
                    </div>
                    <div
                        className="mx-2 py-1 aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-offset={50}
                    >

                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    className="text-center text-lg-end mt-lg-0 mt-md-5 mt-5 p-3 mb-4 col-lg-5 col-md-12 col-12 aos-init aos-animate"
                >
                    <img
                        src={virtualProperty}
                        alt=""
                        className="img-fluid rounded-4"
                    />
                </div>
            </div>
        </div>
    </section>
}