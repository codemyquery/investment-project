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
                                    Login and explore more Investment horizons with our
                                    virtual investment platform.
                                </p>
                            </div>
                            <div className="contact-from text-white">
                                    <div className="mb-3 row">
                                    <div className="mb-4 col-12">
                                            <input
                                                placeholder="Email/Mobile"
                                                name="email"
                                                type="text"
                                                id="validationCustom05"
                                                className="form-control"
                                            />
                                            <div className="invalid-feedback">
                                                Please provide a valid Email.
                                            </div>
                                        </div>
                                        <div className="mb-4 col-12">
                                            <input
                                                placeholder="Password"
                                                name="password"
                                                type="password"
                                                id="validationCustom05"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <input type="hidden" id="zc_gad" name="zc_gad" defaultValue="" />
                                    <button
                                        type="submit"
                                        className="main-btn maincolor mb-2 btn btn-primary"
                                    >
                                        Submit
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>)
}