import { Grid, TextField } from "@mui/material"
import { ControlNumber, ControlText } from "../molecules"
import { Control, FieldErrors } from "react-hook-form"
import { UserKYCFormData } from "../../types"
import { t } from "../../utils/translation"

interface UserBankDetailsProps {
    control: Control<UserKYCFormData, any>
    errors: FieldErrors<UserKYCFormData>
}

export const UserBankDetails = ({
    control,
    errors
}: UserBankDetailsProps) => {
    return <>
            <Grid item xs={6}>
                <ControlText
                    control={control}
                    label="Bank Name"
                    name="bankName"
                    error={errors.bankName}
                    helperText={(()=> {
                        if(errors.bankName?.type === "required"){
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
                    label="IFSC Code"
                    name="ifsc"
                    error={errors.ifsc}
                    helperText={(()=> {
                        if(errors.ifsc?.type === "required"){
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
                <ControlNumber
                    control={control}
                    label="Bank Acc No."
                    name="bankAccNo"
                    error={errors.bankAccNo}
                    helperText={(()=> {
                        if(errors.bankAccNo?.type === "required"){
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
                <ControlNumber
                    control={control}
                    label="Confirm Bank Acc No."
                    name="confBankAccNo"
                    error={errors.confBankAccNo}
                    helperText={(()=> {
                        if(errors.confBankAccNo?.type === "required"){
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