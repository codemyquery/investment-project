import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { useState } from 'react';

interface ActiveNavbar {
    home: string | "active",
    about: string | "active",
    faqs: string | "active",
    contactUs: string | "active"
}
const defaultActiveNavbar: ActiveNavbar = {
    about: '',
    contactUs: '',
    faqs: '',
    home: ''
}

export const NavigationBar = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState<ActiveNavbar>(defaultActiveNavbar)
    const [showHeader, setShowHeader] = useState('')
    const navBarClick = (navbar: "home" | "aboutus" | "faqs" | "contactus")=>{
        switch (navbar) {
            case "home":
                navigate('')
                setActive({...defaultActiveNavbar, home: 'active'})
                break;
            case "aboutus":
                navigate('./about-us')
                setActive({...defaultActiveNavbar, about: 'active'})
                break;
            case "faqs":
                navigate('./faqs')
                setActive({...defaultActiveNavbar, faqs: 'active'})
                break;
            case "contactus":
                navigate('./contact-us')
                setActive({...defaultActiveNavbar, contactUs: 'active'})
                break;
        }
    }
    return (
        <nav className="py-2 sticky-top overflow-hidden top-0 mb-3 navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a href="/" className="d-none d-lg-block navbar-brand">
                    {/* <img
                        src={logo}
                        alt="logo"
                        className="img-fluid"
                        style={{ width: "12rem" }}
                    /> */}
                    <b style={{ color: "white", fontWeight: "50px" }}>Virtual Property</b>
                </a>
                <button
                    aria-controls="basic-navbar-nav"
                    type="button"
                    aria-label="Toggle navigation"
                    className="navbar-toggler collapsed"
                    onClick={() => { setShowHeader(prev => prev ? '' : 'show') }}

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
                <div className={`navbar-collapse collapse ${showHeader}`} id="basic-navbar-nav">
                    <ul className="m-auto navbar-nav">
                        <li
                            data-rr-ui-event-key="default"
                            className={`nav-link ${active.home}`}
                            onClick={() => { navBarClick('home') }}
                        >
                            Home
                            <title>Growpital : Invest and earn assured Tax Free returns</title>
                        </li>
                        <li
                            data-rr-ui-event-key="link-1"
                            className={`nav-link ${active.about}`}
                            onClick={() => { navBarClick('aboutus') }}
                        >
                            About
                            <title>About us : Growpital</title>
                        </li>
                        <li
                            data-rr-ui-event-key="link-3"
                            className={`nav-link ${active.faqs}`}
                            onClick={() => { navBarClick('faqs') }}
                        >
                            FAQs
                            <title>FAQ | Growpital</title>
                        </li>
                        <li
                            data-rr-ui-event-key="link-4"
                            className={`nav-link ${active.contactUs}`}
                            onClick={() => { navBarClick('contactus') }}
                        >
                            Contact Us
                            <title>Help &amp; Support | Growpital</title>
                        </li>
                    </ul>
                    <div className="d-flex d-none d-md-block">
                        <a
                            href="https://growpital.zohobookings.in/#/customer/growpital"
                            target="#"
                        >
                            <button
                                type="button"
                                className="main-btn-nav mb-2 fs-11 register_AMA btn btn-primary"
                            >
                                Get a Callback
                            </button>
                        </a>
                    </div>
                    <div className="d-flex d-none d-md-block">
                        <button
                            type="button"
                            className="main-btn-nav maincolor mb-2 fs-11 main-login-signup-btn btn btn-primary"
                            onClick={() => {
                                navigate('./sign-up');
                            }}
                        >
                            Sign up
                        </button>
                    </div>
                    <div className="d-flex d-none d-md-block">
                        <button
                            type="button"
                            className="main-btn-nav maincolor mb-2 fs-11 main-login-signup-btn btn btn-primary"
                            onClick={() => {
                                navigate('./login');
                            }}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}