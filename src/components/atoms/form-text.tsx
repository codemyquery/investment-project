import { FilledInputProps, InputProps, OutlinedInputProps, TextField } from "@mui/material"
import { ControllerRenderProps } from "react-hook-form"

interface FormTextProps {
    field?: ControllerRenderProps<any, any>,
    label: string
    error: boolean
    helperText: string
    isDisabled: boolean
    multiline?: boolean
    minRows?: number
    maxRows?: number
    id?: string
    margin?: "dense" | "normal" | "none" | undefined
    type?: string
    InputProps?: Partial<FilledInputProps> | Partial<OutlinedInputProps> | Partial<InputProps> | undefined
}

export const FormText = ({
    field,
    label,
    error,
    helperText,
    isDisabled,
    multiline,
    minRows,
    maxRows,
    id,
    InputProps,
    margin,
    type = "text"
}: FormTextProps) => {
    return <TextField
        {...field}
        fullWidth={true}
        data-testid={`${field?.name || id}-text-input`}
        InputProps={{...InputProps}}
        label={label}
        error={error}
        helperText={helperText}
        disabled={isDisabled}
        multiline={multiline}
        type={type}
        maxRows={maxRows}
        minRows={minRows}
        margin={margin}
    />
}