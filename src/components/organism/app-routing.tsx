import { Route, Routes } from "react-router-dom";
import { NavigationMenu, Service, ServiceStatus } from "../../types"

interface AppRoutingProps {
    routingService: Service<NavigationMenu[]>;
}
export const AppRouting = ({
    routingService
}: AppRoutingProps) => {
    switch (routingService.status) {
        case ServiceStatus.Init:
        case ServiceStatus.Loading:
            return <></>
        case ServiceStatus.Error:
            return <div>Error</div>
        case ServiceStatus.Loaded:
            return <Routes>
                {
                    routingService.payload.map((route) => (
                        <Route
                            key={`${route.id}-route`}
                            path={route.path}
                            element={<route.component currentPath={route.to} subMenu={route.subMenu} />}
                        />
                    ))
                }
                {
                    /*
                        <Route
                            path=""
                            element={<Alert severity="warning">Page not found</Alert>}
                        />
                    */
                }
            </Routes>
    }
}