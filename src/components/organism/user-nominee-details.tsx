import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { ControlText } from "../molecules"
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
                />
            </Grid>
            <Grid item xs={6}>
                <ControlText
                    control={control}
                    label="Nominee Relation"
                    name="nomineerelation"
                    helperText=""
                />
            </Grid>
            <Grid item xs={6}>
                <ControlText
                    control={control}
                    label="Nominee DOB"
                    name="nomineeDob"
                    helperText=""
                />
            </Grid>
            <Grid item xs={6}>
                <ControlText
                    control={control}
                    label="Nominee Address"
                    name="nomineeAddress"
                    helperText=""
                />
            </Grid>
    </>
}