import { Grid } from "@mui/material"
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
                helperText={(()=> {
                    if(errors.pancardNumber?.type === "required"){
                        return t.required;
                    }else if(errors.pancardNumber?.type === "maxLength"){
                        return "Invalid PANCARD length";
                    }
                    return "";
                })()}
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
                error={errors.aadharCardNumber}
                helperText={(()=> {
                    if(errors.aadharCardNumber?.type === "required"){
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
                label="Date Of Birth"
                name="dob"
                error={errors.dob}
                helperText={(()=> {
                    if(errors.dob?.type === "required"){
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
                label="Address"
                name="address"
                error={errors.address}
                helperText={(()=> {
                    if(errors.address?.type === "required"){
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