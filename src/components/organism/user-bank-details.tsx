import { Grid, TextField } from "@mui/material"
import { UserProfileKycOptions } from "../molecules"

export const UserBankDetails = () => {
    return <>
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <TextField
                    required
                    fullWidth
                    id="bank-name"
                    label="Bank Name"
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    required
                    fullWidth
                    id="bank-ifsc-code"
                    label="IFSC Code"
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    required
                    fullWidth
                    id="bank-account-number"
                    label="Bank Account Number"
                    type="number"
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    required
                    fullWidth
                    id="confirm-bank-account-number"
                    label="Confirm Bank Account Number"
                    type="number"
                />
            </Grid>
        </Grid>
    </>
}