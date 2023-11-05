import { styled } from "@mui/material/styles";

export const PageContent = styled('main')(({ theme }) => ({
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1)
}))