import { useNavigate } from "react-router-dom";
import {
    UserDataResponse,
    DisplayTableColumnDefinition,
    ServerResponse,
    SignUpFormData,
    LoginFormData,
    UserKYCServerData,
    UserKYCFormData,
    UserActivePlanServerData
} from "../types";
import {
    WS_BASE_URL,
    callService
} from "../utils";
import { ForgetPasswordFormDate } from "../types/user";

export const useDisplayTableUsersHeaders = () => {
    const navigate = useNavigate();
    const customerTableHeaders: Array<DisplayTableColumnDefinition> = [
        {
            field: 'name',
            type: 'text',
            headerName: 'Customer Name',
            filterable: true,
            sortable: true
        },
        {
            field: 'email',
            type: 'text',
            headerName: 'Email'
        },
        {
            field: 'mobile',
            type: 'text',
            headerName: 'Mobile',
            filterable: true
        },
        {
            field: 'kycStatus',
            type: 'text',
            headerName: 'KYC Status',
            filterable: true
        },
        {
            field: 'dateCreated',
            type: 'text',
            sortable: true,
            headerName: 'Date Created'
        },
        {
            field: 'actions',
            type: 'action',
            actionsList: [
                {
                    type: 'edit',
                    callback: (params: any) => {
                        navigate(`/admin/edit-customers/${params.id}`)
                    }
                }
            ],
            headerName: 'Actions'
        }
    ]
    return customerTableHeaders;
}

export const fetchUserList = async (
    query: string = "",
    abortController?: AbortController
): Promise<UserDataResponse> => {
    const url = `${WS_BASE_URL}?&page=user&actions=getUsersList&${query}`;
    return await callService({
        url: url,
        method: 'GET',
        userToken: 'sdasdasd',
        abortController: abortController
    })
}

export const createUser = async (data: SignUpFormData, abortController?: AbortController): Promise<ServerResponse> => {
    const url = `${WS_BASE_URL}`;
    return await callService({
        url: url,
        method: 'POST',
        userToken: 'sdasdasd',
        abortController: abortController,
        body: {
            route: {
                page: 'user',
                actions: 'createUser'
            },
            data: data
        }
    })
}

export const forgetPassword = async (data: ForgetPasswordFormDate, abortController?: AbortController): Promise<ServerResponse> => {
    const url = `${WS_BASE_URL}`;
    return await callService({
        url: url,
        method: 'POST',
        userToken: 'sdasdasd',
        abortController: abortController,
        body: {
            route: {
                page: 'user',
                actions: 'forgetPassword'
            },
            data: data
        }
    })
}
export const loginUser = async (data: LoginFormData, abortController?: AbortController): Promise<ServerResponse> => {
    const url = `${WS_BASE_URL}`;
    return await callService({
        url: url,
        method: 'POST',
        userToken: 'sdasdasd',
        abortController: abortController,
        body: {
            route: {
                page: 'user',
                actions: 'loginUser'
            },
            data: data
        }
    })
}

export const fetchKycDetails = async (userId: string, abortController?: AbortController): Promise<UserKYCServerData> => {
    const url = `${WS_BASE_URL}?&page=user&actions=getKYCData&itemID=${userId}`;
    return await callService({
        url: url,
        method: 'GET',
        userToken: 'sdasdasd',
        abortController: abortController
    })
}

export const fetchUserActivePlans = async (id: string, abortController?: AbortController): Promise<UserActivePlanServerData[]> => {
    const url = `${WS_BASE_URL}?&page=user&actions=getActivePlans&itemID=${id}`;
    return await callService({
        url: url,
        method: 'GET',
        userToken: 'sdasdasd',
        abortController: abortController
    })
}

export const updateKYCDetails = async (data: UserKYCFormData, abortController?: AbortController): Promise<ServerResponse> => {
    const url = `${WS_BASE_URL}`;
    return await callService({
        url: url,
        method: 'PUT',
        userToken: 'sdasdasd',
        body: {
            route: {
                page: 'user',
                actions: 'updateKycData'
            },
            data: data
        },
        abortController: abortController
    })
}