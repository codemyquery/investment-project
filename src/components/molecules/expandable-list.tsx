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
import { previousDay } from "date-fns/fp";
import { formatNumber } from "../../utils";

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
    let totalYearIncome = 0;
    Object.keys(items).forEach((monthName) => totalYearIncome+= items[monthName] )
    
    const handleClick = () => {
        setOpen(!open);
    };
    return <>
        <ListItemButton onClick={handleClick}>
            <ListItemText 
                primary={
                    <div>
                        <div style={{ display: 'inline-block'}}>{label}</div>
                        <div style={{ display: 'inline-block', paddingLeft:'50%',textAlignLast:'right'}}>Income {`₹ ${formatNumber(totalYearIncome, 0)}`}</div>
                    </div>
                } 
            />
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
                            <ListItemText 
                                primary={
                                    <div>
                                        <div style={{ display: 'inline-block', textAlign:'center'}}>{item}</div>
                                        <div style={{ display: 'inline-block',marginLeft:'50%'}}>{`(₹ ${formatNumber(items[item], 0)})`}</div>
                                    </div>
                                } 
                            />
                        </ListItemButton>
                    })
                }
            </List>
        </Collapse>
    </>
}