import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { DashboardPageTemplate } from "../../templates";
import AddIcon from '@mui/icons-material/Add';
import { UserServerData, DisplayTablePayload } from "../../../types";
import {
    useDisplayTablePageController,
    useDisplayTableColumnController,
    DisplayTableItems
} from "../../organism/display-table-items";
import { Users } from "../../../services";
import { request } from "../../../utils";

export const DashboardCustomers = () => {
    const [loader, setLoader] = useState(false);
    const [payloadData, setPayloadData] = useState<DisplayTablePayload<UserServerData>>({
        rows: [],
        totalDataCount: 0
    });
    const paginationController = useDisplayTablePageController({});
    const columnController = useDisplayTableColumnController<UserServerData>({
        columns: Users.useDisplayTableUsersHeaders()
    });

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
            const response = await Users.fetchUserList(query, abortController);
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
                <h5>Customer List</h5>
                <DisplayTableItems
                    loader={loader}
                    data={payloadData}
                    columnControllerHandler={columnController}
                    selectionPageController={paginationController}
                    tableId={"add-purchase-table"}
                    noRowsMessage="No Data"
                    actionsLeft={[
                        {
                            type: 'column'
                        }
                    ]}
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