import { AutoWriting } from "../atoms"

export const VirtualPropertyBenifits = () => {
    return <section className="py-5">
        <div className="container">
            <div className="d-flex justify-content-center align-items-center pb-0 row">
                <div className="text-center text-md-start col-lg-6 col-md-12 col-12">
                    <p
                        className="text-uppercase fs-18 fw-500 text-main-green aos-init aos-animate"
                        data-aos="fade-up"
                    >
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
                        WHAT ARE VIRTUAL PROPERTY INVESTMENTS LIKE?
                    </p>
                    <h2
                        className="text-white fw-600 display-6 mb-3 mb-md-4 aos-init aos-animate"
                        data-aos="fade-up"
                    >
                        Its like a &nbsp;
                        <span className="text-main-green">
                            <AutoWriting text='Property' />
                            <span
                                className="styles-module_blinkingCursor__yugAC"
                                style={{ color: "inherit" }}
                            >
                                |
                            </span>
                        </span>
                        but a much better one!
                    </h2>
                    <div
                        className="d-flex justify-content-md-start justify-content-center align-items-center my-5 my-md-5 py-4 py-md-4 aos-init aos-animate"
                        data-aos="fade-up"
                    >
                        <img
                            src="https://cms.growpital.com/uploads/zero_cf5e683206.png"
                            alt=""
                            className="img-fluid"
                        />
                        <div className="text-start">
                            <p className="fs-24 fs-sm-18 fw-400 text-white">
                                Stamp Duty
                            </p>
                            <p className="fs-24 fs-sm-18 fw-400 text-white">
                                &nbsp;&nbsp;Registration Charges EMI
                            </p>
                            <p className="fs-24 fs-sm-18 fw-400 text-white">
                                &nbsp;&nbsp;&nbsp;&nbsp;Maintenance Cost
                            </p>
                            <p className="fs-24 fs-sm-18 fw-400 text-white">
                                &nbsp;&nbsp;&nbsp;&nbsp;Vacant Period
                            </p>
                            <p className="fs-24 fs-sm-18 fw-400 text-white">
                                &nbsp;&nbsp;&nbsp;Delay In Rentals
                            </p>
                            <p className="fs-24 fs-sm-18 fw-400 text-white">
                                Interior Cost
                            </p>
                        </div>
                    </div>
                    <div className="mb-2 aos-init aos-animate" data-aos="fade-up">
                        <div className="d-inline-block">
                            <a href="https://app.growpital.com/signup">
                                <button className="main-btn maincolor mb-2">Invest Now</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center text-md-end mt-5 mt-md-5 mt-lg-0 position-relative col-lg-6 col-md-12 col-12">
                    <div className="d-flex justify-content-center align-items-center row">
                        <div className="col-md-6">
                            <div data-aos="fade-up" className="aos-init aos-animate">
                                <div className="darkcard mb-5 mb-md-5 p-0 rounded text-start text-white card">
                                    <div className="m-1 bg-dark-gradient rounded p-4 card-body">
                                        <div className="darkcard-icon p-3 mx-auto mb-4">
                                            <img
                                                src="https://cms.growpital.com/uploads/4_8fbdec3b01.svg"
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="fw-600 fs-24 mb-3 pt-2 card-title h5">
                                            Second Income
                                        </div>
                                        <p className="fw-400 fs-17 lh-24 card-text">
                                            We provide Second Income with safety and high returns.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="aos-init aos-animate">
                                <div className="darkcard mb-5 mb-md-5 p-0 rounded text-start text-white card">
                                    <div className="m-1 bg-dark-gradient rounded p-4 card-body">
                                        <div className="darkcard-icon p-3 mx-auto mb-4">
                                            <img
                                                src="https://cms.growpital.com/uploads/9_5e897da85d.svg"
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="fw-600 fs-24 mb-3 pt-2 card-title h5">
                                            Safe &amp; Secure
                                        </div>
                                        <p className="fw-400 fs-17 lh-24 card-text">
                                            This scheme is secured by RBI Investment. Hence, No worry!!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="col-md-6 aos-init aos-animate">
                            <div className="darkcard mb-5 mb-md-5 p-0 rounded text-start text-white card">
                                <div className="m-1 bg-dark-gradient rounded p-4 card-body">
                                    <div className="darkcard-icon p-3 mx-auto mb-4">
                                        <img
                                            src="https://cms.growpital.com/uploads/5_9c2e76a67a.svg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="fw-600 fs-24 mb-3 pt-2 card-title h5">
                                        Consistent Returns
                                    </div>
                                    <p className="fw-400 fs-17 lh-24 card-text">
                                        Free from any volatality. Monthly payouts in your
                                        Bank Account.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}