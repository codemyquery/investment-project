import { Route, Routes } from "react-router-dom";
import { NavigationMenu, Service, ServiceStatus } from "../../types"
import { Login, PageNotFound } from "../pages";
import { useAuth } from "../../providers";
import { AdminLoginPage } from "../pages/admin/login";

interface AppRoutingProps {
    routingService: Service<NavigationMenu[]>;
}
export const AppRouting = ({
    routingService
}: AppRoutingProps) => {
    const { adminInfo, userInfo } = useAuth()
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
                            element={
                                route.to.indexOf('/admin') === 0 ?
                                adminInfo ? <route.component currentPath={route.to} subMenu={route.subMenu} /> : <AdminLoginPage />
                                : route.to.indexOf('/user') === 0 ?
                                userInfo ? <route.component currentPath={route.to} subMenu={route.subMenu} /> : <Login />
                                : <route.component currentPath={route.to} subMenu={route.subMenu} />
                        }
                        />
                    ))
                }
                {
                        <Route
                            path="*"
                            element={<PageNotFound />}
                        />
                }
            </Routes>
    }
}