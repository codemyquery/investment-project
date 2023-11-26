export interface UserServerData {
    id: string,
    name: string,
    email: string,
    mobile: string,
    kycStatus: string,
    dateUpdated: string
}

export interface UserKYCFormData {
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
    nomineeAddress:string,
    aadharCard: {
        back: File | null,
        front: File | null
    },
    panCard: File | null,
    signature: File | null,
    BankStatement: File | null
}


export interface UserKYCServerData {
        id : string,
        email : string,
        mobile : string,
        address : string,
        Adhaarno : string,
        Panno : string,
        Bank_Acc_no : string,
        Bank_name : string,
        Customer_dob : string,
        Bank_ifsc : string,
        Nominee_name : string,
        Nominee_relation : string,
        Nominee_dob : string,
        Nominee_address : string,
        Customer_name: string,
        confBankAccNo: string
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