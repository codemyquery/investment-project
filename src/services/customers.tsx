import {
    CustomerDataResponse,
    DisplayTableColumnDefinition
} from "../types";
import {
    WS_BASE_URL,
    callService
} from "../utils";

export const useDisplayTableCustomerHeaders = () => {
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
            field: 'dateUpdated',
            type: 'date',
            sortable: true,
            headerName: 'Last Updated'
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

export const fetchCustomerList = async (
    query: string = "",
    abortController?: AbortController
): Promise<CustomerDataResponse> => {
    const url = `${WS_BASE_URL}/routes.php?&page=customers&actions=getCustomerList&${query}`;
    return await callService({
        url: url,
        method: 'GET',
        userToken: 'sdasdasd',
        abortController: abortController
    })
}
