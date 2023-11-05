import { IconButton } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';

interface ButtonEditIconProps {
    title: string
    onClick: () => void
    testid: string
    dataSet: any
}
export const ButtonEditIcon = ({
    title,
    onClick,
    testid,
    dataSet
}: ButtonEditIconProps) => {
    return (
        <IconButton title={title}  data-testid={testid} onClick={onClick}  {...dataSet}>
            <EditIcon />
        </IconButton>
    )
}