import { useEffect, useState } from "react";
import { useAuth } from "../providers"
import { NavigationMenu, Service, ServiceStatus } from "../types";
import { AboutUs, HomePage, Faqs, ContactUs, Login, SignUp } from "../components/pages/public";
import HomeIcon from '@mui/icons-material/Home';
import { AdminDashboardPage } from "../components/pages/admin";
import { LoginPage } from "../components/pages/admin/login";
import { PlanDetails } from "../components/pages/admin/plan-details";

const AppMenus: NavigationMenu[] = [
    //** Navigation Items for the Admin Panel */
    {
        id: "admin-dashboard",
        i18nKey: 'Dashboard',
        visible: true,
        to: '/admin',
        path: 'admin',
        Icon: HomeIcon,
        component: AdminDashboardPage,
        allowedGroups: ['Admin', 'Viewer', 'Maintainance']
    },
    {
        id: "admin-login",
        i18nKey: 'Login',
        visible: false,
        to: '/admin/login',
        path: 'admin/login',
        Icon: HomeIcon,
        component: LoginPage,
        allowedGroups: ['Admin', 'Viewer', 'Maintainance']
    },
    {
        id: "plan-details",
        i18nKey: 'Plan Detail',
        visible: true,
        to: '/admin/plan-details',
        path: 'admin/plan-details',
        Icon: HomeIcon,
        component: PlanDetails,
        allowedGroups: ['Admin', 'Viewer', 'Maintainance']
    },
    {
        id: "dashboard",
        i18nKey: 'Dashboard',
        visible: false,
        to: '/',
        path: '/',
        Icon: HomeIcon,
        component: HomePage,
        allowedGroups: ['Admin', 'Viewer', 'Maintainance']
    },
    {
        id: "about-us",
        i18nKey: 'About Us',
        visible: false,
        to: '/about-us',
        path: '/about-us',
        Icon: HomeIcon,
        component: AboutUs,
        allowedGroups: ['Admin', 'Viewer', 'Maintainance']
    },
    {
        id: "faqs",
        i18nKey: "FAQ's",
        visible: false,
        to: '/faqs',
        path: '/faqs',
        Icon: HomeIcon,
        component: Faqs,
        allowedGroups: ['Admin', 'Viewer', 'Maintainance']
    },
    {
        id: "contact-us",
        i18nKey: "Contact Us",
        visible: false,
        to: '/contact-us',
        path: '/contact-us',
        Icon: HomeIcon,
        component: ContactUs,
        allowedGroups: ['Admin', 'Viewer', 'Maintainance']
    },
    {
        id: "login",
        i18nKey: "Login",
        visible: false,
        to: '/login',
        path: '/login',
        Icon: HomeIcon,
        component: Login,
        allowedGroups: ['Admin', 'Viewer', 'Maintainance']
    },
    {
        id: "sign-up",
        i18nKey: "Sign Up",
        visible: false,
        to: '/sign-up',
        path: '/sign-up',
        Icon: HomeIcon,
        component: SignUp,
        allowedGroups: ['Admin', 'Viewer', 'Maintainance']
    }
]

export const getMenuList = (
    menus: NavigationMenu[],
    userGroups: string[]
): NavigationMenu[] => menus.filter((menu) => (menu.allowedGroups.some((group) => userGroups.includes(group))));

export const useMainRouting = () => {
    const { userInfo, homeURL } = useAuth();
    const [result, setResult] = useState<Service<Array<NavigationMenu>>>({
        status: ServiceStatus.Init
    });

    useEffect(() => {
        let isCancelled = false;
        const fetchData = async () => {
            setResult({ status: ServiceStatus.Loading });
            let currentNav: NavigationMenu[] = [];
            if (userInfo.roles.includes('ADMIN')) {
                currentNav = AppMenus;
            } else {
                currentNav = getMenuList(
                    AppMenus,
                    userInfo.roles
                )
            }
            if (!isCancelled) {
                if (currentNav.length > 0) {
                    setResult({
                        status: ServiceStatus.Loaded,
                        payload: currentNav
                    })
                } else {
                    setResult({
                        status: ServiceStatus.Error,
                        error: new Error('NoRights')
                    })
                }
            }
        }
        fetchData();
        return () => { isCancelled = false }

    }, [homeURL]);
    return { result }
}

export function useSubRouting(subMenus?: Array<NavigationMenu>) {
    const { userInfo } = useAuth();
    const [result, setResult] = useState<Service<Array<NavigationMenu>>>({ status: ServiceStatus.Init });

    useEffect(() => {
        let isCancelled = false;
        if (subMenus) {
            const fetchData = async () => {
                setResult({ status: ServiceStatus.Loading });
                let currentNav: Array<NavigationMenu> = [];
                if (userInfo.roles.includes('ADMIN')) {
                    currentNav = subMenus;
                } else {
                    currentNav = getMenuList(subMenus, userInfo.roles)
                }
                if (!isCancelled) {
                    if (currentNav.length > 0) {
                        setResult({ status: ServiceStatus.Loaded, payload: currentNav })
                    } else {
                        setResult({ status: ServiceStatus.Error, error: new Error('NoRights') })
                    }
                }
            }
            fetchData();
        } else {
            setResult({ status: ServiceStatus.Error, error: new Error('No rights') })
        }
        return () => { isCancelled = false }

    }, []);
    return { result };
}
