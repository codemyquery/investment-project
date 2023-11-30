import { PlanServerData } from "./plan"

export interface UserServerData {
    id: string,
    name: string,
    email: string,
    mobile: string,
    kycStatus: string,
    dateUpdated: string
}

export interface UserKYCFormData {
    id: string
    name: string,
    pancardNumber: string,
    aadharCardNumber: string,
    email: string,
    mobile: string,
    dob: string,
    address: string,
    bankName: string,
    ifsc: string,
    bankAccNo: string,
    confBankAccNo: string,
    nomineeName: string,
    nomineerelation: string,
    nomineeDob: string,
    nomineeAddress: string,
    aadharCard: {
        back: File | null,
        backUrl: string,
        front: File | null,
        frontUrl: string
    },
    panCard: File | null,
    panCardUrl: string,
    signature: File | null,
    signatureUrl: string,
    bankStatement: File | null
    bankStatementUrl: string
}


export interface UserKYCServerData {
    id: string,
    email: string,
    mobile: string,
    address: string,
    Adhaarno: string,
    AdhaarnoBackUrl: string,
    AdhaarnoFrontUrl: string,
    Panno: string,
    PannoUrl: string,
    Bank_Acc_no: string,
    Bank_Acc_no_url: string,
    Bank_name: string,
    Customer_dob: string,
    Bank_ifsc: string,
    Nominee_name: string,
    Nominee_relation: string,
    Nominee_dob: string,
    Nominee_address: string,
    Customer_name: string,
    confBankAccNo: string,
    SignatureUrl: string
}

export interface LoginFormData {
    username: string,
    password: string
}

export interface SignUpFormData {
    name: string,
    mobile: string,
    email: string,
    lgLcCode: string,
    password: string,
    confirmPassword: string,
    acceptedPromotionMails: number
}

export interface UserDataResponse {
    count: number,
    rows: Array<UserServerData>
}

export interface UserActivePlanServerData {
    customer_id: string,
    plan_id: string,
    customer_purchase_status: "YES" | "NO"
    planAmount: string,
    purchase_plan_details: PlanServerData,
    updated_on: Date,
    orderDate: Date
}