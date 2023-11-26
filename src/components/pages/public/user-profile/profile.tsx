import { Grid, Card, CardContent, TextField, Stack, Button } from "@mui/material"
import { UserBankDetails, UserNomineeDetails, UserPersonalDetails, UserUploadDocuments } from "../../../organism"
import { UserProfileKycOptions } from "../../../molecules"
import { useState } from "react"
import { useHookForm } from "../../../../services"
import { UserKYCFormData } from "../../../../types"

const defaultValues: UserKYCFormData = {
    id: "",
    name: "",
    pancardNumber: "",
    aadharCardNumber: "",
    email: "",
    mobile: "",
    dob: "",
    address: "",
    bankName: "",
    ifsc: "",
    bankAccNo: "",
    confBankAccNo: "",
    nomineeName: "",
    nomineerelation: "",
    nomineeDob: "",
    nomineeAddress: "",
    aadharCard: {
        back: null,
        front: null
    },
    panCard: null,
    signature: null,
    BankStatement: null
}

export const Profile = () => {
    const [activeButton, setActiveButton] = useState<1 | 2 | 3 | 4>(1)
    const onClickHandler = (activeButton: 1 | 2 | 3 | 4) => {
        setActiveButton(activeButton)
    }

    const {
        control,
        handleSubmit,
        formState: { errors, isDirty },
        setValue,
        reset
    } = useHookForm<UserKYCFormData>({ defaultValues })

    return <Grid>
        <Grid item xs={12}>
            <Card elevation={4} sx={{ margin: '1%', padding: '1%' }}>
                <CardContent key={`card-content`}>
                    <UserProfileKycOptions activeButton={activeButton} onClickHandler={onClickHandler} />
                    {activeButton == 1 && <UserPersonalDetails control={control} />}
                    {activeButton == 2 && <><br /><UserBankDetails control={control} /></>}
                    {activeButton == 3 && <><br /><UserNomineeDetails control={control} /></>}
                    {activeButton == 4 && <><br /><UserUploadDocuments control={control} setValue={setValue} /></>}
                </CardContent>
            </Card>
        </Grid>
    </Grid>
}