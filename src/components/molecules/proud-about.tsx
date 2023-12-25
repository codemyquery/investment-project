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
                    {/* <p className="fw-600 fs-24 mb-4 mb-md-4" style={{color:'red'}}>
                        Search the Passive Income which suits your need
                    </p> */}
                    <h2 className="text-white fw-600 display-6 mb-3 mb-md-4">
                    Search the Passive Income which suits your need
                    </h2>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-strech pt-5 row">
                <div
                    data-aos="fade-up"
                    className="text-center text-md-start col-lg-5 col-md-12 col-12 aos-init aos-animate"
                >
                    
                    <ul className="list-unstyled fs-20 fs-sm-18 fw-500 text-white text-start">
                        <li className="d-flex justify-content-start mt-3">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 16 16"
                                className="text-main-gold mt-2 me-3"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                            </svg>
                            Must have if you seek Guaranteed Monthly Income
                    
                        </li>
                        <li className="d-flex justify-content-start mt-3">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 16 16"
                                className="text-main-gold mt-2 me-3"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                            </svg>
                            Must have if you wish to lock FD rates for long term
                    
                        </li>
                        <li className="d-flex justify-content-start mt-3">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 16 16"
                                className="text-main-gold mt-2 me-3"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                            </svg>
                            Must have if you want to have a clean succession plan
                    
                        </li>
                        <li className="d-flex justify-content-start mt-3">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 16 16"
                                className="text-main-gold mt-2 me-3"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                            </svg>
                            Must have if you don't want to hustle of finding good tenants
                        </li>
                        <li className="d-flex justify-content-start mt-3">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 16 16"
                                className="text-main-gold mt-2 me-3"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                            </svg>
                            Must have if you don't want property disputes
                        </li>
                        <li className="d-flex justify-content-start mt-3">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 16 16"
                                className="text-main-gold mt-2 me-3"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                            </svg>
                            Must have if you want to manage taxes efficiently
                        </li>
                    
                    </ul>
                    <div data-aos="fade-up" className="text-center mt-5 mt-md-0 col-md-12 aos-init aos-animate">
                        <div className="d-inline-block">
                            <a href='#invest-now-plans'>
                                <button className="main-btn maincolor mb-2">Invest Now</button>
                            </a>
                        </div>

                    </div>
                </div>
                
            </div>
            {/* <div className="text-white d-flex justify-content-center align-items-center row">
                <ul style={{listStyleType: 'circle'}}>
                    <li>Must have if you seek Guaranteed Monthly Income</li>
                    <li>Must have if you wish to lock FD rates for long term</li>
                    <li>Must have if you want to have a clean succession plan</li>
                    <li>Must have if you don't want to hustle of finding good tenants</li>
                    <li>Must have if you don't want property disputes</li>
                    <li>Must have if you want to manage taxes efficiently</li>
                </ul>
                <div data-aos="fade-up" className="text-center mt-5 mt-md-0 col-md-12 aos-init aos-animate">
                    <div className="d-inline-block">
                        <a href='#invest-now-plans'>
                            <button className="main-btn maincolor mb-2">Invest Now</button>
                        </a>
                    </div>

                </div>
            </div> */}
        </div>
    </section>
}