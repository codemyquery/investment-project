import { Alert, Snackbar, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { Severity } from "../../types";
interface NotificationProps {
    open: boolean,
    message: React.ReactNode | string
    onClose: Dispatch<SetStateAction<any>> | (() => void)
    severity: Severity
}
export const Notifications = ({
    open,
    onClose,
    message,
    severity
}: NotificationProps) => {
    return <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={open}
        autoHideDuration={6000}
        onClose={onClose}
        message={message}
    >
        <Alert data-testid="notification-single" severity={severity} sx={{ flexGrow: 1 }}>
            <Typography data-testid="notification-single-text" variant="body1">
                {message}
            </Typography>
        </Alert>
    </Snackbar>
}