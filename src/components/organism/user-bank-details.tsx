import { Grid, TextField } from "@mui/material"
import { ControlNumber, ControlText } from "../molecules"
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
                    rules={{
                        required: true
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <ControlText
                    control={control}
                    label="IFSC Code"
                    name="ifsc"
                    helperText=""
                    rules={{
                        required: true
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <ControlNumber
                    control={control}
                    label="Bank Acc No."
                    name="bankAccNo"
                    helperText=""
                    rules={{
                        required: true
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <ControlNumber
                    control={control}
                    label="Confirm Bank Acc No."
                    name="confBankAccNo"
                    helperText=""
                    rules={{
                        required: true
                    }}
                />
            </Grid>
    </>
}