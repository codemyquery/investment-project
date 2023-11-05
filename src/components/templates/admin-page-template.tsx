import { AppBar, Box, CssBaseline, IconButton, Toolbar, Typography } from "@mui/material";
import { useAuth } from "../../providers";
import { NavigationMenu, Service } from "../../types"
import MenuIcon from '@mui/icons-material/Menu';
import {  PageContent } from "../atoms";
import { AppDrawer, AppRouting } from "../organism";
interface HomeProps {
    routingService: Service<NavigationMenu[]>;
}

export const AdminPageTemplate = ({
    routingService
}: HomeProps) => {
    const { openDrawer, changeDrawer } = useAuth();

    const handleDrawerOpenClose = () => {
        changeDrawer(!openDrawer);
    }

    return (
        <Box sx={{ display: 'flex', height: '100%' }}>
            <CssBaseline />
            <AppBar position="fixed" color="inherit" sx={{ zIndex: (theme: any) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpenClose}
                        edge='start'
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }} noWrap >
                        Admin Panel
                    </Typography>
                </Toolbar>
            </AppBar>
            <AppDrawer routingServices={routingService} />
            <PageContent>
                <Toolbar />
                <AppRouting routingService={routingService} />
            </PageContent>
        </Box>
    );
}