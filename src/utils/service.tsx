import { getAuthHeader, postJsonAuthHeader } from "./helper";

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';
interface Login {
    page: 'login',
    actions: 'login' | 'logout'
}

interface Employee {
    page: 'employee',
    actions: 'addEmployee'
}

interface Plan {
    page: 'plan',
    actions: 'addPlan'
}

interface SellPlan {
    page: 'sell',
    actions: 'createSellPlan' | 'updateSellPlan'
}

interface ContactUs {
    page: 'contactus',
    actions: 'createContactUs' | 'fetchContactus'
}

interface User {
    page: 'user',
    actions: 'createUser' | 'loginUser' | 'updateKycData' | 'forgetPassword'
}

interface BodyData {
    [key: string]: any;
}
interface FilterData {
    [key: string]: any;
}
interface Body {
    route: Login | Employee | Plan | ContactUs | User | SellPlan
    data?: BodyData
    filter?: FilterData
}

interface callServiceProps {
    userToken: string | null;
    url: string;
    method: Method;
    body?: Body;
    abortController?: AbortController
}
interface callFileUploadServiceProps {
    userToken: string | null;
    url: string;
    file: File[];
    abortController?: AbortController
}

export const callService = async ({
    userToken,
    url,
    method,
    body,
    abortController
}: callServiceProps) => {
    if (userToken) {
        let response: Response;
        let headers: Headers;
        let bodyStr: string;
        if (!body) {
            headers = getAuthHeader({ userToken: userToken });
            response = await fetch(
                url,
                {
                    headers,
                    method,
                    signal: abortController?.signal
                }
            )
        } else {
            bodyStr = body ? JSON.stringify(body) : "";
            headers = postJsonAuthHeader(userToken, bodyStr.length);
            response = await fetch(url,
                {
                    headers,
                    method,
                    body: bodyStr,
                    signal: abortController?.signal
                })
        }
        if (response.status !== 200 && response.status !== 201 && response.status !== 204) {
            const resp = await response.json();
            if (resp.error) {
                throw resp.console.error();
            }
            throw new Error(
                `Web service returned an unexpected status code: ${response.status}`
            )
        }
        return response.status === 204 ? {} : response.json();
    } else {
        throw new Error('Web service cannot be called without user token')
    }
}

export const callFileUploadService = async ({
    userToken,
    url,
    file,
    abortController
}: callFileUploadServiceProps) => {
    if (userToken) {
        let response: Response;
        const formData = new FormData();
        formData.append("uploadedFile", file[0]);
        response = await fetch(url,
            {
                method: 'POST',
                body: formData,
                signal: abortController?.signal
            })
        if (response.status !== 200 && response.status !== 201 && response.status !== 204) {
            const resp = await response.json();
            if (resp.error) {
                throw resp.console.error();
            }
            throw new Error(
                `Web service returned an unexpected status code: ${response.status}`
            )
        }
        return response.status === 204 ? {} : response.json();
    } else {
        throw new Error('Web service cannot be called without user token')
    }
}


export const callURL = async (url: string) => {
    const response = await fetch(url, {
        method: 'GET'
    })
    return response;
}

export const getArrayBuffer = async (url: string) => {
    const response = callURL(url);
    return (await response).arrayBuffer();
}