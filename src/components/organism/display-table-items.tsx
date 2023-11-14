import styled from "@emotion/styled";
import { Radio, Tooltip, IconButton, Button, Box, Alert, Grid, FormControl } from "@mui/material";
import { DataGrid, GridColumnVisibilityModel, GridEnrichedColDef, GridFeatureMode, GridOverlay, GridRenderCellParams, GridRowId, GridSelectionModel, GridSortDirection, GridSortModel, GridToolbar, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarFilterButton, getGridStringOperators } from "@mui/x-data-grid";
import { useState, useRef, useEffect } from "react";
import { DisplayTableColumnControllerProps, DisplayTableColumnControllerHandler, DisplayTableColumnDefinition, DisplayTablePayload, DisplayTablePaginationController, DisplayTableAction, Row } from "../../types";
import { GotoPageNo } from "../atoms/goto-page-no";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { ButtonAddIcon, ButtonDeleteIcon, ButtonEditIcon, ButtonViewIcon, SkeletonLoader } from "../atoms";
import Stack from '@mui/material/Stack';
import formatDistanceToNow from "date-fns/formatDistanceToNow";
interface DefaultOrder {
    order: GridSortDirection,
    orderBy: string
}

export const useDisplayTableColumnController = <T extends object>({
    columns
}: DisplayTableColumnControllerProps): DisplayTableColumnControllerHandler<T> => {
    const [selectedRows, setSelectedRows] = useState<Array<Row<{ id: any }, T>>>([]);
    const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);
    const selectedRadioButton = useRef<GridRowId>("");
    const [rawColumns, setRawColumns] = useState<Array<DisplayTableColumnDefinition>>(columns);
    const [columnDefinition, setColumnDefinition] = useState<GridEnrichedColDef[]>([]);
    const [columnVisibilityModel, setColumnVisibilityModel] = useState<GridColumnVisibilityModel>({});    
    const [checkboxSelectionStatus, setCheckboxSelectionStatus] = useState(false);
    useEffect(() => {
        selectedRadioButton.current = selectionModel?.length ? selectionModel[0] : "";
    }, [selectionModel]);

    const computeFieldValue = (cellParams: GridRenderCellParams<string>, columnDef: DisplayTableColumnDefinition) => {
        const field = columnDef.field;
        if (!field.includes(".")) {
            return cellParams.row[field];
        }
        else {
            let currentVal = cellParams.row;
            const fieldPathArray = field.split(".");
            for (const pathElem of fieldPathArray) {
                currentVal = currentVal[pathElem];
            }
            return currentVal;
        }
    };

    const isRowSelected = function (rowID: GridRowId) {
        return selectedRadioButton.current === rowID;
    };

    useEffect(() => {
        const ColumnDef: GridEnrichedColDef[] = [];
        let VisibilityModel: GridColumnVisibilityModel = {};
        rawColumns.forEach((column, index) => {
            if(!column.exclude){
            switch (column.type) {
                case "checkbox":
                    setCheckboxSelectionStatus(true);
                    break;
                case "radiobutton":
                    ColumnDef.push({
                        field: 'Single-Selection',
                        headerName: ' ',
                        description: '',
                        filterable: false,
                        sortable: false,
                        hideable: false,
                        align: column.cellAlignment,
                        headerAlign: column.headerAlign,
                        renderCell: (params: GridRenderCellParams<string>) => {
                            const mainRadioButton = <Radio
                                data-testid={`row-radiobox-${index}`}
                                name={`row-radiobox`}
                                disabled={params.row.status?.disabled}
                                checked={isRowSelected(params.row.id)}
                                value={params.row.id}
                                onChange={() => {
                                    setSelectionModel([params.row.id]);
                                }}
                            />
                            if (params.row.status?.disabled && params.row.status?.reason) {
                                return <Tooltip title={params.row.status?.reason}>
                                    <span>
                                        {mainRadioButton}
                                    </span>
                                </Tooltip>
                            }
                            else {
                                return mainRadioButton
                            }
                        },
                        renderHeader: () => { return <></> },
                        ...column.otherProps
                    });
                    break;
                case "text":
                    ColumnDef.push({
                        field: column.field,
                        headerName: column.headerName,
                        description: column.headerName,
                        sortable: !!column.sortable,
                        filterable: !!column.filterable,
                        hideable: !column.hidable,
                        align: column.cellAlignment,
                        headerAlign: column.headerAlign,
                        flex: 1,
                        type: 'string',
                        renderCell: (params: GridRenderCellParams<string>) => {
                            const tooltip = (column.tooltip === false) ? false : true;
                            const value: string = computeFieldValue(params, column);
                            return tooltip
                                ? <Tooltip title={<>{column.iconPosition === 'left' ? <>{value && column.icon}{value}</> : <>{value}{value && column.icon}</>}</>}>
                                    <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                        {column.iconPosition === 'left' ? <>{value && column.icon}{value}</> : <>{value}{value && column.icon}</>}
                                    </div>
                                </Tooltip> : <div style={{ wordBreak: 'break-word' }}>{column.iconPosition === 'left' ? <>{value && column.icon}{value}</> : <>{value}{value && column.icon}</>}</div>
                        },
                        ...column.otherProps
                    });
                    VisibilityModel = { ...VisibilityModel, ...{ [column.field]: !column.hidden } }
                    break;
                case "select":
                    ColumnDef.push({
                        field: column.field,
                        headerName: column.headerName,
                        description: column.headerName,
                        sortable: !!column.sortable,
                        filterable: !!column.filterable,
                        hideable: !column.hidable,
                        align: column.cellAlignment,
                        headerAlign: column.headerAlign,
                        flex: 1,
                        type: 'singleSelect',
                        valueOptions: column.options,
                        editable: true,
                        renderCell: (params: GridRenderCellParams<string>) => {
                            return <Tooltip title={computeFieldValue(params, column)}>
                                <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                    {computeFieldValue(params, column)}
                                </div>
                            </Tooltip>
                        },
                        ...column.otherProps
                    });
                    VisibilityModel = { ...VisibilityModel, ...{ [column.field]: !column.hidden } }
                    break;
                case "textArray":
                    ColumnDef.push({
                        field: column.field,
                        headerName: column.headerName,
                        description: column.headerName,
                        sortable: !!column.sortable,
                        filterable: !!column.filterable,
                        hideable: !column.hidable,
                        align: column.cellAlignment,
                        headerAlign: column.headerAlign,
                        flex: 1,
                        type: 'string',
                        renderCell: (params: GridRenderCellParams<string>) => {
                            const data = params.row.row[column.field] || [];
                            const displayData = data.length
                                ? data.length === 1
                                    ? data[0]
                                    : `(${data.length})`
                                : "";
                            const toolTipData: string = data.length ? data.join(", ") : "";
                            return <Tooltip title={toolTipData}>
                                <span>{displayData}</span>
                            </Tooltip>;
                        },
                        ...column.otherProps
                    });
                    VisibilityModel = { ...VisibilityModel, ...{ [column.field]: !column.hidden } }
                    break;
                case "date":
                    ColumnDef.push({
                        field: column.field,
                        headerName: column.headerName,
                        description: column.headerName,
                        sortable: !!column.sortable,
                        filterable: !!column.filterable,
                        align: column.cellAlignment,
                        headerAlign: column.headerAlign,
                        hideable: !column.hidable,
                        flex: 1,
                        type: 'date',
                        renderCell: (params: GridRenderCellParams) => {
                            const date = formatDistanceToNow(new Date(computeFieldValue(params, column)));
                            return <Tooltip title={date}>
                                <span>
                                    {date}
                                </span>
                            </Tooltip>
                        },
                        ...column.otherProps
                    });
                    VisibilityModel = { ...VisibilityModel, ...{ [column.field]: !column.hidden } }
                    break;
                case 'image':
                    ColumnDef.push({
                        field: column.field,
                        headerName: column.headerName,
                        description: column.headerName,
                        sortable: !!column.sortable,
                        align: column.cellAlignment,
                        headerAlign: column.headerAlign,
                        filterable: !!column.filterable,
                        hideable: !column.hidable,
                        flex: 1,
                        renderCell: (params) => {
                            return <img
                                width={column.imgWidth || 70}
                                height={column.imgHeight || 70}
                                alt={column.headerName || "image"}
                                src={computeFieldValue(params, column)}
                                style={{ margin: '10px' }}
                                onError={({ currentTarget }) => {
                                    currentTarget.src = column.imgPlaceHolder ? column.imgPlaceHolder : currentTarget.src;
                                }}
                            />
                        },
                        minWidth: (column.imgWidth || 70) + 30,
                        ...column.otherProps
                    });
                    VisibilityModel = { ...VisibilityModel, ...{ [column.field]: !column.hidden } }
                    break;
                case 'action':
                    ColumnDef.push({
                        field: column.field,
                        headerName: column.headerName,
                        description: column.headerName,
                        align: column.cellAlignment,
                        headerAlign: column.headerAlign,
                        sortable: !!column.sortable,
                        filterable: !!column.filterable,
                        hideable: !column.hidable,
                        flex: 1,
                        renderCell: (params: GridRenderCellParams) => {
                            return (column.actionsList || []).map((action, index) => {
                                switch (action.type) {
                                    case 'add':
                                        return <ButtonAddIcon key={index} title={`${action.type}-${params.id}`} onClick={() => { action.callback(params) }} testid={`${params.id}`} dataSet={{ disabled: action.isDisabled }} />
                                    case 'delete':
                                        return <ButtonDeleteIcon key={index} title={`${action.type}-${params.id}`} onClick={() => { action.callback(params) }} testid={`${params.id}`} dataSet={{ disabled: action.isDisabled }} />
                                    case 'edit':
                                        return <ButtonEditIcon key={index} title={`${action.type}-${params.id}`} onClick={() => { action.callback(params) }} testid={`${params.id}`} dataSet={{ disabled: action.isDisabled }} />
                                    case 'view':
                                        return <ButtonViewIcon key={index} title={`${action.type}-${params.id}`} onClick={() => { action.callback(params) }} testid={`${params.id}`} dataSet={{ disabled: action.isDisabled }} />
                                    case 'custom':
                                        return <IconButton key={index} size="small" aria-label={`${action.type}-${params.id}`} onClick={() => { action.callback(params) }} data-testid={`${action.type}-${params.id}`} disabled={action.isDisabled} sx={action.getStyleCallback && action.getStyleCallback(params)} color="primary">{action.icons}</IconButton>
                                    default:
                                        return <></>;
                                }
                            });
                        },
                        ...column.otherProps
                    });
                    break;
                case "custom":
                    ColumnDef.push({
                        field: column.field,
                        headerName: column.headerName,
                        description: column.headerName,
                        align: column.cellAlignment,
                        headerAlign: column.headerAlign,
                        sortable: !!column.sortable,
                        filterable: !!column.filterable,
                        hideable: !column.hidable,
                        flex: 1,
                        renderCell: column.renderCustom ? column.renderCustom : () => { return <></> },
                        ...column.otherProps
                    });
                    VisibilityModel = { ...VisibilityModel, ...{ [column.field]: !column.hidden } }
                    break;
            }
        }
        });
        setColumnVisibilityModel(VisibilityModel);
        setColumnDefinition(ColumnDef);
    }, [rawColumns]);

    return {
        rawColumns,
        selectedRows,
        setRawColumns,
        selectionModel,
        setSelectedRows,
        columnDefinition,
        setSelectionModel,
        setColumnDefinition,
        columnVisibilityModel,
        checkboxSelectionStatus,
        setColumnVisibilityModel,
    }
}

export interface DisplayTableItemsProps<T> {
    data: DisplayTablePayload<T>,
    loader?: boolean,
    tableId: string
    otherProps?: any,
    filterMode?: GridFeatureMode,
    actionsLeft?: DisplayTableAction[],
    sortingMode?: GridFeatureMode,
    actionsRight?: DisplayTableAction[],
    noRowsMessage?: string,
    paginationMode?: GridFeatureMode,
    useCustomFooter?: boolean,
    rowsPerPageOptions?: number[],
    columnControllerHandler: DisplayTableColumnControllerHandler<T>,
    selectionPageController: DisplayTablePaginationController,
}

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    border: 0,
    '& .row-selected': {
        backgroundColor: 'rgb(202, 202, 202)',
        '&:hover': {
            backgroundColor: 'rgb(202, 202, 202)',
        }
    },
    '& .row-disabled': {
        backgroundColor: 'rgb(202, 202, 202)',
        '&:hover': {
            backgroundColor: 'rgb(202, 202, 202)',
        }
    }
}));

interface UseDisplayTablePageControllerProps {
    defaultOrder?: DefaultOrder,
    itemsPerPageDefault?: number,
    pageDefault?: number
}
export const useDisplayTablePageController = ({
    // Maybe create one state object and create sub dispatch function
    defaultOrder,
    itemsPerPageDefault = 10,
    pageDefault = 0
}: UseDisplayTablePageControllerProps): DisplayTablePaginationController => {
    const sortOrder = defaultOrder ? defaultOrder.order : "desc";
    const sortField = defaultOrder ? defaultOrder.orderBy : "dateUpdated";

    const [page, setPage] = useState<number>(pageDefault);
    const [itemsPerPage, setItemsPerPage] = useState<number>(itemsPerPageDefault);
    const [order, setOrder] = useState<GridSortDirection>(sortOrder);
    const [orderBy, setOrderBy] = useState<string>(sortField);
    const [possiblePage, setPossiblePage] = useState(0);

    //new state to preserve datadrid's sort model from rerenders
    const [sortModel, setSortModel] = useState<GridSortModel>([{
        sort: sortOrder,
        field: sortField,
    }])

    const handleRequestSort = (
        sortModels: GridSortModel
    ) => {
        const sortModel = sortModels[0];
        if (sortModel) {
            setOrder(sortModel.sort);
            setOrderBy(sortModel.field);
        }
        setSortModel(sortModels);
    };

    return {
        page,
        setPage,
        itemsPerPage,
        setItemsPerPage,
        order,
        orderBy,
        sortModel,
        setSortModel,
        handleRequestSort,
        possiblePage,
        setPossiblePage
    };
};

export const DisplayTableItems = <T extends object>({
    data,
    loader = false,
    tableId,
    otherProps,
    filterMode = "server",
    sortingMode = "server",
    actionsLeft,
    actionsRight,
    noRowsMessage = "No records..",
    paginationMode = "server",
    useCustomFooter = true,
    rowsPerPageOptions = [5, 10, 50, 100],
    columnControllerHandler,
    selectionPageController,
}: DisplayTableItemsProps<T>) => {
    const handleChangeItemsPerPage = (value: any) => {
        selectionPageController.setItemsPerPage(parseInt(value, 10));
        selectionPageController.setPage(0);
    };
    const onPageChange = (newPage: number) => {
        selectionPageController.setPage(newPage);
    }
    const fromPageNo = (selectionPageController.itemsPerPage * (selectionPageController.page + 1) - selectionPageController.itemsPerPage) + 1;

    const createActionSet = (actionSet?: DisplayTableAction[]) => {
        // eslint-disable-next-line array-callback-return
        return actionSet?.map((action, index) => {
            switch (action.type) {
                case 'column':
                    return <>Column</>
                case 'customBasicAction':
                    return <Button
                        key={index}
                        id={`basic-action-${index}`}
                        data-testid={`${tableId}-basic-action-${index}`}
                        variant="text"
                        color={action.color}
                        size="small"
                        startIcon={action.icon}
                        onClick={(event: any) => {
                            action.onClick();
                        }}
                        disabled={action.disabled}
                        {...action.otherProps}>
                        {action.title}
                    </Button>
                case 'customSelectionAction':
                    return <Button
                        key={index}
                        id={`custom-selection-action-${index}`}
                        data-testid={`${tableId}-custom-selection-action-${index}`}
                        variant="text"
                        disabled={columnControllerHandler.selectionModel.length === 0}
                        color={action.color}
                        size="small"
                        startIcon={action.icon}
                        onClick={action.onClick.bind(this, columnControllerHandler.selectedRows)}
                        {...action.otherProps}>
                        {action.title}
                    </Button>
                case 'filter':
                    return <GridToolbarFilterButton key={index} data-testid={`${tableId}-filter-button`} />
                case 'custom':
                    return action.action;
            }
        })
    }

    return <div id={tableId} data-testid={`${tableId}-datagrid-table`} style={{ height: '100%' }}>
        <div>
            <StyledDataGrid
                checkboxSelection={columnControllerHandler.checkboxSelectionStatus}
                sx={{
                    border: 0,
                    minHeight: loader ? `${selectionPageController.itemsPerPage * 40}px` : 'auto',
                    height: '100%'
                }}
                columns={columnControllerHandler.columnDefinition}
                columnVisibilityModel={columnControllerHandler.columnVisibilityModel}
                onColumnVisibilityModelChange={(newModel) => columnControllerHandler.setColumnVisibilityModel(newModel)}
                rows={loader ? [] : data.rows}
                keepNonExistentRowsSelected
                autoHeight={true}
                selectionModel={columnControllerHandler.selectionModel}
                onSelectionModelChange={(ids: GridSelectionModel) => {
                    const selectedIDs = new Set(ids);
                    const selectedRows = data.rows.filter((row) =>
                        selectedIDs.has(row?.id)
                    );
                    const totalSelectedRows: Array<Row<{ id: any }, T>> = [];
                    const totalSelectedIds: string[] = [];
                    const previousAndCurrentRows = [...columnControllerHandler.selectedRows, ...selectedRows];
                    previousAndCurrentRows.forEach(row => {
                        if (totalSelectedIds.indexOf(row.id) < 0 && ids.indexOf(row.id) > -1) {
                            totalSelectedRows.push(row);
                            totalSelectedIds.push(row.id);
                        }
                    });
                    columnControllerHandler.setSelectedRows(totalSelectedRows);
                    columnControllerHandler.setSelectionModel(ids);
                    columnControllerHandler.setSelectionModel(ids);
                }}
                sortingMode={sortingMode}
                sortingOrder={["desc", "asc"]}
                sortModel={selectionPageController.sortModel}
                onSortModelChange={selectionPageController.handleRequestSort}
                paginationMode={paginationMode}
                filterMode={filterMode}
                pagination
                rowsPerPageOptions={rowsPerPageOptions}
                rowCount={loader ? 0 : data.totalDataCount}
                page={selectionPageController.page}
                pageSize={selectionPageController.itemsPerPage}
                onPageChange={onPageChange}
                onPageSizeChange={handleChangeItemsPerPage}
                disableSelectionOnClick={true}
                loading={loader}
                getRowClassName={(params) => {
                    return params.row.style ? params.row.style : params.row?.disabled ? 'row-disabled' : '' ;
                }}
                isRowSelectable={(params) => {
                    return !params.row?.disabled;
                }}
                components={{
                    LoadingOverlay: () => (<SkeletonLoader rowCount={selectionPageController.itemsPerPage} height='30px' />),
                    Toolbar: () => (
                        <GridToolbarContainer>
                            <GridToolbarColumnsButton />
                            <GridToolbarFilterButton />
                            {
                                createActionSet(actionsLeft)
                            }
                            {
                                <Box display="flex" justifyContent="end" textAlign={"right"} flexGrow="100">
                                    {createActionSet(actionsRight)}
                                </Box>
                            }
                        </GridToolbarContainer>

                    ),
                    NoRowsOverlay: () => (
                        <>
                            {
                                !loader &&
                                <GridOverlay>
                                    <Alert sx={{ m: 4, width: "100%" }} severity="info">
                                        {noRowsMessage}
                                    </Alert>
                                </GridOverlay>
                            }
                        </>
                    ),
                    NoResultsOverlay: () => (
                        <>
                            {
                                !loader &&
                                <GridOverlay>
                                    <Alert sx={{ m: 4, width: "100%" }} severity="info">
                                        {noRowsMessage}
                                    </Alert>
                                </GridOverlay>
                            }
                        </>
                    )
                }}
                disableColumnMenu={true}
                hideFooter={true}
                getRowHeight={() => 50}
                {...otherProps}
            />

        </div>
        <div style={{ marginTop: '20px' }}>
            {
                useCustomFooter && !loader && data.totalDataCount > 0 &&
                <Grid container flexGrow={1}>
                    <Grid item sm={3}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            p: 1,
                            m: 1,
                            borderRadius: 1,
                            alignItems: 'center',
                            whiteSpace: 'nowrap'
                        }}>
                            {columnControllerHandler.selectionModel.length > 0 && `${columnControllerHandler.selectionModel.length} rows selected`}
                        </Box>
                    </Grid>
                    <Grid item sm={9}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            p: 1,
                            m: 1,
                            borderRadius: 1,
                            alignItems: 'center',
                            whiteSpace: 'nowrap'
                        }}>
                            <Stack direction="row" spacing={2}>
                                <div>Rows per page:</div>
                                <div>
                                    <FormControl size="small">
                                        <select
                                            id="select-per-page-option"
                                            value={selectionPageController.itemsPerPage}
                                            onChange={(e: any) => {
                                                handleChangeItemsPerPage(e.target.value);
                                            }}
                                            style={{ width: '60px', padding: '3px', borderRadius: '4px', height: '2.1rem', border: '1px solid #c0bebe', textAlign: 'center' }}
                                        >
                                            {
                                                rowsPerPageOptions.map((option, index) => {
                                                    return <option key={index} value={option}>{option}</option>
                                                })
                                            }
                                        </select>
                                    </FormControl>
                                </div>
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    {
                                        paginationMode === 'server' && `${fromPageNo}-${fromPageNo + (data.rows.length - 1)} of ${data.totalDataCount}`
                                    }
                                    {
                                        paginationMode === 'client' && `${fromPageNo}-${data.totalDataCount - (fromPageNo - 1) > selectionPageController.itemsPerPage ? (fromPageNo + selectionPageController.itemsPerPage - 1) : data.totalDataCount} of ${data.totalDataCount}`
                                    }
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                                <div>
                                    <IconButton size="small" data-testid="navigate-first-page" disabled={selectionPageController.page === 0} onClick={() => { selectionPageController.setPage(0); }}>
                                        <KeyboardDoubleArrowLeftIcon style={{ color: selectionPageController.page === 0 ? '#999997' : 'black', fontSize: '17px' }} />
                                    </IconButton>
                                    <IconButton size="small" data-testid="navigate-previous-page" disabled={selectionPageController.page === 0} onClick={() => { selectionPageController.setPage(page => page - 1); }}>
                                        <KeyboardArrowLeftIcon style={{ color: selectionPageController.page === 0 ? '#999997' : 'black', fontSize: '17px' }} />
                                    </IconButton>
                                    <GotoPageNo
                                        paginationController={selectionPageController}
                                        data={data}
                                    />
                                    <IconButton size="small" data-testid="navigate-next-page" disabled={(selectionPageController.page + 1) === selectionPageController.possiblePage} onClick={() => { selectionPageController.setPage(page => page + 1); }}>
                                        <KeyboardArrowRightIcon style={{ color: (selectionPageController.page + 1) === selectionPageController.possiblePage ? '#999997' : 'black', fontSize: '17px' }} />
                                    </IconButton>
                                    <IconButton data-testid="navigate-last-page" size="small" disabled={(selectionPageController.page + 1) === selectionPageController.possiblePage} onClick={() => { selectionPageController.setPage(selectionPageController.possiblePage - 1); }}>
                                        <KeyboardDoubleArrowRightIcon style={{ color: (selectionPageController.page + 1) === selectionPageController.possiblePage ? '#999997' : 'black', fontSize: '17px' }} />
                                    </IconButton>
                                </div>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            }
        </div>
    </div>
}