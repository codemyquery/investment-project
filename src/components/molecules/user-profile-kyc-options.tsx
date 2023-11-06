import { Stack, Button } from "@mui/material"

interface UserProfileKycOptionsProps {
    onClickHandler: (activeButton: 1 | 2 | 3 | 4) => void,
    activeButton: 1 | 2 | 3 | 4
}
export const UserProfileKycOptions = ({
    onClickHandler,
    activeButton
}: UserProfileKycOptionsProps) => {
    return <><Stack direction="row" spacing={2}>
        <Button onClick={() => { onClickHandler(1) }} variant={activeButton === 1 ? "contained" : "outlined"} color="primary">Personal Info</Button>
        <Button onClick={() => { onClickHandler(2) }} variant={activeButton === 2 ? "contained" : "outlined"} color="primary">Bank Details</Button>
        <Button onClick={() => { onClickHandler(3) }} variant={activeButton === 3 ? "contained" : "outlined"} color="primary">Nominee Details</Button>
        <Button onClick={() => { onClickHandler(4) }} variant={activeButton === 4 ? "contained" : "outlined"} color="primary">Upload Documents</Button>
    </Stack>
        <br />
    </>
}