import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Breakpoint, Typography } from '@mui/material';

interface GenericDialogProps {
    open: boolean;
    title: string;
    content: React.ReactNode
    onClose?: () => void;
    onCloseText?: string;
    onSubmit?: () => void;
    onSubmitText?: string;
    maxWidth?: false | Breakpoint | undefined
}

export const GenericDialog = ({
    title,
    open,
    content,
    onClose,
    onCloseText = "Cancel",
    onSubmit,
    onSubmitText = "Submit",
    maxWidth = 'xs'
}: GenericDialogProps) => {
    return (<>
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
            maxWidth={maxWidth}
        >
            <DialogTitle id="alert-dialog-title" >
                {title}
            </DialogTitle>
            <DialogContent dividers>
                {content}
            </DialogContent>
            <DialogActions>
                {onClose && <Button onClick={onClose} variant='outlined' color='error'>{onCloseText}</Button>}
                {onSubmit && <Button onClick={onSubmit} variant='outlined' color='success' autoFocus>{onSubmitText}</Button>}
            </DialogActions>
        </Dialog>
    </>);
}
