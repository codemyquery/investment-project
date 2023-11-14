export interface CustomerServerData {
    id: string,
    name: string,
    email: string,
    mobile: string,
    kycStatus: string,
    dateUpdated: string
}

export interface CustomerDataResponse {
    count: number,
    rows: Array<CustomerServerData>
}