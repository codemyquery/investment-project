import { DisplayTableColumnDefinition, EmployeeFormData, EmployeeServerData, ServerResponse } from "../types";
import { WS_BASE_URL, callService } from "../utils";
import { EmployeeDataResponse } from "../types/employee";


export const useDisplayTableEmployeeHeaders = () => {
    const employeeTableHeaders: Array<DisplayTableColumnDefinition> = [
        {
            field: 'name',
            type: 'text',
            headerName: 'Employee Name',
            filterable: true,
            sortable: true
        },
        {
            field: 'employeeCode',
            type: 'text',
            headerName: 'Employee Code'
        },
        {
            field: 'email',
            type: 'text',
            headerName: 'Email',
            filterable: true
        },
        {
            field: 'mobile',
            type: 'text',
            headerName: 'Mobile No.',
            filterable: true
        },
        {
            field: 'designation',
            type: 'text',
            sortable: true,
            headerName: 'Designation'
        },
        {
            field: 'dateUpdated',
            type: 'date',
            sortable: true,
            headerName: 'Last Updated'
        }
    ]
    return employeeTableHeaders;
}

export const fetchEmployeesList = async (
    query: string = "",
    abortController?: AbortController
): Promise<EmployeeDataResponse> => {
    const url = `${WS_BASE_URL}/virtual-property/api/routes.php?&page=employee&actions=getEmployeeList&${query}`;
    return await callService({
        url: url,
        method: 'GET',
        userToken: 'sdasdasd',
        abortController: abortController
    })
}

export const fetchEmployee = async (
    query: string = "",
    abortController?: AbortController
): Promise<EmployeeServerData> => {
    const url = `${WS_BASE_URL}/virtual-property/api/routes.php?&page=employee&actions=getEmployee&itemID=${query}`;
    return await callService({
        url: url,
        method: 'GET',
        userToken: 'sdasdasd',
        abortController: abortController
    })
}

export const createEmployeeRecord = async (data: EmployeeFormData, abortController?: AbortController): Promise<ServerResponse> => {
    const url = `${WS_BASE_URL}/virtual-property/api/routes.php`;
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
    const url = `${WS_BASE_URL}/virtual-property/api/routes.php`;
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
