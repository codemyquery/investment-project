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
                                    Would you like to speak to one of our financial advisers over the
                                    phone? Just submit your details and we’ll be in touch shortly. You
                                    can also e-mail us for any further concern.
                                </p>
                            </div>
                            <div className="contact-from text-white">
                                <form>
                                    <div className="mb-3 row">
                                        <div className="mb-4 col-12">
                                            <input
                                                placeholder="Name"
                                                name="name"
                                                type="text"
                                                id="validationCustom03"
                                                className="form-control"
                                            />
                                            <div className="invalid-feedback">
                                                Please provide a valid name.
                                            </div>
                                        </div>
                                        <div className="mb-4 col-12">
                                            <input
                                                placeholder="Phone Number"
                                                name="phone"
                                                pattern="[0-9]*"
                                                type="tel"
                                                id="validationCustom04"
                                                className="form-control"
                                            />
                                            <div className="invalid-feedback">
                                                Please provide a valid Phone Number.
                                            </div>
                                        </div>
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
                                        <div className="mb-4">
                                            <textarea
                                                placeholder="Message"
                                                rows={3}
                                                name="message"
                                                id="exampleForm.ControlTextarea1"
                                                className="form-control"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <div className="form-check">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                />
                                                <label title="" className="form-check-label">
                                                    You are signing up to receive transaction , promotions and
                                                    other commercial messages that are relevant to you
                                                </label>
                                                <div className="invalid-feedback">
                                                    You must agree before submitting.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" id="zc_gad" name="zc_gad" defaultValue="" />
                                    <button
                                        type="submit"
                                        className="main-btn maincolor mb-2 btn btn-primary"
                                    >
                                        Submit
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