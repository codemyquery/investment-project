import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { ControlDate, ControlText } from "../molecules"
import { Control } from "react-hook-form"
import { UserKYCFormData } from "../../types"

interface UserNomineeDetailsProps {
    control: Control<UserKYCFormData, any>
}

export const UserNomineeDetails = ({
    control
}: UserNomineeDetailsProps) => {
    return <>
            <Grid item xs={6}>
                <ControlText
                    control={control}
                    label="Nominee Name"
                    name="nomineeName"
                    helperText=""
                    rules={{
                        required: true
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <ControlText
                    control={control}
                    label="Nominee Relation"
                    name="nomineerelation"
                    helperText=""
                    rules={{
                        required: true
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <ControlDate
                    control={control}
                    label="Nominee DOB"
                    name="nomineeDob"
                    helperText=""
                    rules={{
                        required: true
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <ControlText
                    control={control}
                    label="Nominee Address"
                    name="nomineeAddress"
                    helperText=""
                    rules={{
                        required: true
                    }}
                />
            </Grid>
    </>
}