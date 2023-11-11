import { useNavigate } from "react-router-dom";
import { DisplayTableColumnDefinition, PlanFormData, ServerResponse } from "../types";
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
    const url = `${WS_BASE_URL}/routes.php`;
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
