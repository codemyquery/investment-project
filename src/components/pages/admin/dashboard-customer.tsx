import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { DashboardPageTemplate } from "../../templates";
import AddIcon from '@mui/icons-material/Add';
import { DisplayTablePayload } from "../../../types";
import { useDisplayTablePageController, useDisplayTableColumnController, DisplayTableItems } from "../../organism/display-table-items";
import { string } from "yargs";

interface PlanServerData {
    id: string,
    custName: string,
    custInitDate: string,
    cust_empCode: string,
    kycStatus: string,
    investedAmount: string,
    lastUpdated: Date
}

export const DashboardCustomers = () => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const [payloadData, setPayloadData] = useState<DisplayTablePayload<PlanServerData>>({
        rows: [
            {
                id: "1",
                custName: "Ramesh Singh",
                custInitDate: "12/01/23",
                cust_empCode: "003B1",
                kycStatus: "NO",
                investedAmount: "NULL",
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
                        field: 'custName',
                        type: 'text',
                        headerName: 'Customer Name',
                        filterable: true,
                        sortable: true
                    },
                    {
                        field: 'custInitDate',
                        type: 'text',
                        headerName: 'Customer Initiation Date'
                    },
                    {
                        field: 'cust_empCode',
                        type: 'text',
                        headerName: 'LG Code/LC Code',
                        filterable: true
                    },
                    {
                        field: 'kycStatus',
                        type: 'text',
                        headerName: 'KYC Status',
                        filterable: true
                    },
                    {
                        field: 'investedAmount',
                        type: 'text',
                        sortable: true,
                        headerName: 'Invested Amount'
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
                <h5>Customer List</h5>
                <DisplayTableItems
                    loader={loader}
                    data={payloadData}
                    columnControllerHandler={columnController}
                    selectionPageController={paginationController}
                    tableId={"add-purchase-table"}
                    noRowsMessage="No Data"
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