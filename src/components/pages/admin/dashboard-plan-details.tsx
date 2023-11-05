import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { DashboardPageTemplate } from "../../templates";
import AddIcon from '@mui/icons-material/Add';
import { DisplayTablePayload } from "../../../types";
import { useDisplayTablePageController, useDisplayTableColumnController, DisplayTableItems } from "../../organism/display-table-items";

interface PlanServerData {
    id:string,
    planName : string,
    pdfDocument : string,
    planStartDate : string,
    actionPlan : string,
    lastUpdated:Date
}

export const DashboardPlanDetails = () => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const [payloadData, setPayloadData] = useState<DisplayTablePayload<PlanServerData>>({
        rows: [
            {
                id: "1",
                planName : "Aditya Birla Monthly Income Plan",
                pdfDocument : "This will be PDF Attachment",
                planStartDate : "11/06/2023",
                actionPlan : "this will be button for edit/modify",
                lastUpdated: new Date()
            }
        ],
        totalDataCount: 0
    });
    const paginationController = useDisplayTablePageController({});
    const columnController = useDisplayTableColumnController<PlanServerData>(
        {
            columns:
                [
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
        });

    return (
        <>
            <DashboardPageTemplate id={"expense-report-dashboard-page"}>
                <h5>Plan List</h5>
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
                                title: "Add New Plan",
                                onClick: () => {
                                    navigate('/admin/edit-plan-details')
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