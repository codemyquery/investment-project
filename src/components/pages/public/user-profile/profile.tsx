import { Grid, Card, CardContent, TextField, Stack, Button } from "@mui/material"
import { UserBankDetails, UserNomineeDetails, UserPersonalDetails, UserUploadDocuments } from "../../../organism"
import { UserProfileKycOptions } from "../../../molecules"
import { useState } from "react"

export const Profile = () => {
    const [activeButton, setActiveButton] = useState<1 | 2 | 3 | 4>(1)
    const onClickHandler = (activeButton: 1 | 2 | 3 | 4) => {
        setActiveButton(activeButton)
    }

    return <Grid>
        <Grid item xs={12}>
            <Card elevation={4} sx={{ margin: '1%', padding: '1%' }}>
                <CardContent key={`card-content`}>
                    <UserProfileKycOptions activeButton={activeButton} onClickHandler={onClickHandler} />
                    {activeButton == 1 && <UserPersonalDetails />}
                    {activeButton == 2 && <><br /><UserBankDetails /></>}
                    {activeButton == 3 && <><br /><UserNomineeDetails /></>}
                    {activeButton == 4 && <><br /><UserUploadDocuments /></>}
                </CardContent>
            </Card>
        </Grid>
    </Grid>
}