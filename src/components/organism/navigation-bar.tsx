import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { useState } from 'react';
import { Logo } from '../molecules';
import { useAuth } from '../../providers';

type MenusType = 'Home' | 'About' | 'Contact Us' | 'Dashboard' | 'My Plan' | 'Profile' | undefined;
const Menus: MenusType[] = ['Home', 'About', 'Contact Us'];
const UserMenus: MenusType[] = ['Dashboard', 'My Plan', 'Profile'];

export const NavigationBar = () => {
    const navigate = useNavigate();
    const { homeURL } = useAuth();
    const [active, setActive] = useState<MenusType>(undefined)
    const [showHeader, setShowHeader] = useState('')
    const navBarClick = (navbar: MenusType) => {
        switch (navbar) {
            case "Home":
                navigate('')
                setActive(navbar)
                break;
            case "About":
                navigate('./about-us')
                setActive(navbar)
                break;
            // case "FAQs":
            //     navigate('./faqs')
            //     setActive(navbar)
            //     break;
            case "Contact Us":
                navigate('./contact-us')
                setActive(navbar)
                break;
        }
    }
    return (
        <>
            <nav className="py-2 sticky-top overflow-hidden top-0 mb-3 navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Logo className='d-none d-lg-block navbar-brand' />
                    <button
                        aria-controls="basic-navbar-nav"
                        type="button"
                        aria-label="Toggle navigation"
                        className="navbar-toggler collapsed"
                        onClick={() => { setShowHeader(prev => prev ? '' : 'show') }}

                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Logo className='d-lg-none mx-auto navbar-brand' />
                    <div className={`navbar-collapse collapse ${showHeader}`} id="basic-navbar-nav">
                        <ul className="m-auto navbar-nav">
                            {
                                (homeURL.indexOf('/user') === 0 ? UserMenus : Menus).map((menu, index) => {
                                    return <li key={`${menu}-${index}`} className={`nav-link ${active === menu ? 'active' : ''}`} onClick={() => { navBarClick(menu) }}>
                                            {menu}
                                        </li>
                                })
                            }
                        </ul>

                        {
                            homeURL.indexOf('/user') === 0 &&
                            <>
                                <div className="header-footer_user__eX1M2">
                                    <div className="header-footer_user_name_icon_wapper__dAxRN" style={{ color: 'white', display: 'inline-flex', textAlign: 'center', cursor: 'pointer' }}>
                                        <span style={{ height: '30px', width: '30px', color: 'black', textAlign: 'center', backgroundColor: 'white', borderRadius: '50%', paddingTop: '3px' }}>
                                            SM
                                        </span>
                                        <div className="header-footer_user_name__LV-tm" style={{ marginRight: '3px', textAlign: 'center', paddingTop: '3px' }}> &nbsp;Shubham Maurya &nbsp;</div>
                                        <svg fill='white' width="14" height="22" viewBox="0 0 12 1">
                                            <path d="M6 9L11.1962 0H0.803848L6 9Z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </>
                        }
                        {
                            homeURL.indexOf('/user') !== 0 &&
                            <>
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
                                            setActive(undefined)
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
                                            setActive(undefined)
                                            navigate('./login');
                                        }}
                                    >
                                        Login
                                    </button>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </nav>
            {
                homeURL.indexOf('/user') !== 0 &&
                <section className="signup-page signup-trans">
                    <div className="fixed-bottom bottom-0 d-block d-sm-none container">
                        <div className="row">
                            <div className="d-flex align-items-center signBtn mb-0 col">
                                <div className="mx-2 registerForAMA-page registerAMA-trans">
                                    <button
                                        type="button"
                                        className="main-btn-registerAMA fs-11 fs-sm-8 btn btn-primary"
                                    >
                                        Get a Callback
                                    </button>
                                </div>
                                <div className="mx-2">
                                    <button
                                        type="button"
                                        className="main-btn-sign maincolor fs-11 fs-sm-8 btn btn-primary"
                                        onClick={() => {
                                            setActive(undefined)
                                            navigate('./sign-up');
                                        }}
                                    >
                                        Sign up
                                    </button>
                                </div>
                                <div className="mx-2 login-page login-trans">
                                    <button
                                        type="button"
                                        className="main-btn-login maincolor fs-11 fs-sm-8 btn btn-primary"
                                        onClick={() => {
                                            setActive(undefined)
                                            navigate('./login');
                                        }}
                                    >
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}