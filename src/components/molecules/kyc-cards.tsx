import { Card, CardHeader, IconButton, CardMedia } from "@mui/material"
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useState } from "react";
import DownloadIcon from '@mui/icons-material/Download';

interface KYCCardsProps {
    title: string,
    subTitle?: string,
    docUrl: string,
    noDocUrl: string,
    onChangeHandler: (file: File, option: string) => void;
    showDownloadIcon?: boolean
}

export const KYCCards = ({
    title,
    subTitle = "",
    docUrl,
    noDocUrl,
    onChangeHandler,
    showDownloadIcon = false
}: KYCCardsProps) => {
    const [image, setImage] = useState('');

    const onInputChangeHandler = (e: any) => {
        const files = (e.target as HTMLInputElement).files;
        if (files) {
            switch (files[0].type) {
                case "application/pdf":
                case "image/apng":
                case "image/avif":
                case "image/gif":
                case "image/jpeg":
                case "image/png":
                case "image/svg+xml":
                case "image/webp":
                    setImage(URL.createObjectURL(files[0]))
                    onChangeHandler(files[0], `${title} ${subTitle}`)    
                break;
                default:
                    (e.target as HTMLInputElement).value = "";
                    console.log('Invalid file')    
                    break;
            }
        }
    }

    return <>
        <Card >
            <CardHeader
                action={
                    showDownloadIcon && docUrl && <IconButton aria-label="settings" href={docUrl} download={docUrl}>
                        <DownloadIcon style={{ color: 'blue' }} />
                    </IconButton>
                }
                title={<>
                    {title}
                    <IconButton component="label">
                        <ExitToAppIcon style={{ color: 'blue' }} />
                        <input type="file" hidden onChange={onInputChangeHandler} />
                    </IconButton>
                </>
                }
                subheader={subTitle}
            />
            <CardMedia
                component={"img"}
                height="300"
                image={image || docUrl || noDocUrl}
                alt={title}
                style={{ padding: '10px', width: '100%', pointerEvents: 'none' }}
            />
        </Card>
    </>
}