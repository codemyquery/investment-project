import { Dispatch, SetStateAction } from "react";
import { GridColumnVisibilityModel, GridEnrichedColDef, GridRenderCellParams, GridSelectionModel, GridSortDirection, GridSortModel } from "@mui/x-data-grid";
import { SxProps, Theme } from "@mui/material";


export type DisplayTableSelectionMode = 'multiple' | 'single' | 'none';

//*****************************Data-Grid-Interfaces**********************************/
export interface DisplayTablePaginationController {
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
    itemsPerPage: number;
    setItemsPerPage: Dispatch<SetStateAction<number>>;
    order: GridSortDirection;
    setOrder?: Dispatch<SetStateAction<GridSortDirection>>;
    orderBy: any;
    setOrderBy?: Dispatch<SetStateAction<any>>;
    sortModel: GridSortModel;
    setSortModel: Dispatch<SetStateAction<GridSortModel>>;
    handleRequestSort: (sortModel: GridSortModel) => void;
    defaultOrder?: any;
    possiblePage: number;
    setPossiblePage: Dispatch<SetStateAction<number>>
}
interface GenericRowsProperties {
    id: any,
    disabled?: boolean
    style?: string
}
export interface DisplayTablePayload<T> {
    totalDataCount: number,
    rows: Array<Row<GenericRowsProperties, T>>
}

export type Row<GenericProperties, T> = {
    [Property in keyof T]: T[Property]
} & GenericProperties;

type cellTypes = 'select' | 'text' | 'image' | 'date' | 'textArray' | 'radiobutton' | 'checkbox' | 'action' | 'custom'
type alignments = 'center' | 'right' | 'left'
type actions = 'add' | 'view' | 'edit' | 'delete' | 'custom'

export interface DisplayTableRowActionDefinition {
    type: actions,
    callback: (params: GridRenderCellParams) => void;
    getStyleCallback?: (params: GridRenderCellParams) => SxProps<Theme>;
    icons?: React.ReactNode;
    isDisabled?: any
}

export interface DisplayTableColumnDefinition {
    field: string,
    headerName?: string
    type: cellTypes,
    imgWidth?: number, //  Will only be applicable if type is used as an image 
    imgHeight?: number, // Will only be applicable if type is used as an image
    imgPlaceHolder?: string,
    renderCustom?: (params: GridRenderCellParams<any, any, any>) => JSX.Element
    headerAlign?: alignments,
    cellAlignment?: alignments,
    actionsList?: DisplayTableRowActionDefinition[];
    sortable?: boolean,
    filterable?: boolean,
    hidable?: boolean,
    options?: any[],
    hidden?: boolean,
    otherProps?: any,
    tooltip?: boolean,
    icon?: React.ReactNode,
    iconPosition?: 'right' | 'left',
    exclude?: boolean
}

export interface DisplayTableColumnControllerProps {
    columns: DisplayTableColumnDefinition[],
}

export interface DisplayTableColumnControllerHandler<T> {
    checkboxSelectionStatus: boolean,
    columnDefinition: GridEnrichedColDef[],
    setColumnDefinition: Dispatch<SetStateAction<GridEnrichedColDef<any, any, any>[]>>,
    columnVisibilityModel: GridColumnVisibilityModel,
    setColumnVisibilityModel: Dispatch<SetStateAction<GridColumnVisibilityModel>>,
    selectedRows: Array<Row<{ id: any }, T>>,
    setSelectedRows: Dispatch<SetStateAction<Array<Row<{ id: any }, T>>>>,
    selectionModel: GridSelectionModel,
    setSelectionModel: Dispatch<SetStateAction<GridSelectionModel>>,
    rawColumns: DisplayTableColumnDefinition[],
    setRawColumns: Dispatch<React.SetStateAction<DisplayTableColumnDefinition[]>>
}

export type DisplayTableAction = DisplayTableBasicAction | DisplayTableSelectionAction | DisplayTableOtherActions | DisplayTableCustomAction;

type colors = "success" | "error" | "info" | "inherit" | "warning" | "primary" | "secondary";

export interface DisplayTableBasicAction {
    type: 'customBasicAction',
    icon: React.ReactNode,
    title: string,
    onClick: () => void,
    color?: colors,
    disabled?: boolean,
    otherProps?: any
}

export interface DisplayTableSelectionAction {
    type: 'customSelectionAction',
    icon: React.ReactNode,
    title: string,
    onClick: (selectedRows: any[]) => void,
    color?: colors,
    otherProps?: any
}

export interface DisplayTableCustomAction {
    type: 'custom',
    action: React.ReactNode,
}

export interface DisplayTableOtherActions {
    type: 'filter' | 'column'
}