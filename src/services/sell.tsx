import { useNavigate } from "react-router-dom";
import { DisplayTableColumnDefinition, SellDataResponse, SellServerData, ServerResponse } from "../types";
import { SellFormData, SellFormDataAdmin } from "../types/sell";
import { WS_BASE_URL, callService } from "../utils";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

interface useDisplayTableSellDataHeadersProps {

}

export const useDisplayTableSellDataHeaders = ({

}: useDisplayTableSellDataHeadersProps) => {
    const navigate = useNavigate();
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
            icon: <CurrencyRupeeIcon style={{ fontSize: '15px' }} />,
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
        },
        {
            field: 'actions',
            type: 'action',
            sortable: false,
            headerName: 'Actions',
            cellAlignment: 'center',
            headerAlign: 'center',
            actionsList: [
                {
                    type: 'edit',
                    callback: (params) => {
                        navigate(`/admin/edit-plan-sell/${params.id}`)
                    }
                }
            ]
        }
    ]
    return sellDataTableHeader;
}

export const fetchSaleDataList = async (
    query: string = "",
    abortController?: AbortController
): Promise<SellDataResponse> => {
    const url = `${WS_BASE_URL}/virtual-property/api/routes.php?&page=sell&actions=getSellList&${query}`;
    return await callService({
        url: url,
        method: 'GET',
        userToken: 'sdasdasd',
        abortController: abortController
    })
}


export const fetchSaleData = async (itemID: string, abortController?: AbortController): Promise<SellServerData> => {
    const url = `${WS_BASE_URL}/virtual-property/api/routes.php?&page=sell&actions=getSell&itemID=${itemID}`;
    return await callService({
        url: url,
        method: 'GET',
        userToken: 'sdasdasd',
        abortController: abortController
    })
}

export const InsertSellData = async (data: SellFormData, abortController?: AbortController): Promise<ServerResponse> => {
    const url = `${WS_BASE_URL}/virtual-property/api/routes.php`;
    return await callService({
        url: url,
        method: 'POST',
        userToken: 'sdasdasd',
        abortController: abortController,
        body: {
            route: {
                page: 'sell',
                actions: 'createSellPlan'
            },
            data: data
        }
    })
}
export const updateSellData = async (data: SellFormDataAdmin, abortController?: AbortController): Promise<ServerResponse> => {
    const url = `${WS_BASE_URL}/virtual-property/api/routes.php`;
    return await callService({
        url: url,
        method: 'PUT',
        userToken: 'sdasdasd',
        abortController: abortController,
        body: {
            route: {
                page: 'sell',
                actions: 'updateSellPlan'
            },
            data: data
        }
    })
}