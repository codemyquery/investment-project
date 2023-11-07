import { Button } from "@mui/material"
import LogoutIcon from '@mui/icons-material/Logout';
import { ChangeEvent } from "react";

interface BrowseFileType {
    onBrowseFileHandler: (evt: ChangeEvent<HTMLInputElement>) => void
    label: string
}
export const BrowseFile = ({
    onBrowseFileHandler,
    label
}: BrowseFileType) => {
    return <Button
        variant="text"
        component="label"
        startIcon={<LogoutIcon />}
    >
        {label}
        <input
            onChange={onBrowseFileHandler}
            type="file"
            hidden
        />
    </Button>
}