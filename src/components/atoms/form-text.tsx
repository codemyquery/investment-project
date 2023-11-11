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
}: FormTextProps) => {
    return <TextField
        fullWidth={true}
        data-testid={`${field?.name || id}-text-input`}
        InputProps={{...InputProps}}
        label={label}
        error={error}
        helperText={helperText}
        disabled={isDisabled}
        multiline={multiline}
        maxRows={maxRows}
        minRows={minRows}
        {...field}
    />
}