export const Login = () => {
    return (<>
        <div className="contact-us">
            <section>
                <div className="container">
                    <div className="text-white   row">
                        <div
                            data-aos="fade-up"
                            className="px-4 px-md-5 mb-5 col-md-5 aos-init aos-animate"
                        >
                            
                        </div>
                        <div
                            data-aos="fade-up"
                            className="px-4 px-md-5 col-md-7 aos-init aos-animate"
                        >
                            <div>
                                <h1 className="fs-md-48 fs-40 fw-bold mb-4">Login</h1>
                                <p className="mb-4">
                                    Login into Your Account & Complete KYC to invest in our 
                                    plans. Our advisor will connect with you shortly.
                                </p>
                            </div>
                            <div className="contact-from text-white">
                                <form>
                                    <div className="mb-3 row">
                                        
                                        
                                        <div className="mb-4 col-12">
                                            <input
                                                placeholder="Email"
                                                name="email"
                                                type="email"
                                                id="validationCustom05"
                                                className="form-control"
                                            />
                                            <div className="invalid-feedback">
                                                Please provide a valid Email.
                                            </div>
                                        </div>
                                        <div className="mb-4 col-12">
                                            <input
                                                placeholder="Enter Your Password"
                                                name="password"
                                                type="email"
                                              
                                                className="form-control"
                                            />
                                            
                                        </div>
                                        
                                    </div>
                                    <input type="hidden" id="zc_gad" name="zc_gad" defaultValue="" />
                                    <button
                                        type="submit"
                                        className="main-btn maincolor mb-2 btn btn-primary"
                                    >
                                        Login
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>)
}