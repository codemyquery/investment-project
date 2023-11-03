import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../providers";
import { NavigationMenu, Service } from "../../types"
import { AppRouting } from "../organism";

interface HomeProps {
    routingService: Service<NavigationMenu[]>;
}


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://static.vecteezy.com/system/resources/previews/007/500/121/non_2x/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};
const Footer = () => {
    const navigate = useNavigate();

    const onNavigateHandler = ()=>{
        navigate('/dashboard')
    }

    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://static.vecteezy.com/system/resources/previews/007/500/121/non_2x/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li onClick={onNavigateHandler}>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = () => {
    return <div className="res-card">
        <h3>Meghana Foods</h3>
    </div>;
};

export const TemplateHome = ({
    routingService
}: HomeProps) => {
    const { openDrawer, changeDrawer } = useAuth();

    return (
        <div className="app">
            <Header />
            <br /><br /><br />

            <div className="res-container">
                <RestaurantCard />
                <AppRouting routingService={routingService} />
            </div>
            <br /><br /><br />

            <Footer />
        </div>
    );
}