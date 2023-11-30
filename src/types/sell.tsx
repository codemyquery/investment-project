export interface SellServerData {
    id: string
    customerName: string,
    planName: string,
    planAmount: string,
    purchaseStatus: string,
    orderDate: string
}

export interface SellFormDataAdmin {
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
    planId: string,
    purchaseAmount: number,
    customerId: string,
    purchaseStatus: "YES" | "NO"
}