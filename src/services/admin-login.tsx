import { AdminLogin } from "../types";
import { WS_BASE_URL, callService } from "../utils";

export const signIn = async (
    credentials: AdminLogin
): Promise<any> => {
    const url = `${WS_BASE_URL}/routes.php`;
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
