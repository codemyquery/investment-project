import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { useState } from 'react';
import { Logo } from '../molecules';

type MenusType = 'Home' | 'About' | 'Contact Us';
const Menus: MenusType[] = ['Home', 'About', 'Contact Us'];

export const NavigationBar = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState<MenusType>('Home')
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
                            Menus.map(menu => {
                                return <>
                                    <li className={`nav-link ${active === menu ? 'active' : ''}`} onClick={() => { navBarClick(menu) }}>
                                        {menu}
                                    </li>
                                </>
                            })
                        }
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