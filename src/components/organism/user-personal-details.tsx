import { Grid, TextField } from "@mui/material"
import { ControlText, ControlNumber, ControlDate } from "../molecules"
import { Control } from "react-hook-form"
import { UserKYCFormData } from "../../types"

interface UserPersonalDetailsProps {
    control: Control<UserKYCFormData, any>
}
export const UserPersonalDetails = ({
    control
}: UserPersonalDetailsProps) => {
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
                helperText=""
                rules={{
                    required: true
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