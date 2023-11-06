import { Divider, IconButton, List } from "@mui/material";
import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { NavigationMenu, Service, ServiceStatus } from "../../types";
import { NavListItem } from "../atoms";
import { constant } from "../../utils";
import { theme } from "../../styles";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useAuth } from "../../providers";

const openedMixin = (theme: Theme): CSSObject => ({
    width: constant.DRAWER_WIDTH,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: constant.DRAWER_WIDTH,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

const DrawerHeader = styled('div')(({ theme: any }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


interface AppDrawerProps {
    routingServices: Service<NavigationMenu[]>
}

interface NavListprops {
    routingServices: Service<NavigationMenu[]>
}
const NavList = ({
    routingServices
}: NavListprops) => {
    switch (routingServices.status) {
        case ServiceStatus.Init:
        case ServiceStatus.Loading:
            return <>Loading </>
        case ServiceStatus.Error:
            return <div>Error</div>
        case ServiceStatus.Loaded:
            return (
                <List component={'nav'} aria-labelledby="main-navbar">
                    {
                        routingServices.payload.map(({ id, Icon, i18nKey, to, visible }) => {
                            return visible && <NavListItem key={`${id}-link`} data-testid={`${id}-link`} icon={Icon ? <Icon /> : undefined} primary={i18nKey} to={to || "/error"} />
                        })
                    }
                </List>)
    }
}

export const AppDrawer = ({
    routingServices
}: AppDrawerProps) => {
    const { openDrawer, changeDrawer } = useAuth();
    const handleDrawerClose = () => {
        changeDrawer(!openDrawer)
    }
    return (
        <Drawer variant="permanent" open={openDrawer}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <NavList routingServices={routingServices} />
        </Drawer>
    )
}