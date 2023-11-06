import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { UserProfileKycOptions } from "../molecules"

export const UserNomineeDetails = () => {
    return <>
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <TextField
                    required
                    fullWidth
                    id="nominee-name"
                    label="Name"
                />
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Relation</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Relation"
                    >
                        <MenuItem value={'Mother'}>Mother</MenuItem>
                        <MenuItem value={'Father'}>Father</MenuItem>
                        <MenuItem value={'Brother'}>Brother</MenuItem>
                        <MenuItem value={'Wife'}>Wife</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    required
                    fullWidth
                    id="nominee-date-of-birth"
                    label="Date of Birth"
                    placeholder="DD-MM-YYYY"
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    required
                    fullWidth
                    id="nominee-address"
                    label="Address"
                />
            </Grid>
        </Grid>
    </>
}