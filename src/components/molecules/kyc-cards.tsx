import { Card, CardHeader, IconButton, CardMedia } from "@mui/material"
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useState } from "react";

interface KYCCardsProps {
    title: string,
    subTitle?: string,
    docUrl: string,
    noDocUrl: string,
    onChangeHandler: (file: File, option: string) => void;
}

export const KYCCards = ({
    title,
    subTitle = "",
    docUrl,
    noDocUrl,
    onChangeHandler
}: KYCCardsProps) => {
    const [image, setImage] = useState('');

    const onInputChangeHandler = (e: any) => {
        const files = (e.target as HTMLInputElement).files;
        if (files) {
            setImage(URL.createObjectURL(files[0]))
            onChangeHandler(files[0], `${title} ${subTitle}`)
        }
    }

    return <>
        <Card >
            <CardHeader
                action={
                    image && <IconButton aria-label="settings">
                        <FileUploadIcon style={{ color: 'blue' }} />
                    </IconButton>
                }
                title={<>
                    {title}
                    <IconButton component="label">
                        <ExitToAppIcon style={{ color: 'blue' }} />
                        <input type="file" hidden accept="image/*" onChange={onInputChangeHandler} />
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