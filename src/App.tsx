import React, { useEffect } from "react";
import { Suspense } from "react";
import './App.css';
import { AuthProvider, useAuth } from './providers/auth';
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { RightsMenuService } from "./services";
import { ServiceStatus } from "./types";
import { AdminPageTemplate, PublicPageTemplate } from "./components/templates";

const HomePage = () => {
    const navigate = useNavigate();
    const { homeURL } = useAuth();
    const service = RightsMenuService.useMainRouting();

    useEffect(() => {
        async function init() {
            if (service.result.status === ServiceStatus.Loaded) {
                navigate(homeURL);
            }
        }
        init();
        return () => { console.log("unmount homepage") }
    }, [service.result.status]);

    return homeURL.indexOf('/admin') === 0 ? <AdminPageTemplate routingService={service.result} /> : <PublicPageTemplate routingService={service.result} /> 
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