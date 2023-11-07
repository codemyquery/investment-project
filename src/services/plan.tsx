import { useNavigate } from "react-router-dom";
import { DisplayTableColumnDefinition } from "../types";

export const useDisplayTablePlanHeaders = () => {
    const navigate = useNavigate();
    const planTableHeader: Array<DisplayTableColumnDefinition> = [
        {
            field: 'planName',
            type: 'text',
            headerName: 'Plan Name',
            filterable: true,
            sortable: true
        },
        {
            field: 'pdfDocument',
            type: 'text',
            headerName: 'PDF Document'
        },
        {
            field: 'planStartDate',
            type: 'text',
            headerName: 'Plan Start Date',
            filterable: true
        },

        {
            field: 'lastUpdated',
            type: 'date',
            sortable: true,
            headerName: 'Last Updated'
        },
        {
            field: 'updateDetails',
            type: 'action',
            sortable: true,
            headerName: 'Actions',
            actionsList: [
                {
                    type: 'edit',
                    callback: (params) => {
                        navigate(`/admin/edit-customers`)
                    }
                }
            ]
        }
    ]
    return planTableHeader;
}
