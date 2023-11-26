import { Grid, TextField } from "@mui/material"
import { ControlText, ControlNumber } from "../molecules"
import { Control } from "react-hook-form"
import { UserKYCFormData } from "../../types"

interface UserPersonalDetailsProps {
    control: Control<UserKYCFormData, any>
}
export const UserPersonalDetails = ({
    control
}: UserPersonalDetailsProps) => {
    return <>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <ControlText
                    control={control}
                    label="Name"
                    name="name"
                    helperText=""
                />
            </Grid>
            <Grid item xs={6}>
                <ControlText
                    control={control}
                    label="Pan Card No"
                    name="pancardNumber"
                    helperText=""
                />
            </Grid>
            <Grid item xs={6}>
                <ControlNumber
                    control={control}
                    label="Aadhar Card No"
                    name="aadharCardNumber"
                    helperText=""
                />
            </Grid>
            <Grid item xs={6}>
                <ControlText
                    control={control}
                    label="Email"
                    name="email"
                    helperText=""
                />
            </Grid>
            <Grid item xs={6}>
                <ControlText
                    control={control}
                    label="Mobile"
                    name="mobile"
                    helperText=""
                />
            </Grid>
            <Grid item xs={6}>
                <ControlText
                    control={control}
                    label="Date Of Birth"
                    name="dob"
                    helperText=""
                />
            </Grid>
            <Grid item xs={6}>
                <ControlText
                    control={control}
                    label="Address"
                    name="address"
                    helperText=""
                />
            </Grid>
        </Grid>
    </>
}