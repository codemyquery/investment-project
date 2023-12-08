import { moneycoin, moneygraph } from "../../assets"

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
                        Must Have in your Portfolio
                    </p>
                    <p className="fw-600 fs-24 mb-4 mb-md-4" style={{color:'red'}}>
                        Search the Passive Income which suits your need
                    </p>
                </div>
            </div>
            <div className="text-white d-flex justify-content-center align-items-center row">
                <ul style={{listStyleType: 'circle'}}>
                    <li>Must have if you seek Guaranteed Monthly Income</li>
                    <li>Must have if you wish to lock FD rates for long term</li>
                    <li>Must have if you want to have a clean succession plan</li>
                    <li>Must have if you don't want to hustle of finding good tenants</li>
                    <li>Must have if you don't want property disputes</li>
                    <li>Must have if you want to manage taxes efficiently</li>
                </ul>
            
            
            
            
            
            
                {/* <div
                    data-aos="fade-up"
                    className="d-flex justify-content-start justify-content-lg-center ps-5 ps-md-5 ps-lg-3 col-lg-4 col-md-12 col-12 aos-init aos-animate"
                >
                    <div className="mt-4 mb-md-4 p-0 border-0 text-start bg-transparent card">
                        <div className="d-flex justify-content-start align-items-center px-0 card-body">
                            <img
                                src={moneycoin}
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
                                src={moneygraph}
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
                </div> */}
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