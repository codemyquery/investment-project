import logo from '../../assets/images/logo.png'

export const NavigationBar = () => {
    const zcAction = (type: string) => {

    }
    return (
        <nav className="py-2 sticky-top overflow-hidden top-0 mb-3 navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a href="/" className="d-none d-lg-block navbar-brand">
                    <img
                        src={logo}
                        alt="logo"
                        className="img-fluid"
                        style={{ width: "12rem" }}
                    />
                </a>
                <button
                    aria-controls="basic-navbar-nav"
                    type="button"
                    aria-label="Toggle navigation"
                    className="navbar-toggler collapsed"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a href="/" className="d-lg-none mx-auto navbar-brand">
                    <img
                        src={logo}
                        alt="logo"
                        className="logo-img"
                        style={{ width: "12rem" }}
                    />
                </a>
                <div className="navbar-collapse collapse" id="basic-navbar-nav">
                    <div className="m-auto navbar-nav">
                        <a
                            href="./index.html"
                            data-rr-ui-event-key="default"
                            className="nav-link active nav-link"
                        >
                            Home
                            <title>Growpital : Invest and earn assured Tax Free returns</title>
                        </a>
                        <a
                            href="./about-us.html"
                            data-rr-ui-event-key="link-1"
                            className="nav-link nav-link"
                        >
                            About
                            <title>About us : Growpital</title>
                        </a>
                        <a
                            href="./faq.html"
                            data-rr-ui-event-key="link-3"
                            className="nav-link nav-link"
                        >
                            FAQs
                            <title>FAQ | Growpital</title>
                        </a>
                        <a
                            href="./contact-us.html"
                            data-rr-ui-event-key="link-4"
                            className="nav-link nav-link"
                        >
                            Contact Us
                            <title>Help &amp; Support | Growpital</title>
                        </a>
                    </div>
                    <div className="d-flex d-none d-md-block">
                        <a
                            href="https://growpital.zohobookings.in/#/customer/growpital"
                            target="#"
                        >
                            <button
                                type="button"
                                className="main-btn-nav mb-2 fs-11 register_AMA btn btn-primary"
                                onClick={() => {
                                    zcAction("Sign Up");
                                }}
                            >
                                Get a Callback
                            </button>
                        </a>
                    </div>
                    <div className="d-flex d-none d-md-block">
                        <a href="./signup.html">
                            <button
                                type="button"
                                className="main-btn-nav maincolor mb-2 fs-11 main-login-signup-btn btn btn-primary"
                                onClick={() => {
                                    zcAction("Sign Up");
                                }}
                            >
                                Sign up
                            </button>
                        </a>
                    </div>
                    <div className="d-flex d-none d-md-block">
                        <a href="./login.html">
                            <button
                                type="button"
                                className="main-btn-nav maincolor mb-2 fs-11 main-login-signup-btn btn btn-primary"
                            >
                                Login
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}