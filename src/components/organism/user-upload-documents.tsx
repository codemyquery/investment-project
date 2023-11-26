import { Grid } from "@mui/material"
import { Control, UseFormSetValue } from "react-hook-form"
import { UserKYCFormData } from "../../types"

interface UserUploadDocumentsProps {
    control: Control<UserKYCFormData, any>
    setValue: UseFormSetValue<UserKYCFormData>
}

export const UserUploadDocuments = ({
    control,
    setValue
}: UserUploadDocumentsProps) => {
    return <>
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <input type="file" onChange={(e) => {
                    const files = (e.target as HTMLInputElement).files;
                    if (files) {
                        setValue('aadharCard.front', files[0]);
                    }
                }} />

                <img src="https://www.fisdom.com/wp-content/uploads/2023/06/pvc-aadhaar-card-1.webp" width={'100%'} height={'400px'} alt="Aadhar Card Front" />
            </Grid>
            <Grid item xs={6}>
                <input type="file" onChange={(e) => {
                    const files = (e.target as HTMLInputElement).files;
                    if (files) {
                        setValue('aadharCard.back', files[0]);
                    }
                }} />

                <img src="https://www.fisdom.com/wp-content/uploads/2023/06/pvc-aadhaar-card-1.webp" width={'100%'} height={'400px'} alt="Aadhar Card Bank" />
            </Grid>
            <Grid item xs={6}>
                <input type="file" onChange={(e) => {
                    const files = (e.target as HTMLInputElement).files;
                    if (files) {
                        setValue('panCard', files[0]);
                    }
                }} />

                <img src="https://scontent.fknu1-1.fna.fbcdn.net/v/t1.6435-9/207056686_4175559985870132_121310395359847418_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=cWZVIfdZnE8AX9AxIsx&_nc_ht=scontent.fknu1-1.fna&oh=00_AfDT-_UT1X4b1VDQ-cEbu6_kmH4-7qoYpAJ_7owiqxUh0Q&oe=658A3C47" width={'100%'} height={'400px'} alt="PAN Card" />
            </Grid>
            <Grid item xs={6}>
                <input type="file" onChange={(e) => {
                    const files = (e.target as HTMLInputElement).files;
                    if (files) {
                        setValue('signature', files[0]);
                    }
                }} />

                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Wonho-Signature.svg" width={'100%'} height={'400px'} alt="Signature Card" />
            </Grid>
            <Grid item xs={6}>
                <input type="file" onChange={(e) => {
                    const files = (e.target as HTMLInputElement).files;
                    if (files) {
                        setValue('BankStatement', files[0]);
                    }
                }} />

                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/BankStatementChequing.png" width={'100%'} height={'400px'} alt="Bank Statement" />
            </Grid>
        </Grid>
    </>
}