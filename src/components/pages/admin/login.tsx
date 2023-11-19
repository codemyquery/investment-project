import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAuth } from '../../../providers';
import { Admin, useHookForm } from '../../../services';
import { AdminLogin } from '../../../types';
import { ControlText } from '../../molecules';
import { BASE_URL } from '../../../utils';
import { ADMIN_SESSION_NAME } from '../../../utils/constants';
import { useNavigate } from 'react-router';

const defaultValues: AdminLogin = {
    password: 'Waves@125',
    username: 'ashutoshsingh5192344@gmail.com'
}

export const AdminLoginPage = () => {
    const defaultTheme = createTheme();
    const navigate = useNavigate();
    const { adminInfo } = useAuth();
    if(adminInfo){
        navigate('/admin/plan-details')
    }
    const {
        control,
        handleSubmit,
        formState: { }
    } = useHookForm<AdminLogin>({ defaultValues })
    
    const onSubmit = async (data: AdminLogin) => {
        try {
            const response = await Admin.signIn(data);
            if (response) {
                sessionStorage.setItem(ADMIN_SESSION_NAME, JSON.stringify(response));
                window.location.href = `${BASE_URL}/admin/plan-details`;
            }
        } catch (error) {

        }
    };

    const onLoginHandler = handleSubmit(onSubmit);

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h5" variant="h5">Sign in</Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <ControlText
                            control={control}
                            name={'username'}
                            helperText=""
                            label="Email/Username"
                            margin='normal'
                        />
                        <ControlText
                            control={control}
                            name={'password'}
                            helperText=""
                            label="Password"
                            margin='normal'
                            type='password'
                        />
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={onLoginHandler}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 8, mb: 4 }}>
                    Copyright ©
                    {' '}
                    <Link color="inherit" href="https://www.multisphere.in/">
                        Multisphere
                    </Link>
                    {' '}
                    {new Date().getFullYear()}
                    .
                </Typography>
            </Container>
        </ThemeProvider>
    );
}