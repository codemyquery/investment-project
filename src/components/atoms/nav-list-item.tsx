import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { SxProps, Theme } from '@mui/material/styles';
import { forwardRef, useMemo } from "react";
import { NavLink } from "react-router-dom";

interface IListItemsLink {
    icon?: JSX.Element;
    sx?: SxProps<Theme> | undefined;
    "data-testid"?: string;
    primary: string;
    to: string | any
}

export const NavListItem = (props: IListItemsLink) => {
    const { icon, primary, to, sx } = props;

    const renderLink = useMemo(() => {
        return forwardRef(({ children, className, ...rest }: any, ref: any) =>
            <NavLink
                className={({ isActive }) => (isActive ? `${className} Mui-selected` : className)}
                to={to}
                ref={ref}
                children={children}
                {...rest}
            />
        )
    }, [to]);
    
    return (
        <ListItem
            data-testid={props["data-testid"]}
            sx={sx}
            component={renderLink}
        >
            {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
            <ListItemText primary={primary} />
        </ListItem>
    )
}