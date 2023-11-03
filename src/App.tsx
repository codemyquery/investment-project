import React from "react";
import { Suspense } from "react";
import './App.css';
import { AuthProvider, useAuth } from './providers/auth';
import { BrowserRouter as Router } from "react-router-dom";
import { HomePage } from "./components/pages";

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