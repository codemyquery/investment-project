import { EmployeeFormData, ServerResponse } from "../types";
import { WS_BASE_URL, callService } from "../utils";

export const fetchEmployes = async (
    query: string = "",
    abortController?: AbortController
): Promise<EmployeeFormData> => {
    const url = `${WS_BASE_URL}/routes.php?&page=employee&actions=getEmployeeList&${query}`;
    return await callService({
        url: url,
        method: 'GET',
        userToken: 'sdasdasd',
        abortController: abortController
    })
}

export const createEmployeeRecord = async (data: EmployeeFormData, abortController?: AbortController): Promise<ServerResponse> => {
    const url = `${WS_BASE_URL}/routes.php`;
    return await callService({
        url: url,
        method: 'POST',
        userToken: 'sdasdasd',
        abortController: abortController,
        body: {
            route: {
                page: 'employee',
                actions: 'addEmployee'
            },
            data: data
        }
    })
}

export const updateEmployeeRecord = async (data: EmployeeFormData, abortController?: AbortController): Promise<ServerResponse> => {
    const url = `${WS_BASE_URL}/routes.php`;
    return await callService({
        url: url,
        method: 'PUT',
        userToken: 'sdasdasd',
        abortController: abortController,
        body: {
            route: {
                page: 'employee',
                actions: 'addEmployee'
            },
            data: data
        }
    })
}
