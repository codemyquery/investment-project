import { useEffect, useState } from "react";
import { useAuth } from "../providers"
import { NavigationMenu, Service, ServiceStatus } from "../types";
import { AboutUs, HomePage, ContactUs, Login, SignUp, PlanOverview, MyPlans, EditPlanSell, AllPlan } from "../components/pages";
import HomeIcon from '@mui/icons-material/Home';
import { AdminLoginPage } from "../components/pages/admin/login";
import GroupIcon from '@mui/icons-material/Group';
import { DashboardContactus, DashboardCustomers, DashboardPlanDetails, EditCustomers, EditPlanDetails,DashboardSellData } from "../components/pages";
import { EditEmployee } from "../components/pages/admin/edit-employee";
import { DashboardEmployee } from "../components/pages/admin/dashboard-employee";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Profile } from "../components/pages/public/user-profile/profile";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import SellIcon from '@mui/icons-material/Sell';
import { ForgetPassword } from "../components/pages/public/forget-password";

const AppMenus: NavigationMenu[] = [
    {
        id: "dashboard-plan-details",
        i18nKey: 'Dashboard',
        visible: true,
        to: '/admin/plan-details',
        path: 'admin/plan-details',
        Icon: HomeIcon,
        component: DashboardPlanDetails,
        allowedGroups: []
    },
    {
        id: "edit-plan-details",
        i18nKey: 'Plan Detail',
        visible: false,
        to: '/admin/edit-plan-details',
        path: 'admin/edit-plan-details',
        Icon: HomeIcon,
        component: EditPlanDetails,
        allowedGroups: []
    },
    {
        id: "dashboard-customers",
        i18nKey: 'Customer',
        visible: true,
        to: '/admin/customers',
        path: 'admin/customers',
        Icon: GroupIcon,
        component: DashboardCustomers,
        allowedGroups: []
    },
    {
        id: "dashboard-contactus",
        i18nKey: 'Contact Us',
        visible: true,
        to: '/admin/contactus',
        path: 'admin/contactus',
        Icon: ConnectWithoutContactIcon,
        component: DashboardContactus,
        allowedGroups: []
    },
    {
        id: "edit-customers",
        i18nKey: 'Customer',
        visible: false,
        to: '/admin/edit-customers/:itemID',
        path: 'admin/edit-customers/:itemID',
        Icon: GroupIcon,
        component: EditCustomers,
        allowedGroups: []
    },
    {
        id: "dashboard-employee",
        i18nKey: 'Employee',
        visible: true,
        to: '/admin/employee',
        path: 'admin/employee',
        Icon: ContactMailIcon,
        component: DashboardEmployee,
        allowedGroups: []
    },
    {
        id: "add-employee",
        i18nKey: 'Add Employee',
        visible: false,
        to: '/admin/edit-employee',
        path: '/admin/edit-employee',
        Icon: ContactMailIcon,
        component: EditEmployee,
        allowedGroups: []
    },
    {
        id: "edit-employee",
        i18nKey: 'Employee',
        visible: false,
        to: '/admin/edit-employee/:itemID',
        path: '/admin/edit-employee/:itemID',
        Icon: ContactMailIcon,
        component: EditEmployee,
        allowedGroups: []
    },
    {
        id: "admin-login",
        i18nKey: 'Login',
        visible: false,
        to: '/admin',
        path: 'admin',
        component: AdminLoginPage,
        allowedGroups: []
    },
    {
        id: "plansell",
        i18nKey: "",
        visible: true,
        to: '/admin/plan-sell',
        path: '/admin/plan-sell',
        component: DashboardSellData,
        Icon: SellIcon,
        allowedGroups: []
    },
    {
        id: "planselledit",
        i18nKey: "",
        visible: false,
        to: '/admin/edit-plan-sell/:itemID',
        path: '/admin/edit-plan-sell/:itemID',
        component: EditPlanSell,
        Icon: SellIcon,
        allowedGroups: []
    },
    /** Routings for the Public Login Pages */
    {
        id: "user-profile",
        i18nKey: '',
        visible: false,
        to: '/user/profile',
        path: 'user/profile',
        component: Profile,
        allowedGroups: []
    },
    {
        id: "home-page",
        i18nKey: '',
        visible: false,
        to: '/user/my-plan',
        path: '/user/my-plan',
        component: MyPlans,
        allowedGroups: []
    },
    /** Routing for the public page */
    {
        id: "home-page",
        i18nKey: 'Home Page',
        visible: false,
        to: '/',
        path: '/',
        component: HomePage,
        allowedGroups: []
    },
    {
        id: "about-us",
        i18nKey: 'About Us',
        visible: false,
        to: '/about-us',
        path: '/about-us',
        component: AboutUs,
        allowedGroups: []
    },
    {
        id: "contact-us",
        i18nKey: "Contact Us",
        visible: false,
        to: '/contact-us',
        path: '/contact-us',
        component: ContactUs,
        allowedGroups: []
    },
    {
        id: "login",
        i18nKey: "Login",
        visible: false,
        to: '/login',
        path: '/login',
        component: Login,
        allowedGroups: []
    },
    {
        id: "sign-up",
        i18nKey: "Sign Up",
        visible: false,
        to: '/sign-up',
        path: '/sign-up',
        component: SignUp,
        allowedGroups: []
    },
    {
        id: "plan-overview",
        i18nKey: "Plan Overview",
        visible: false,
        to: '/plan-overview/:itemID/:investmentAmount',
        path: '/plan-overview/:itemID/:investmentAmount',
        component: PlanOverview,
        allowedGroups: []
    },
    {
        id: "all-plan",
        i18nKey: "All Plan",
        visible: false,
        to: '/all-plan',
        path: '/all-plan',
        component: AllPlan,
        allowedGroups: []
    },
    {
        id: "forget-password",
        i18nKey: "Forget Password",
        visible: false,
        to: '/forget-password',
        path: '/forget-password',
        component: ForgetPassword,
        allowedGroups: []
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
            if (/* userInfo.roles.includes('ADMIN') */true) {
                currentNav = AppMenus;
            } else {
                //currentNav = getMenuList( AppMenus, userInfo.roles )
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
                if (/* userInfo.roles.includes('ADMIN') */true) {
                    currentNav = subMenus;
                } else {
                    //currentNav = getMenuList(subMenus, userInfo.roles)
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
