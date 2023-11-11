export interface EmployeeFormData {
    id:string,
    employeeName:string,
    employeeCode: string,
    mobile:string,
    email:string,
    designation:string
}

export interface EmployeeServerData {
    id:string,
    name:string,
    employeeCode: string,
    email:string,
    mobile:string,
    designation:string,
    dateUpdated: Date,
    rawData: EmployeeServerData
}

export interface EmployeeDataResponse {
    count: number,
    rows: Array<EmployeeServerData>
}