import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { DashboardPageTemplate } from "../../templates";
import AddIcon from '@mui/icons-material/Add';
import { DisplayTablePayload } from "../../../types";
import { useDisplayTablePageController, useDisplayTableColumnController, DisplayTableItems } from "../../organism/display-table-items";

interface PlanServerData {
    id:string,
    empName:string,
    empMobileNumber: string,
    empSalesCode:string,
    totalSaleAmount:string,
    totalCustomerCount:string
}

export const DashboardEmployee = () => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const [payloadData, setPayloadData] = useState<DisplayTablePayload<PlanServerData>>({
        rows: [
            {
                id:"1",
                empName:"Roshni",
                empMobileNumber: "911825845",
                empSalesCode:"31B6D",
                totalSaleAmount:"20000000",
                totalCustomerCount:"5"
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
                        field: 'empName',
                        type: 'text',
                        headerName: 'Employee Name',
                        filterable: true,
                        sortable: true
                    },
                    {
                        field: 'empMobileNumber',
                        type: 'text',
                        headerName: 'Employee Mob No.'
                    },
                    {
                        field: 'empSalesCode',
                        type: 'text',
                        headerName: 'Emp Sales Code',
                        filterable: true
                    },
                    {
                        field: 'totalSaleAmount',
                        type: 'text',
                        headerName: 'Total Sale Amount',
                        filterable: true
                    },
                    {
                        field: 'totalCustomerCount',
                        type: 'text',
                        sortable: true,
                        headerName: 'Total Customer Count'
                    }
                ]
        });

    return (
        <>
            <DashboardPageTemplate id={"expense-report-dashboard-page"}>
                <h5>Employee Sales Data</h5>
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