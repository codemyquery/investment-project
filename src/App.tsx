import React, { useEffect } from "react";
import { Suspense } from "react";
import { AuthProvider, useAuth } from './providers/auth';
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { RightsMenuService } from "./services";
import { ServiceStatus } from "./types";
import { AdminPageTemplate, PublicPageTemplate } from "./components/templates";
import { AdminLoginPage } from "./components/pages/admin/login";

const HomePage = () => {
    const navigate = useNavigate();
    const { homeURL, userInfo } = useAuth();
    const service = RightsMenuService.useMainRouting();
    const isAdminUrl = !homeURL.indexOf('/admin');
    useEffect(() => {
        async function init() {
            if (service.result.status === ServiceStatus.Loaded) {
                navigate(homeURL);
            }
        }
        init();
    }, [service.result.status]);

    switch (isAdminUrl) {
        case true:
            if ((homeURL === "/admin" || homeURL === "/admin/")) {
                return <AdminLoginPage />;
            } else {
                return <AdminPageTemplate routingService={service.result} />;
            }
        case false:
            return <PublicPageTemplate routingService={service.result} />
    }
}

const Main = () => {
    const { userToken } = useAuth();
    return (
        <Suspense fallback={<></>}>
            <Router basename="/">
                <HomePage />
            </Router>
        </Suspense>
    );
}

function App() {
    return (
        <AuthProvider>
            <Main />
        </AuthProvider>
    );
}
export default App;