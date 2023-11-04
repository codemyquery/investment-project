import { useAuth } from "../../providers";
import { NavigationMenu, Service } from "../../types"
import { AppRouting, Footer, NavigationBar } from "../organism";

interface HomeProps {
    routingService: Service<NavigationMenu[]>;
}

export const HomePageTemplate = ({
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