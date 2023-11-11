import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { DashboardPageTemplate } from "../../templates";
import AddIcon from '@mui/icons-material/Add';
import { DisplayTablePayload, EmployeeServerData } from "../../../types";
import { useDisplayTablePageController, useDisplayTableColumnController, DisplayTableItems } from "../../organism/display-table-items";
import { Employees } from "../../../services";
import { request } from "../../../utils";

interface PlanServerData {
    id: string,
    empName: string,
    empMobileNumber: string,
    empSalesCode: string,
    totalSaleAmount: string,
    totalCustomerCount: string
}

export const DashboardEmployee = () => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const [payloadData, setPayloadData] = useState<DisplayTablePayload<EmployeeServerData>>({
        rows: [],
        totalDataCount: 0
    });
    const paginationController = useDisplayTablePageController({});
    const columnController = useDisplayTableColumnController<EmployeeServerData>({ columns: Employees.useDisplayTableEmployeeHeaders() });

    const query = useMemo(() => {
        return request.computeCanonicalQueryString({
            orderBy: paginationController.orderBy,
            order: paginationController.order,
            pageNumber: paginationController.page,
            itemPerPage: paginationController.itemsPerPage
        })

    }, [
        paginationController.order,
        paginationController.orderBy,
        paginationController.page,
        paginationController.itemsPerPage
    ]);

    useEffect(() => {
        const abortController = new AbortController();
        const init = async () => {
            setLoader(true)
            const response = await Employees.fetchEmployeesList(query, abortController);
            setPayloadData({
                rows: response.rows,
                totalDataCount: response.count
            });
            setLoader(false)
        }
        init();
        return () => { setTimeout(() => { abortController.abort(); }, 2000) };
    }, [query]);

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