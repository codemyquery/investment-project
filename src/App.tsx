import React, { useEffect } from "react";
import { Suspense } from "react";
import { AuthProvider, useAuth } from './providers/auth';
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { RightsMenuService } from "./services";
import { ServiceStatus } from "./types";
import { AdminPageTemplate, PublicPageTemplate } from "./components/templates";
import './App.css';

const HomePage = () => {
    const navigate = useNavigate();
    const { homeURL } = useAuth();
    const service = RightsMenuService.useMainRouting();
    const isAdminUrl = !homeURL.indexOf('/admin');
    useEffect(() => {
        const init = async () => {
            if (service.result.status === ServiceStatus.Loaded) {
                navigate(homeURL);
            }
        }
        init();
    }, [service.result.status]);

    switch (isAdminUrl) {
        case true:
            return <AdminPageTemplate routingService={service.result} />;
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