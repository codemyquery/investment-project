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
    items: Record<string, any>
    label: string
    icons?: React.ReactNode
}

export const ExpandableList = ({
    items,
    label,
    icons
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
                    Object.keys(items).map((item, index) => {
                        return <ListItemButton key={`${label}-${item}-${index}`} sx={{ pl: 4 }}>
                            {
                                icons && 
                                <ListItemIcon>
                                    {icons}
                                </ListItemIcon>
                            }
                            <ListItemText primary={`${item} (${items[item]})`} />
                        </ListItemButton>
                    })
                }
            </List>
        </Collapse>
    </>
}