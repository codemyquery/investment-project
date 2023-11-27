import { AdminLogin } from "../types";
import { WS_BASE_URL, callService } from "../utils";

export const signIn = async (
    credentials: AdminLogin
): Promise<any> => {
    const url = `${WS_BASE_URL}/virtual-property/api/routes.php`;
    return await callService({
        url: url,
        method: 'POST',
        userToken: 'sdasdasd',
        body: {
            route: {
                actions: 'login',
                page: 'login'
            },
            data: credentials
        }
    })
}

export const signOut = async () => {
    const url = `${WS_BASE_URL}/virtual-property/api/routes.php?&page=login&actions=logout`;
    return await callService({
        url: url,
        method: 'GET',
        userToken: 'sdasdasd'
    })
}