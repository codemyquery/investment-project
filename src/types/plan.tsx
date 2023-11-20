export interface PlanFormData {
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

export interface PlanServerData {
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

export interface PlanDataResponse {
    count: number,
    rows: Array<PlanServerData>
}

export enum Months {
    JANUARY ,
    FEBRUARY,
    MARCH,
    APRIL,
    MAY,
    JUNE,
    JULY,
    AUGUST,
    SEPTEMBER,
    OCTOBER,
    NOVEMBER ,
    DECEMBER
}

export enum MonthsName {
    JANUARY ,
    FEBRUARY ,
    MARCH ,
    APRIL ,
    MAY ,
    JUNE ,
    JULY ,
    AUGUST ,
    SEPTEMBER ,
    OCTOBER ,
    NOVEMBER ,
    DECEMBER ,
};