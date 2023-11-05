import { LoadingButton } from "@mui/lab"
import { Card, CardContent, CardHeader, Grid, IconButton } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ReactNode } from "react";

interface AdminEditPageTemplateProps {
    id: string,
    title: string,
    loading: boolean
    cancelText?: string
    saveText?: string
    onFormSubmit: () => void
    onFormCancel: () => void
    submitDisabled: boolean
    children: ReactNode,
    otherActions?: JSX.Element
}

export const AdminEditPageTemplate = ({
    id,
    title,
    loading,
    cancelText = "Cancel",
    saveText = "Save",
    onFormSubmit,
    onFormCancel,
    submitDisabled,
    children,
    otherActions
}: AdminEditPageTemplateProps) => {
    return (
        <Grid id={id} container spacing={2} justifyContent="flex-start" alignItems='flex-start'>
            <Grid item xs={12}>
                <Card elevation={4} sx={{ margin: '1%', padding: '1%' }}>
                    <CardHeader title={<>
                        <IconButton onClick={onFormCancel}>
                            <ArrowBackIcon />
                        </IconButton>
                        {title}
                    </>}
                        action={
                            <>
                                <LoadingButton
                                    key={`cancel-${id}`}
                                    onClick={onFormCancel}
                                    loading={false}
                                    loadingPosition="start"
                                    startIcon={<CancelIcon />}
                                    variant="contained"
                                    style={{
                                        backgroundColor: 'red'
                                    }}
                                >
                                    <span>{cancelText}</span>
                                </LoadingButton>
                                <LoadingButton
                                    key={`submit-${id}`}
                                    color="info"
                                    onClick={onFormSubmit}
                                    loading={loading}
                                    loadingPosition="start"
                                    startIcon={<SaveIcon />}
                                    variant="contained"
                                    disabled={submitDisabled}
                                    style={{
                                        marginLeft: '10px',
                                        marginRight: '10px'
                                    }}
                                >
                                    <span>{saveText}</span>
                                </LoadingButton>
                                {otherActions}
                            </>
                        }
                    />
                    <CardContent key={`${id}-card-content`} sx={{ height: '67vh', overflowY: 'scroll' }}>
                        {children}
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}