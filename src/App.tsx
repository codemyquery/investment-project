import React, { useEffect } from "react";
import { Suspense } from "react";
import './App.css';
import { AuthProvider, useAuth } from './providers/auth';
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { HomePageTemplate } from "./components/templates";
import { RightsMenuService } from "./services";
import { ServiceStatus } from "./types";

const HomePage = () => {
    const { homeURL } = useAuth();
    const service = RightsMenuService.useMainRouting();
    let navigate = useNavigate();

    useEffect(() => {
        async function init() {
            if (service.result.status === ServiceStatus.Loaded) {
                navigate(homeURL);
            }
        }
        init();
        return () => { console.log("unmount homepage") }
    }, [service.result.status]);

    return <HomePageTemplate routingService={service.result} />;
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