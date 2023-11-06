import { Grid, TextField } from "@mui/material"

export const UserPersonalDetails = () => {
    return <>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    value={'Ashutosh Singh'}
                    disabled
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    required
                    fullWidth
                    id="pan-card"
                    label="Pan Card"
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    required
                    fullWidth
                    id="aadhar-card"
                    label="Aadhar Card"
                    type="number"
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    value={'ashutoshsingh5192344@gmial.com'}
                    disabled
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    required
                    fullWidth
                    id="customerMobile"
                    label="Mobile"
                    value={'9794978416'}
                    disabled
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    required
                    fullWidth
                    id="dateOfBirth"
                    label="Date of Birth"
                    placeholder="DD-MM-YYYY"
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    required
                    fullWidth
                    id="address"
                    label="Address"
                />
            </Grid>
        </Grid>
    </>
}