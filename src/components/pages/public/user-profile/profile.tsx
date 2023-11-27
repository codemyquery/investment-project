import { Grid, Card, CardContent, TextField, Stack, Button } from "@mui/material"
import { UserBankDetails, UserNomineeDetails, UserPersonalDetails, UserUploadDocuments } from "../../../organism"
import { UserProfileKycOptions } from "../../../molecules"
import { useEffect, useState } from "react"
import { Users, useHookForm } from "../../../../services"
import { DefaultFormState, FormModes, FormState, UserKYCFormData } from "../../../../types"
import { useAuth } from "../../../../providers"

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
        front: null,
        backUrl: "",
        frontUrl: ""
    },
    panCard: null,
    signature: null,
    bankStatement: null,
    panCardUrl: "",
    signatureUrl: "",
    bankStatementUrl: ""
}

export const Profile = () => {
    const { userInfo } = useAuth();
    const [activeButton, setActiveButton] = useState<1 | 2 | 3 | 4>(1)
    const [formState, setFormState] = useState<FormState>({ ...DefaultFormState });
    const onClickHandler = (activeButton: 1 | 2 | 3 | 4) => {
        setActiveButton(activeButton)
    }

    const {
        control,
        handleSubmit,
        formState: { errors, isDirty },
        setValue,
        reset,
        getValues
    } = useHookForm<UserKYCFormData>({ defaultValues })

    useEffect(() => {
        let mode: FormModes = 'init';
        const init = async () => {
            if (userInfo?.id) {
                mode = 'edit';
                const abortController = new AbortController();
                const data = await Users.fetchKycDetails(userInfo.id, abortController);
                reset({
                    id: userInfo.id,
                    name: data.Customer_name,
                    pancardNumber: data.Panno,
                    aadharCardNumber: data.Adhaarno,
                    email: data.email,
                    mobile: data.mobile,
                    dob: data.Customer_dob,
                    address: data.address,
                    bankName: data.Bank_name,
                    ifsc: data.Bank_ifsc,
                    bankAccNo: data.Bank_Acc_no,
                    confBankAccNo: data.confBankAccNo,
                    nomineeName: data.Nominee_name,
                    nomineerelation: data.Nominee_relation,
                    nomineeDob: data.Nominee_dob,
                    nomineeAddress: data.Nominee_address,
                    panCardUrl: data.PannoUrl,
                    signatureUrl: data.SignatureUrl,
                    bankStatementUrl: data.Bank_Acc_no_url,
                    aadharCard: {
                        backUrl: data.AdhaarnoBackUrl,
                        frontUrl: data.AdhaarnoFrontUrl
                    }
                })
            }
            setFormState(prev => ({
                ...prev,
                mode,
                loading: false,
                formSubmitted: false
            }))
        };
        init();
    }, [formState.reload]);

    return <Grid>
        <Grid item xs={12}>
            <Card elevation={4} sx={{ margin: '1%', padding: '1%' }}>
                <CardContent key={`card-content`}>
                    <UserProfileKycOptions activeButton={activeButton} onClickHandler={onClickHandler} />
                    <Grid container spacing={3}>
                        {activeButton == 1 && <UserPersonalDetails control={control} />}
                        {activeButton == 2 && <><br /><UserBankDetails control={control} /></>}
                        {activeButton == 3 && <><br /><UserNomineeDetails control={control} /></>}
                        {activeButton == 4 && <><br /><UserUploadDocuments setFormState={setFormState} control={control} getValues={getValues} setValue={setValue} /></>}
                    </Grid>
                    <br />
                    <Stack direction="row" spacing={2}>
                        <Button variant="outlined" color="success">Save and Next</Button>
                    </Stack>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
}