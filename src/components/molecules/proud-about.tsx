export const ProudAbout = () => {
    return <section className="py-5 d-flex justify-content-center align-items-center bg-charade">
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
                        WHAT ARE WE PROUD ABOUT?
                    </p>
                    <p className="text-white fw-600 fs-24 mb-4 mb-md-4">
                        We are growing rapidly. Join us soon
                    </p>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center row">
                <div
                    data-aos="fade-up"
                    className="d-flex justify-content-start justify-content-lg-center ps-5 ps-md-5 ps-lg-3 col-lg-4 col-md-12 col-12 aos-init aos-animate"
                >
                    <div className="mt-4 mb-md-4 p-0 border-0 text-start bg-transparent card">
                        <div className="d-flex justify-content-start align-items-center px-0 card-body">
                            <img
                                src="https://cms.growpital.com/uploads/Total_Investments_e2952f6ea8.svg"
                                alt=""
                                className="img-fluid me-3"
                            />
                            <div>
                                <div className="fw-600 fs-22 text-white text-uppercase card-title h5">
                                    TOTAL INVESTMENTS
                                </div>
                                <div className="fw-700 display-5 text-main-green mb-0 card-title h5">
                                    <span>₹10+</span>
                                </div>
                                <p className="fw-500 fs-14 text-white text-uppercase card-text">
                                    CRORES
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    className="d-flex justify-content-start justify-content-lg-center ps-5 ps-md-5 ps-lg-3 col-lg-4 col-md-12 col-12 aos-init aos-animate"
                >
                    <div className="mt-4 mb-md-4 p-0 border-0 text-start bg-transparent card">
                        <div className="d-flex justify-content-start align-items-center px-0 card-body">
                            <img
                                src="https://cms.growpital.com/uploads/Returns_d6d7c7cb46.svg"
                                alt=""
                                className="img-fluid me-3"
                            />
                            <div>
                                <div className="fw-600 fs-22 text-white text-uppercase card-title h5">
                                    PROFIT RETURNS
                                </div>
                                <div className="fw-700 display-5 text-main-green mb-0 card-title h5">
                                    <span>150%</span>
                                </div>
                                <p className="fw-500 fs-14 text-white text-uppercase card-text">
                                    Upto
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    className="d-flex justify-content-start justify-content-lg-center ps-5 ps-md-5 ps-lg-3 col-lg-4 col-md-12 col-12 aos-init aos-animate"
                >
                    <div className="mt-4 mb-md-4 p-0 border-0 text-start bg-transparent card">
                        <div className="d-flex justify-content-start align-items-center px-0 card-body">
                            <img
                                src="https://cms.growpital.com/uploads/Crop_Harvested_a58c6f1010.svg"
                                alt=""
                                className="img-fluid me-3"
                            />
                            <div>
                                <div className="fw-600 fs-22 text-white text-uppercase card-title h5">
                                    MANAGED PORTFOLIO
                                </div>
                                <div className="fw-700 display-5 text-main-green mb-0 card-title h5">
                                    <span> 1200+</span>
                                </div>
                                <p className="fw-500 fs-14 text-white text-uppercase card-text">
                                    Customers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    className="text-center mt-5 mt-md-0 col-md-12 aos-init aos-animate"
                >
                    <div className="d-inline-block">
                        <a href='#invest-now-plans'>
                            <button className="main-btn maincolor mb-2">Invest Now</button>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </section>
}