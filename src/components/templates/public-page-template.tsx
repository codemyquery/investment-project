import { useAuth } from "../../providers";
import { NavigationMenu, Service } from "../../types"
import { AppRouting, Footer, NavigationBar } from "../organism";
import '../../styles/public-page.css';

interface HomeProps {
    routingService: Service<NavigationMenu[]>;
}

export const PublicPageTemplate = ({
    routingService
}: HomeProps) => {

    return (
        <div className="app">
            <NavigationBar />
            <AppRouting routingService={routingService} />
            <Footer />
        </div>
    );
}