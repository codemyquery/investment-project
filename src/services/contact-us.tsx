import { ContactUsFormData } from "../types";
import { WS_BASE_URL, callService } from "../utils";

export const createContactUs = async (data: ContactUsFormData) => {
    const url = `${WS_BASE_URL}/routes.php`;
    return await callService({
        url: url,
        method: 'POST',
        userToken: 'sdasdasd',
        body: {
            route: {
                page: 'contactus',
                actions: 'createContactUs'
            },
            data: data
        }
    })
}