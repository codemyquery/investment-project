import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { DashboardPageTemplate } from "../../templates";
import { DefaultFormState, DisplayTablePayload, EmployeeFormData, FormState, PlanFormData, PlanServerData } from "../../../types";
import { useDisplayTablePageController, useDisplayTableColumnController, DisplayTableItems } from "../../organism/display-table-items";
import { BrowseFile } from "../../atoms";
import { Plan, useHookForm } from "../../../services";
import * as XLSX from "xlsx";
import { constant, formatNumber, request, t } from "../../../utils";
import { GridRenderCellParams, GridValueSetterParams } from "@mui/x-data-grid";
import { GenericDialog } from "../../organism";
import SaveIcon from '@mui/icons-material/Save';
import { Grid, MenuItem, TableContainer, Table, TableBody, TableRow, TableCell } from "@mui/material";
import { useFieldArray } from "react-hook-form";
import { Notifications } from "../../molecules/notification";
import DeleteIcon from '@mui/icons-material/Delete';

interface Dialog {
    data?: PlanServerData,
    open: boolean
}
const dialogDefaultValue: Dialog = {
    open: false,
}

interface ExcelPlanDetails {
    rows: Array<PlanFormData>
}

interface DeletePlanState {
    rows: any[]
    open: boolean
}

const deleteDefaultValue: DeletePlanState  = { rows: [],open: false }

export const DashboardPlanDetails = () => {
    const [dialog, setDialog] = useState(dialogDefaultValue);
    const [loader, setLoader] = useState(false);
    const [deletePlan, setDeletePlan] = useState<DeletePlanState>(deleteDefaultValue);
    const abortController = new AbortController();
    const [investmentAmount, setInvestmentAmount] = useState<string>('1000000');
    const [payloadPlanData, setPayloadPlanData] = useState<DisplayTablePayload<PlanServerData>>({ rows: [], totalDataCount: 0 });
    const [formState, setFormState] = useState<FormState>({ ...DefaultFormState });
    const { control, handleSubmit } = useHookForm<ExcelPlanDetails>({ defaultValues: { rows: [] } });
    const { fields, append, replace } = useFieldArray<ExcelPlanDetails>({
        control,
        name: "rows",
    });

    const dialogHandler = (params?: GridRenderCellParams<any, any, any>) => {
        if (params) {
            setDialog({ open: true, data: params.row })
        } else {
            setDialog(dialogDefaultValue)
        }
    }

    const onSerialOrderChange = async (params: GridValueSetterParams<any, any>) => {
        const response = await Plan.updatePlanSerialOrder(params.row.planCode, params.value)
        if(response.status){
            setFormState(prev => ({...prev, reload: new Date()}));
        }
        return { ...params.row, serialnumber: params.value}
    }

    const paginationController = useDisplayTablePageController({});
    const columnController = useDisplayTableColumnController<PlanServerData>({
        columns: Plan.useDisplayTablePlanHeaders({ 
            dialogHandler: dialogHandler,
            onSerialOrderChange: onSerialOrderChange
        })
    });

    const onBrowseFileHandler = async (evt: ChangeEvent<HTMLInputElement>) => {
        const file = evt.currentTarget?.files;
        if (file?.length) {
            await readExcel(file[0]);
        }
    }

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
            const response = await Plan.fetchPlanList(query, abortController);
            setPayloadPlanData({
                rows: response.rows.map(r => r),
                totalDataCount: response.count
            });
            setLoader(false);
        }
        init();
    }, [query, formState.reload]);

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
                            ppt: row['PPT (10,12)'] as number,
                            planDetails: {},
                            isNewRecord: true,
                            dateUpdated: new Date(),
                            serialnumber: 0
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
            append(totalPlans);
        }
    }

    const onSubmit = () => handleSubmit(onSavePlanHandler)();

    const onSavePlanHandler = async (data: ExcelPlanDetails) => {
        setFormState(prev => ({ ...prev, loading: true }));
        try {
            const response = await Plan.createPlanRecord(data.rows, abortController);
            setFormState(prev => {
                return {
                    ...prev,
                    notificationOpen: true,
                    formSubmitted: true,
                    ...(response.status ? { mode: 'edit' } : {}),
                    ...(response.status ? { notificationMessage: t.successMessage } : { notificationType: t.errorMessage }),
                    loading: false,
                    ...(response.status ? { notificationType: 'success' } : { notificationType: 'error' }),
                    reload: new Date()
                }
            });
        } catch (error) {
            setFormState(prev => {
                return {
                    ...prev,
                    notificationOpen: true,
                    formSubmitted: true,
                    mode: 'edit',
                    notificationMessage: t.errorMessage,
                    reload: new Date(),
                    loading: false,
                    notificationType: 'error'
                }
            })
        }
        replace([]);
    }

    const onDeletePlanHandler = async (planIds: any[]) => {
        setFormState(prev => ({ ...prev, loading: true }));
        try {
            const response = await Plan.deletePlans(planIds, abortController);
            setFormState(prev => {
                return {
                    ...prev,
                    notificationOpen: true,
                    formSubmitted: true,
                    ...(response.status ? { mode: 'edit' } : {}),
                    ...(response.status ? { notificationMessage: t.successMessage } : { notificationType: t.errorMessage }),
                    loading: false,
                    ...(response.status ? { notificationType: 'success' } : { notificationType: 'error' }),
                    reload: new Date()
                }
            });
            columnController.setSelectedRows([]);
            columnController.setSelectionModel([]);
        } catch (error) {
            setFormState(prev => {
                return {
                    ...prev,
                    notificationOpen: true,
                    formSubmitted: true,
                    mode: 'edit',
                    notificationMessage: t.errorMessage,
                    reload: new Date(),
                    loading: false,
                    notificationType: 'error'
                }
            })
        }
    }

    useEffect(() => {
        setPayloadPlanData({
            rows: fields,
            totalDataCount: fields.length
        })
    }, [fields]);
    
    return (
        <>
            <DashboardPageTemplate id={"expense-report-dashboard-page"}>
                <h5>Plan List</h5>
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
                                type: 'custom',
                                action: <BrowseFile key={'upload-excel-button'} id={'upload-button'} label="Upload File" onBrowseFileHandler={onBrowseFileHandler} />
                            },
                            {
                                type: 'customBasicAction',
                                icon: <SaveIcon />,
                                onClick: onSubmit,
                                title: 'Save',
                                otherProps: {
                                    style: {
                                        display: fields.some(r => r.isNewRecord) ? '' : 'none'
                                    }
                                }
                            },
                            {
                                type: 'column'
                            },
                            {
                                type: 'customSelectionAction',
                                icon: <DeleteIcon />,
                                onClick: (selectedRows: any[]) => {
                                    setDeletePlan({rows: selectedRows,  open: true})
                                },
                                title: t.delete
                            }
                        ]
                    }
                    otherProps={{
                        autoHeight: false,
                        style: {
                            height: '55vh'
                        },
                        editMode: "cell"
                    }}
                />
                <GenericDialog
                    open={deletePlan.open}
                    title={"Warning"}
                    content={<>Are you sure you want to delete <b>{deletePlan.rows.map(row=> row.id).join(',')}</b> ?<br />Please confirm?</>}
                    maxWidth='xs'
                    onClose={() => { setDeletePlan(deleteDefaultValue) }}
                    onCloseText={t.cancel}
                    onSubmit={async () => { 
                        await onDeletePlanHandler(deletePlan.rows.map(row => row.id));
                        setDeletePlan(deleteDefaultValue);
                    }}
                    onSubmitText={t.confirm}
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
                                                        <TableCell>{i === 0 ? 'Year' : i}</TableCell>
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
            <Notifications
                open={formState.notificationOpen}
                message={formState.notificationMessage}
                onClose={() => { setFormState(prev => { return { ...prev, notificationOpen: false, notificationType: 'error', notificationMessage: '' } }) }}
                severity={formState.notificationType}
            />
        </>
    )
}