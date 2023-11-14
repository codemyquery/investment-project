import { Button } from "@mui/material"
import LogoutIcon from '@mui/icons-material/Logout';
import { ChangeEvent } from "react";

interface BrowseFileType {
    onBrowseFileHandler: (evt: ChangeEvent<HTMLInputElement>) => void
    label: string
    id: string
}
export const BrowseFile = ({
    onBrowseFileHandler,
    label,
    id
}: BrowseFileType) => {
    return <Button
        key={id}
        variant="text"
        component="label"
        startIcon={<LogoutIcon />}
    >
        {label}
        <input
            key={`input-${id}`}
            onChange={onBrowseFileHandler}
            type="file"
            hidden
        />
    </Button>
}