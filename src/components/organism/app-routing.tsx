import { Route, Routes } from "react-router-dom";
import { NavigationMenu, Service, ServiceStatus } from "../../types"
import { DashboardPlanDetails, HomePage, Login, PageNotFound } from "../pages";
import { useAuth } from "../../providers";
import { AdminLoginPage } from "../pages/admin/login";

interface AppRoutingProps {
    routingService: Service<NavigationMenu[]>;
}
interface getRoutingProps {
    route: NavigationMenu,
    currentPath: string,
    submenu: NavigationMenu[] | undefined
}

export const AppRouting = ({
    routingService
}: AppRoutingProps) => {
    const { adminInfo, userInfo } = useAuth()

    const getRoutingElement = ({ route, currentPath, submenu }: getRoutingProps): JSX.Element => {
        if (currentPath === '/login' && userInfo?.name) {
            return <HomePage />
        } else if (currentPath === '/admin' && adminInfo?.userName) {
            return <DashboardPlanDetails />
        } else if (currentPath.indexOf('/admin') === 0) {
            if (adminInfo?.email) {
                return <route.component currentPath={route.to} subMenu={route.subMenu} />
            } else {
                return <AdminLoginPage />;
            }
        } else if (currentPath.indexOf('/user') === 0) {
            if (userInfo?.name) {
                return <route.component currentPath={route.to} subMenu={route.subMenu} />
            } else {
                return <Login />;
            }
        } else {
            return <route.component currentPath={route.to} subMenu={route.subMenu} />;
        }
    }

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
                            element={getRoutingElement({ route: route, currentPath: route.to, submenu: route.subMenu })}
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