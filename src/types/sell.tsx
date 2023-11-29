export interface SellServerData {
    id: string,
    planCode: string,
    insuranceCompany: string,
    planName: string,
    ageBand: string,
    incomeTermOptions: string,
    maturityValueOptions: string,
    incomeFrequency: string,
    ppt: string,
    planDetails: Record<string, Array<string>>,
    isNewRecord?: boolean
}

export interface SellDataResponse {
    count: number,
    rows: Array<SellServerData>
}

export interface SellFormData {
    plan_id : string ,
    purchase_amount : number
}