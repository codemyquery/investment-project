import { useNavigate } from "react-router-dom";
import { DisplayTableColumnDefinition, PlanDataResponse, PlanFormData, PlanServerData, ServerResponse } from "../types";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { WS_BASE_URL, callService } from "../utils";

interface useDisplayTablePlanHeadersProps{
    dialogHandler: (params: GridRenderCellParams<any, any, any>) => void
}

export const useDisplayTablePlanHeaders = ({
    dialogHandler
}: useDisplayTablePlanHeadersProps) => {
    const planTableHeader: Array<DisplayTableColumnDefinition> = [
        {
            type: 'checkbox',
            field: ''
        },
        {
            field: 'planCode',
            type: 'text',
            headerName: 'Plan Code',
            filterable: true,
            sortable: true
        },
        {
            field: 'insuranceCompany',
            type: 'text',
            headerName: 'Insurance Company'
        },
        {
            field: 'planName',
            type: 'text',
            headerName: 'Plan Name',
            filterable: true
        },
        {
            field: 'ageBand',
            type: 'text',
            sortable: true,
            headerName: 'Age Band'
        },
        {
            field: 'ppt',
            type: 'text',
            sortable: true,
            headerName: 'Paying Term'
        },
        {
            field: 'incomeTermOptions',
            type: 'text',
            sortable: true,
            headerName: 'Income Term Options'
        },
        {
            field: 'maturityValueOptions',
            type: 'text',
            sortable: true,
            headerName: 'Maturity Value Options'
        },
        {
            field: 'incomeFrequency',
            type: 'text',
            sortable: true,
            headerName: 'Income Frequency'
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
            sortable: true,
            headerName: 'Actions',
            actionsList: [
                {
                    type: 'view',
                    callback: dialogHandler
                }
            ]
        }
    ]
    return planTableHeader;
}

export const createPlanRecord = async (
    data: Array<PlanFormData>, 
    abortController?: AbortController
): Promise<ServerResponse> => {
    const url = `${WS_BASE_URL}`;
    return await callService({
        url: url,
        method: 'POST',
        userToken: 'sdasdasd',
        abortController: abortController,
        body: {
            route: {
                page: 'plan',
                actions: 'addPlan'
            },
            data: data
        }
    })
}

export const fetchPlanList = async (
    query: string = "",
    abortController?: AbortController
): Promise<PlanDataResponse> => {
    const url = `${WS_BASE_URL}?&page=plan&actions=getPlanList&${query}`;
    return await callService({
        url: url,
        method: 'GET',
        userToken: 'sdasdasd',
        abortController: abortController
    })
}


export const fetchPlan = async (itemID: string, abortController?: AbortController) : Promise<PlanServerData> => {
    const url = `${WS_BASE_URL}?&page=plan&actions=getPlan&itemID=${itemID}`;
    return await callService({
        url: url,
        method: 'GET',
        userToken: 'sdasdasd',
        abortController: abortController
    })
}

export const deletePlans = async ( ids: any[], abortController?: AbortController): Promise<ServerResponse> => {
    const url = `${WS_BASE_URL}`;
    return await callService({
        url: url,
        method: 'DELETE',
        userToken: 'sdasdasd',
        abortController: abortController,
        body: {
            route: {
                page: 'plan',
                actions: 'deletePlan'
            },
            data: ids
        }
    })
}