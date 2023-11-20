import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import {
    ListItemButton,
    ListItemText,
    Collapse,
    List,
    ListItemIcon
} from "@mui/material"
import { useState } from "react"

interface ExpandableListProps {
    label: any;
    list: Array<any>
}

export const ExpandableList = ({
    label,
    list
}: ExpandableListProps) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    return <>
        <ListItemButton onClick={handleClick}>
            <ListItemText primary={label} />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {
                    list.map(item => {
                        return <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <CurrencyRupeeIcon />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    })
                }
            </List>
        </Collapse>
    </>
}