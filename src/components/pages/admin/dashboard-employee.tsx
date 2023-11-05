import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { DashboardPageTemplate } from "../../templates";
import AddIcon from '@mui/icons-material/Add';
import { DisplayTablePayload } from "../../../types";
import { useDisplayTablePageController, useDisplayTableColumnController, DisplayTableItems } from "../../organism/display-table-items";

interface PlanServerData {

}

export const DashboardEmployee = () => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const [payloadData, setPayloadData] = useState<DisplayTablePayload<PlanServerData>>({
        rows: [],
        totalDataCount: 0
    });
    const paginationController = useDisplayTablePageController({});
    const columnController = useDisplayTableColumnController<PlanServerData>(
        {
            columns:
                [
                    {
                        field: 'vendor',
                        type: 'text',
                        headerName: 'Plan Name',
                        filterable: true,
                        sortable: true
                    },
                    {
                        field: 'addressVendor',
                        type: 'text',
                        headerName: 'PDF Document'
                    },
                    {
                        field: 'gstNumberVendor',
                        type: 'text',
                        headerName: 'Plan Start Date',
                        filterable: true
                    },
                    {
                        field: 'panNumberVendor',
                        type: 'text',
                        headerName: 'Action',
                        filterable: true
                    },
                    {
                        field: 'dateUpdated',
                        type: 'date',
                        sortable: true,
                        headerName: 'Last Updated'
                    }
                ]
        });

    return (
        <>
            <DashboardPageTemplate id={"expense-report-dashboard-page"}>
                <DisplayTableItems
                    loader={loader}
                    data={payloadData}
                    columnControllerHandler={columnController}
                    selectionPageController={paginationController}
                    tableId={"add-purchase-table"}
                    noRowsMessage="No Data"
                    actionsLeft={
                        [
                            {
                                type: 'customBasicAction',
                                icon: <AddIcon />,
                                title: "Add New Employee",
                                onClick: () => {
                                    navigate('/admin/edit-employee')
                                }
                            }
                        ]
                    }
                    otherProps={{
                        autoHeight: false,
                        style: {
                            height: '55vh'
                        }
                    }}
                />
            </DashboardPageTemplate>
        </>
    )
}