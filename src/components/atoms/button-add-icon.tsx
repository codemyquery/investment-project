import { IconButton } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

interface ButtonAddIconProps {
    title: string
    onClick: () => void
    testid: string
    dataSet: any
}
export const ButtonAddIcon = ({
    title,
    onClick,
    testid,
    dataSet
}:ButtonAddIconProps) =>{
    return (
        <IconButton title={title} data-testid={testid} onClick={onClick}  {...dataSet}>
            <AddIcon />
        </IconButton>
    )
}