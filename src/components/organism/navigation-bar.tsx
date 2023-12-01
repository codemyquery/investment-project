import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { useState } from 'react';
import { Logo } from '../molecules';
import { useAuth } from '../../providers';
import { Box, Tooltip, IconButton, Avatar, Menu, MenuItem } from '@mui/material';
import { Admin } from '../../services';
import { BASE_URL } from '../../utils';

type MenusType = 'Home' | 'About' | 'Contact Us' | 'My Plan' | 'Profile' | undefined;
const Menus: MenusType[] = ['Home', 'About', 'Contact Us', 'My Plan', 'Profile'];
const UserMenus: MenusType[] = ['My Plan', 'Profile'];
const settings = ['Logout'];

export const NavigationBar = () => {
    const navigate = useNavigate();
    const { homeURL, userInfo, signOutAdmin } = useAuth();
    const [active, setActive] = useState<MenusType>(undefined)
    const [showHeader, setShowHeader] = useState('')
    const navBarClick = (navbar: MenusType) => {
        switch (navbar) {
            case "Home":
                navigate('')
                setActive(navbar)
                break;
            case "About":
                navigate('/about-us')
                setActive(navbar)
                break;
            case "Contact Us":
                navigate('/contact-us')
                setActive(navbar)
                break;
            case "My Plan":
                navigate('/user/my-plan')
                setActive(navbar)
                break;
            case "Profile":
                navigate('/user/profile')
                setActive(navbar)
                break;
        }
    }

    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleCloseUserMenu = (evt: React.MouseEvent<HTMLElement>) => {
        const currentTarget = evt.currentTarget;
        if (currentTarget.innerText === 'Logout') {
            const logout = async () => {
                sessionStorage.clear();
                signOutAdmin();
                await Admin.signOut();
                window.location.href = `${BASE_URL}`
            }
            logout();
        }
        setAnchorElUser(null);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

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
                                Menus.filter(menu => {
                                    if (userInfo?.name) {
                                        return true;
                                    } else {
                                        return !UserMenus.includes(menu);
                                    }
                                }).map((menu, index) => {
                                    return <li key={`${menu}-${index}`} className={`nav-link ${active === menu ? 'active' : ''}`} onClick={() => { navBarClick(menu) }}>
                                        {menu}
                                    </li>
                                })
                            }
                        </ul>

                        {
                            userInfo?.name &&
                            <>
                                <Box sx={{ flexGrow: 0 }}>
                                    <Tooltip title="Profile">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar alt={userInfo?.name} src="/static/images/avatar/2.jpg" />
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        {settings.map((setting) => (
                                            <MenuItem key={setting} style={{ marginLeft: '5px', marginRight: '5px' }} onClick={handleCloseUserMenu}>
                                                {setting}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>
                            </>
                        }
                        {
                            !userInfo?.name &&
                            <>
                                <div className="d-flex d-none d-md-block">
                                    <a
                                        href="#"
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