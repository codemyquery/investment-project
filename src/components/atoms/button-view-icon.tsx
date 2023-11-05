import { IconButton } from "@mui/material"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

interface ButtonViewIconProps {
    title: string
    onClick: () => void
    testid: string
    dataSet: any
}
export const ButtonViewIcon = ({
    title,
    onClick,
    testid,
    dataSet
}: ButtonViewIconProps) => {
    return (
        <IconButton title={title}  data-testid={testid} onClick={onClick}  {...dataSet}>
            <RemoveRedEyeIcon />
        </IconButton>
    )
}