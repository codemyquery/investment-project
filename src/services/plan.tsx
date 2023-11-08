import { useNavigate } from "react-router-dom";
import { DisplayTableColumnDefinition } from "../types";

interface useDisplayTablePlanHeadersProps{
    dialogHandler: (open: boolean) => void
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
                    callback: (params) => {
                        dialogHandler(true);
                    }
                }
            ]
        }
    ]
    return planTableHeader;
}
