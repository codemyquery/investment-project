import { ContactUsFormData, ContactusDataResponse, DisplayTableColumnDefinition } from "../types";
import { WS_BASE_URL, callService } from "../utils";

export const createContactUs = async (data: ContactUsFormData) => {
    const url = `${WS_BASE_URL}/virtual-property/api/routes.php`;
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

export const fetchContactusList = async (
    query: string = "",
    abortController?: AbortController
): Promise<ContactusDataResponse> => {
    const url = `${WS_BASE_URL}/virtual-property/api/routes.php?&page=contactus&actions=getContactusList&${query}`;
    return await callService({
        url: url,
        method: 'GET',
        userToken: 'sdasdasd',
        abortController: abortController
    })
}


export const useDisplayTableContactusHeaders = () => {
    const customerTableHeaders: Array<DisplayTableColumnDefinition> = [
        {
            field: 'name',
            type: 'text',
            headerName: 'Name',
            filterable: true,
            sortable: true
        },
        {
            field: 'message',
            type: 'text',
            headerName: 'Message',
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
            field: 'dateUpdated',
            type: 'date',
            sortable: true,
            headerName: 'Last Updated'
        },
       
    ]
    return customerTableHeaders;
}