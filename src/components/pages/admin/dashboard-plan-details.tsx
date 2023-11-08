import { ChangeEvent, useState } from "react";
import { DashboardPageTemplate } from "../../templates";
import { DisplayTablePayload } from "../../../types";
import { useDisplayTablePageController, useDisplayTableColumnController, DisplayTableItems } from "../../organism/display-table-items";
import { BrowseFile } from "../../atoms";
import { Plan } from "../../../services";
import * as XLSX from "xlsx";
import { constant } from "../../../utils";
interface PlanServerData {
    id: string,
    planCode: string,
    insuranceCompany: string,
    planName: string,
    ageBand: string,
    incomeTermOptions: string,
    maturityValueOptions: string,
    incomeFrequency: string,
    ppt: string,
}

interface PlanDetails {
    yearlyIncome: string,
    maturity: string,
    surrenderValue: string
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
        const fileReader = await new FileReader()
        fileReader.readAsArrayBuffer(file);
        fileReader.onload = (e: any) => {
            const bufferArray = e?.target.result
            const wb = XLSX.read(bufferArray, { type: "buffer" })
            let data: Record<string, any> = {}
            for (let i = 0; i < wb.SheetNames.length; i++) {
                const sheetName = wb.SheetNames[i];
                const ws = wb.Sheets[sheetName]
                const wb_as_json: any[] = XLSX.utils.sheet_to_json(ws);
                if (sheetName === "Plan Index") {
                    const rows: PlanServerData[] = wb_as_json.map((row, i) => {
                        return {
                            id: i.toString(),
                            ageBand: row['Age Band'] as string,
                            planCode: row['Plan Code'] as string,
                            insuranceCompany: row['Insurance Company'] as string,
                            planName: row['Plan Name'] as string,
                            incomeTermOptions: row['Income Term Option (yrs)'] as string,
                            maturityValueOptions: row['Maturity Value Option (percentage of total premium paid)'] as string,
                            incomeFrequency: row['Income Frequency (Monthly/Yearly)'] as string,
                            ppt: row['PPT (10,12)'] as string,                        
                        };
                    })
                    setPayloadData({
                        rows: rows,
                        totalDataCount: wb_as_json.length
                    })
                    continue;
                }
                data[sheetName] = {};
                for (let j = 0; j < wb_as_json.length; j++) {
                    const row: any = wb_as_json[j];
                    for (let i = 0; i < constant.ExcelHeaders.length; i++) {
                        const element = constant.ExcelHeaders[i];
                        if (!data[sheetName].hasOwnProperty(element[0])) {
                            data[sheetName][element[0]] = [];
                        }
                        data[sheetName][element[0]].push([row[element[0]], row[element[1]], row[element[2]]]);
                    }
                }
            }
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