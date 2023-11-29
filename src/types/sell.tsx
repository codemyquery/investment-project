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
    
    customer_id : string,
    plan_id : string ,
    customer_purchase_status : string ,
    purchase_amount : string ,
    purchase_plan_details : string ,
    updated_on : string 
    
}