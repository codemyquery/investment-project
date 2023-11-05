import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { DashboardPageTemplate } from "../../templates";
import { Box, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button, Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export const PlanDetails = () => {
    return (
        <>
            <DashboardPageTemplate id={"expense-report-dashboard-page"}>
                <Box
                    sx={{
                        marginTop: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Typography component="h5" variant="h5">Plan Details</Typography>

                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <div>
                        <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="planName"
                                label="Plan Name"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="sumAssured"
                                label="Sum Assured"
                                autoFocus
                            />
                            <br />
                            <FormControl fullWidth>
                                
                                <div>
                                Premium Paying Term :   
                                <Checkbox  />10
                                <Checkbox  />20
                                <Checkbox  />30
                                </div>
                            </FormControl>
                            
                            <br />
                            <FormControl fullWidth>
                                
                                
                                <div>
                                Benefit Payout Frequency : 
                                <Checkbox  />Weekly
                                <Checkbox  />Monthly 
                                <Checkbox  />Yearly
                                </div>
                                
                            </FormControl>
                            <br /><br />
                            
                            
                            <TextField
                                margin="normal"
                                
                                fullWidth
                                id="totalPaidPremium"
                                label="Total Paid Premium "
                                name="totalPaidPremium"
                                
                                autoFocus
                            />
                        </div>
                        <TextField
                            margin="normal"
                            
                            fullWidth
                            name="totalBenefitTillMatuarity"
                            label="Total Benefit Till Matuarity"
                            
                            id="totalBenefitTillMatuarity"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            type="file"
                            fullWidth
                            name="PlanDocumentPdf"
                            InputLabelProps={{
                                shrink: true,
                              }}
                              label="Plan Pdf Doc"
                            id="PlanDocumentPdf"
                            
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>

            </DashboardPageTemplate>
        </>
    )
}