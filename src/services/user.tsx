import {
    UserDataResponse,
    DisplayTableColumnDefinition,
    ServerResponse,
    SignUpFormData,
    LoginFormData
} from "../types";
import {
    WS_BASE_URL,
    callService
} from "../utils";

export const useDisplayTableUsersHeaders = () => {
    const customerTableHeaders: Array<DisplayTableColumnDefinition> = [
        {
            field: 'name',
            type: 'text',
            headerName: 'Employee Name',
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
            type: 'date',
            sortable: true,
            headerName: 'Date Created'
        },
        {
            field: 'actions',
            type: 'action',
            actionsList: [
                {
                    type: 'edit',
                    callback: () => {

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
    const url = `${WS_BASE_URL}/routes.php?&page=user&actions=getUsersList&${query}`;
    return await callService({
        url: url,
        method: 'GET',
        userToken: 'sdasdasd',
        abortController: abortController
    })
}

export const createUser = async (data: SignUpFormData, abortController?: AbortController): Promise<ServerResponse> => {
    const url = `${WS_BASE_URL}/routes.php`;
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

export const loginUser = async (data: LoginFormData, abortController?: AbortController): Promise<ServerResponse> => {
    const url = `${WS_BASE_URL}/routes.php`;
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