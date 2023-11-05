import { Card, CardContent, Grid } from "@mui/material"

interface DashboardPageTemplateProps {
    id: string,
    children: React.ReactNode
}
export const DashboardPageTemplate = ({
    id,
    children
}: DashboardPageTemplateProps) => {
    return (
        <Grid id={id} container spacing={2} justifyContent="flex-start" alignItems='flex-start'>
            <Grid item xs={12}>
                <Card elevation={4} sx={{ margin: '1%', padding: '1%' }}>
                    <CardContent>
                        {children}
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}