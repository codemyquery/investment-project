import { DisplayTableColumnDefinition, SellDataResponse, SellServerData } from "../types";
import { WS_BASE_URL, callService } from "../utils";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

interface useDisplayTableSellDataHeadersProps{
    
}

export const useDisplayTableSellDataHeaders = ({
    
}: useDisplayTableSellDataHeadersProps) => {
    const sellDataTableHeader: Array<DisplayTableColumnDefinition> = [
        {
            field: 'customerName',
            type: 'text',
            headerName: 'Customer Name',
            filterable: true,
            sortable: true
        },
        {
            field: 'planName',
            type: 'text',
            headerName: 'Plan Name'
        },
        {
            field: 'planAmount',
            type: 'text',
            headerName: 'Plan Amount',
            filterable: true,
            icon: <CurrencyRupeeIcon style={{fontSize: '15px'}} /> ,
            iconPosition: 'left'
        },
        {
            field: 'purchaseStatus',
            type: 'text',
            sortable: true,
            headerName: 'Purchase Status'
        },
        {
            field: 'orderDate',
            type: 'text',
            sortable: true,
            headerName: 'Order Date'
        }
    ]
    return sellDataTableHeader;
}

/* export const createSaleRecord = async (
    data: Array<PlanFormData>, 
    abortController?: AbortController
): Promise<ServerResponse> => {
    const url = `${WS_BASE_URL}/routes.php`;
    return await callService({
        url: url,
        method: 'POST',
        userToken: 'sdasdasd',
        abortController: abortController,
        body: {
            route: {
                page: 'sell',
                actions: 'sellPlan'
            },
            data: data
        }
    })
} */

export const fetchSaleDataList = async (
    query: string = "",
    abortController?: AbortController
): Promise<SellDataResponse> => {
    const url = `${WS_BASE_URL}/routes.php?&page=sell&actions=getSellist&${query}`;
    return await callService({
        url: url,
        method: 'GET',
        userToken: 'sdasdasd',
        abortController: abortController
    })
}


export const fetchSaleData = async (itemID: string, abortController?: AbortController) : Promise<SellServerData> => {
    const url = `${WS_BASE_URL}/routes.php?&page=sell&actions=getSale&itemID=${itemID}`;
    return await callService({
        url: url,
        method: 'GET',
        userToken: 'sdasdasd',
        abortController: abortController
    })
}