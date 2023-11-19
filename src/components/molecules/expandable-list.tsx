import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { ListItemButton, ListItemText, Collapse, List, ListItemIcon } from "@mui/material"
import { useState } from "react"
import { Months, MonthsName } from "../../types"

interface ExpandableListProps {
    year: any,
    totalYear: number
}

const getExpectedMonths = (currentIndex: number, yearLabel: number, lastYear: number, currentYear: number,currentMonth: number) => {
    const MonthsToDisplay = [];
    const monthsArr = [
        MonthsName.JANUARY,
        MonthsName.FEBRUARY,
        MonthsName.MARCH,
        MonthsName.APRIL,
        MonthsName.MAY,
        MonthsName.JUNE,
        MonthsName.JULY,
        MonthsName.AUGUST,
        MonthsName.SEPTEMBER,
        MonthsName.OCTOBER,
        MonthsName.NOVEMBER,
        MonthsName.DECEMBER
    ]

    if(yearLabel > currentYear && currentIndex == 0 ){
        for (let i = 1; i <= monthsArr.length; i++) {
            const element = monthsArr[i-1];
            MonthsToDisplay.push(element)
        }
    }else if(yearLabel == currentYear && currentIndex ==0){
        for (let i = currentMonth+1; i <= monthsArr.length; i++) {
            const element = monthsArr[i-1];
            MonthsToDisplay.push(element)
        }
    }else if(yearLabel == lastYear){
        if(currentMonth == Months.DECEMBER){
            for (let i = 1; i <= currentMonth; i++) {
                const element = monthsArr[i-1];
                MonthsToDisplay.push(element)
            }
        }else{
            for (let i = 1; i <= currentMonth; i++) {
                const element = monthsArr[i-1];
                MonthsToDisplay.push(element)
            }
        }
    }else{
        for (let i = 1; i <= monthsArr.length; i++) {
            const element = monthsArr[i-1];
            MonthsToDisplay.push(element)
        }
    }
    
    return <>
        {
            MonthsToDisplay.map(m =>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <CurrencyRupeeIcon />
                    </ListItemIcon>
                    <ListItemText primary={m} />
                </ListItemButton>
            )
        }
    </>
}

export const ExpandableList = ({
    year,
    totalYear
}: ExpandableListProps) => {
    const [open, setOpen] = useState(false);
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth()+1 as Months;
    const yearLabel  = (currentMonth === Months.DECEMBER ? year + 1 : year) + currentYear

    const handleClick = () => {
        setOpen(!open);
    };

    if((totalYear + currentYear) < yearLabel){
        return <></>
    }

    return <>
        <ListItemButton onClick={handleClick}>
            <ListItemText primary={yearLabel} />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {
                    getExpectedMonths(year, yearLabel, totalYear + currentYear, currentYear, currentMonth)
                }
            </List>
        </Collapse>
    </>
}