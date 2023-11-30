import { useEffect, useMemo, useState } from "react";
import { DashboardPageTemplate } from "../../templates";
import { DefaultFormState, DisplayTablePayload, FormState, PlanServerData, SellServerData } from "../../../types";
import { useDisplayTablePageController, useDisplayTableColumnController, DisplayTableItems } from "../../organism/display-table-items";
import { Sell } from "../../../services";
import { formatNumber, request } from "../../../utils";
import { Notifications } from "../../molecules/notification";

export const DashboardSellData = () => {
    const abortController = new AbortController();
    const [loader, setLoader] = useState(false);
    const [payloadPlanData, setPayloadPlanData] = useState<DisplayTablePayload<SellServerData>>({ rows: [], totalDataCount: 0 });
    const [formState, setFormState] = useState<FormState>({ ...DefaultFormState });
    const paginationController = useDisplayTablePageController({});
    const columnController = useDisplayTableColumnController<SellServerData>({
        columns: Sell.useDisplayTableSellDataHeaders({})
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
        const init = async () => {
            setLoader(true)
            const response = await Sell.fetchSaleDataList(query, abortController);
            setPayloadPlanData({
                rows: response.rows.map((row, i) => ({ ...row, planAmount: formatNumber(Number(row.planAmount)) })),
                totalDataCount: response.count
            });
            setLoader(false);
        }
        init();
    }, [query]);

    return (
        <>
            <DashboardPageTemplate id={"expense-report-dashboard-page"}>
                <h5>Sale List</h5>
                <DisplayTableItems
                    loader={loader}
                    data={payloadPlanData}
                    columnControllerHandler={columnController}
                    selectionPageController={paginationController}
                    tableId={"add-purchase-table"}
                    noRowsMessage="No Data"
                    actionsLeft={
                        [
                            {
                                type: 'column'
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
            <Notifications
                open={formState.notificationOpen}
                message={formState.notificationMessage}
                onClose={() => { setFormState(prev => { return { ...prev, notificationOpen: false, notificationType: 'error', notificationMessage: '' } }) }}
                severity={formState.notificationType}
            />
        </>
    )
}