export interface SellServerData {
    id: string
    customerName: string,
    planName: string,
    planAmount: string,
    purchaseStatus: string,
    orderDate: string
}

export interface SellDataResponse {
    count: number,
    rows: Array<SellServerData>
}

export interface SellFormData {
    plan_id: string,
    purchase_amount: number,
    customer_id: string
}