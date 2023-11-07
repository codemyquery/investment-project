import { ChangeEvent, useState } from "react";
import { DashboardPageTemplate } from "../../templates";
import { DisplayTablePayload } from "../../../types";
import { useDisplayTablePageController, useDisplayTableColumnController, DisplayTableItems } from "../../organism/display-table-items";
import { BrowseFile } from "../../atoms";
import { Plan } from "../../../services";
import * as XLSX from "xlsx";
interface PlanServerData {
    id: string,
    planName: string,
    pdfDocument: string,
    planStartDate: string,
    actionPlan: string,
    lastUpdated: Date
}

export const DashboardPlanDetails = () => {
    const [loader, setLoader] = useState(false);
    const [payloadData, setPayloadData] = useState<DisplayTablePayload<PlanServerData>>({
        rows: [],
        totalDataCount: 0
    });
    const paginationController = useDisplayTablePageController({});
    const columnController = useDisplayTableColumnController<PlanServerData>({
        columns: Plan.useDisplayTablePlanHeaders()
    });

    const onBrowseFileHandler = async (evt: ChangeEvent<HTMLInputElement>) => {
        const file = evt.currentTarget?.files;
        if (file?.length) {
            await readExcel(file[0]);
        }
    }

    const readExcel = async (file: any) => {
        const header = ['Income', 'Maturity', 'Surrender Value']
        const fileReader = await new FileReader()
        fileReader.readAsArrayBuffer(file);
        fileReader.onload = (e: any) => {
            const bufferArray = e?.target.result
            const wb = XLSX.read(bufferArray, { type: "buffer" })
            const data: Record<string, any> = {}
            for (let i = 0; i < wb.SheetNames.length; i++) {
                const sheetName = wb.SheetNames[i];
                if(sheetName === "Plan Index") continue;
                data[sheetName] = {};
                const ws = wb.Sheets[sheetName]
                const wb_as_json = XLSX.utils.sheet_to_json(ws);
                for (let j = 0; j < wb_as_json.length; j++) {
                    const row: any = wb_as_json[j];
                    for( const key in row){
                        if(Number(key)){
                            data[sheetName][key] = []
                            data[sheetName][key].push(header);
                        }
                    }
                }
            }
            console.log(data)
        }
    }

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
                                type: 'custom',
                                action: <BrowseFile label="Upload File" onBrowseFileHandler={onBrowseFileHandler} />
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