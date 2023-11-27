import { Grid, TextField } from "@mui/material"
import { ControlText, UserProfileKycOptions } from "../molecules"
import { Control } from "react-hook-form"
import { UserKYCFormData } from "../../types"

interface UserBankDetailsProps {
    control: Control<UserKYCFormData, any>
}

export const UserBankDetails = ({
    control
}: UserBankDetailsProps) => {
    return <>
            <Grid item xs={6}>
                <ControlText
                    control={control}
                    label="Bank Name"
                    name="bankName"
                    helperText=""
                />
            </Grid>
            <Grid item xs={6}>
                <ControlText
                    control={control}
                    label="IFSC Code"
                    name="ifsc"
                    helperText=""
                />
            </Grid>
            <Grid item xs={6}>
                <ControlText
                    control={control}
                    label="Bank Acc No."
                    name="bankAccNo"
                    helperText=""
                />
            </Grid>
            <Grid item xs={6}>
                <ControlText
                    control={control}
                    label="Confirm Bank Acc No."
                    name="confBankAccNo"
                    helperText=""
                />
            </Grid>
    </>
}