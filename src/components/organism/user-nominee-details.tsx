import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { ControlDate, ControlText } from "../molecules"
import { Control, FieldErrors } from "react-hook-form"
import { UserKYCFormData } from "../../types"
import { t } from "../../utils"

interface UserNomineeDetailsProps {
    control: Control<UserKYCFormData, any>
    errors: FieldErrors<UserKYCFormData>
}

export const UserNomineeDetails = ({
    control,
    errors
}: UserNomineeDetailsProps) => {
    return <>
            <Grid item xs={6}>
                <ControlText
                    control={control}
                    label="Nominee Name"
                    name="nomineeName"
                    error={errors.nomineeName}
                    helperText={(()=> {
                        if(errors.nomineeName?.type === "required"){
                            return t.required;
                        }
                        return "";
                    })()}
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
                    error={errors.nomineerelation}
                    helperText={(()=> {
                        if(errors.nomineerelation?.type === "required"){
                            return t.required;
                        }
                        return "";
                    })()}
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
                    error={errors.nomineeDob}
                    helperText={(()=> {
                        if(errors.nomineeDob?.type === "required"){
                            return t.required;
                        }
                        return "";
                    })()}
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
                    error={errors.nomineeAddress}
                    helperText={(()=> {
                        if(errors.nomineeAddress?.type === "required"){
                            return t.required;
                        }
                        return "";
                    })()}
                    rules={{
                        required: true
                    }}
                />
            </Grid>
    </>
}