import { Grid, TextField } from "@mui/material"
import { UserProfileKycOptions } from "../molecules"

export const UserUploadDocuments = () => {
    return <>
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <TextField
                    required
                    fullWidth
                    id="aadhar-card"
                    label="Aadhar Card"
                    type="file"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    required
                    fullWidth
                    id="pan-card"
                    label="Pan Card"
                    type="file"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    required
                    fullWidth
                    id="account-statement"
                    label="Bank Statement"
                    type="file"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    required
                    fullWidth
                    id="signature"
                    label="Signature"
                    type="file"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
        </Grid>
    </>
}