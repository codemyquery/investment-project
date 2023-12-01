import { Grid, TextField } from "@mui/material"
import { ControlText, ControlNumber, ControlDate } from "../molecules"
import { Control, FieldErrors, useFormState } from "react-hook-form"
import { UserKYCFormData } from "../../types"
import { t } from "../../utils"
import { useState } from "react"

interface UserPersonalDetailsProps {
    control: Control<UserKYCFormData, any>
    errors: FieldErrors<UserKYCFormData>
}
export const UserPersonalDetails = ({
    control,
    errors
}: UserPersonalDetailsProps) => {
    const [isPanError,setIsPanError] = useState(false)
    return <>
        <Grid item xs={12}>
            <ControlText
                control={control}
                label="Name"
                name="name"
                helperText=""
                isDisabled={true}
            />
        </Grid>
        <Grid item xs={6}>
            <ControlText
                control={control}
                label="Email"
                name="email"
                helperText=""
                isDisabled={true}
            />
        </Grid>
        <Grid item xs={6}>
            <ControlNumber
                control={control}
                label="Mobile"
                name="mobile"
                helperText=""
                isDisabled={true}
            />
        </Grid>
        <Grid item xs={6}>
            <ControlText
                control={control}
                label="Pan Card No"
                name="pancardNumber"
                error={errors.pancardNumber}
                helperText={isPanError ? t.maxLength : ""}
                rules={{
                    required: true,
                    maxLength: 10
                }}
            />
        </Grid>
        <Grid item xs={6}>
            <ControlNumber
                control={control}
                label="Aadhar Card No"
                name="aadharCardNumber"
                helperText=""
                rules={{
                    required: true
                }}
            />
        </Grid>
        <Grid item xs={6}>
            <ControlDate
                control={control}
                label="Date Of Birth"
                name="dob"
                helperText=""
                rules={{
                    required: true
                }}
            />
        </Grid>
        <Grid item xs={6}>
            <ControlText
                control={control}
                label="Address"
                name="address"
                helperText=""
                rules={{
                    required: true
                }}
            />
        </Grid>
    </>
}