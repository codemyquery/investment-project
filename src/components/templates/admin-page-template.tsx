import { AppBar, Avatar, Box, CssBaseline, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { useAuth } from "../../providers";
import { NavigationMenu, Service } from "../../types"
import MenuIcon from '@mui/icons-material/Menu';
import { PageContent } from "../atoms";
import { AppDrawer, AppRouting } from "../organism";
import { useEffect, useState } from "react";
interface HomeProps {
    routingService: Service<NavigationMenu[]>;
}
const settings = ['Logout'];
export const AdminPageTemplate = ({
    routingService
}: HomeProps) => {
    const { openDrawer, changeDrawer, userInfo } = useAuth();
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const handleDrawerOpenClose = () => {
        changeDrawer(!openDrawer);
    }
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

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
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Profile">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt={userInfo.userName} src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
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