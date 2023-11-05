import { IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

interface ButtonDeleteIconProps {
    title: string
    onClick: () => void
    testid: string
    dataSet: any
}
export const ButtonDeleteIcon = ({
    title,
    onClick,
    testid,
    dataSet
}: ButtonDeleteIconProps) => {
    return (
        <IconButton title={title}  data-testid={testid} onClick={onClick}  {...dataSet}>
            <DeleteIcon />
        </IconButton>
    )
}