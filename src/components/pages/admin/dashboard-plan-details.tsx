import { ChangeEvent, useState } from "react";
import { DashboardPageTemplate } from "../../templates";
import { DisplayTablePayload } from "../../../types";
import { useDisplayTablePageController, useDisplayTableColumnController, DisplayTableItems } from "../../organism/display-table-items";
import { BrowseFile } from "../../atoms";
import { Plan } from "../../../services";
import * as XLSX from "xlsx";
import { constant, formatNumber } from "../../../utils";
import CloseIcon from '@mui/icons-material/Close';
import { DialogTitle, IconButton, DialogContent, Typography, DialogActions, Button, Dialog, Grid, List, ListItem, ListItemText, ListItemButton, ListItemIcon, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, MenuItem, MenuList } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { GenericDialog } from "../../organism";

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
    planDetails: Record<string, Array<string>>
}

interface Dialog {
    data?: PlanServerData,
    open: boolean
}
const dialogDefaultValue: Dialog = {
    open: false,
}
export const DashboardPlanDetails = () => {
    const [dialog, setDialog] = useState(dialogDefaultValue);
    const [investmentAmount, setInvestmentAmount] = useState<string>('1000000');
    const [payloadPlanData, setPayloadPlanData] = useState<DisplayTablePayload<PlanServerData>>({
        rows: [],
        totalDataCount: 0
    });

    const dialogHandler = (params?: GridRenderCellParams<any, any, any>) => {
        if (params) {
            setDialog({ open: true, data: params.row })
        } else {
            setDialog(dialogDefaultValue)
        }
    }
    const paginationController = useDisplayTablePageController({});
    const columnController = useDisplayTableColumnController<PlanServerData>({
        columns: Plan.useDisplayTablePlanHeaders({ dialogHandler: dialogHandler })
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
            let data: Record<string, any> = {};
            const totalPlans: PlanServerData[] = [];
            for (let i = 0; i < wb.SheetNames.length; i++) {
                const sheetName = wb.SheetNames[i];
                const ws = wb.Sheets[sheetName]
                const wb_as_json: any[] = XLSX.utils.sheet_to_json(ws);
                if (sheetName === "Plan Index") {
                    totalPlans.push(...wb_as_json.map((row, i) => {
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
                            planDetails: {}
                        };
                    }));
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
                totalPlans.forEach((plan) => {
                    if (plan.planCode === sheetName) {
                        plan.planDetails = data[sheetName]
                    }
                })
            }
            setPayloadPlanData({
                rows: totalPlans,
                totalDataCount: totalPlans.length
            })
        }
    }

    return (
        <>
            <DashboardPageTemplate id={"expense-report-dashboard-page"}>
                <h5>Plan List</h5>
                <DisplayTableItems
                    data={payloadPlanData}
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
                <GenericDialog
                    open={dialog.open}
                    title={dialog?.data?.planCode || ''}
                    maxWidth="md"
                    content={<>
                        <Grid container>
                            <Grid item xs={3} sx={{ overflowY: "scroll", maxHeight: "calc(50vh)" }}>
                                {
                                    Object.keys(dialog?.data?.planDetails || {}).map((key: string) => (
                                        <MenuItem className={investmentAmount === key ? "Mui-selected" : ""} onClick={() => { setInvestmentAmount(key) }}>
                                            {formatNumber(Number(key))}₹
                                        </MenuItem>
                                    ))
                                }
                            </Grid>
                            <Grid item xs={9}>
                                <TableContainer style={{ maxHeight: 'calc(50vh)' }}>
                                    <Table aria-label="simple table" stickyHeader>
                                        <TableBody>
                                            {
                                                dialog?.data?.planDetails[investmentAmount].map((key: any, i) => {
                                                    return <TableRow>
                                                        <TableCell>{i === 0 ? key[0] : `${formatNumber(Number(key[0] || 0))}₹`}</TableCell>
                                                        <TableCell>{i === 0 ? key[1] : `${formatNumber(Number(key[1] || 0))}₹`}</TableCell>
                                                        <TableCell>{i === 0 ? key[2] : `${formatNumber(Number(key[2] || 0))}₹`}</TableCell>
                                                    </TableRow>
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                    </>}
                    onSubmit={() => { dialogHandler() }}
                    onSubmitText="Ok"
                />
            </DashboardPageTemplate>
        </>
    )
}