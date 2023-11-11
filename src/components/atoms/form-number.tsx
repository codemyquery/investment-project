import TextField from "@mui/material/TextField";
import { ControllerRenderProps } from "react-hook-form";

interface FormTextProps {
    field: ControllerRenderProps<any, any>;
    InputProps?: any;
    label: string;
    error: boolean;
    helperText: string;
    isDisabled: boolean;
    id?: string;
}
// allow to pass data props as data-* and their value to get react synthetics data?
export const FormNumber = ({
    label,
    error,
    helperText,
    field,
    isDisabled,
    InputProps,
}: FormTextProps) => {
    return (
        <TextField
            fullWidth={true}
            type="number"
            data-testid={`${field.name}-number-input`}
            inputProps={{ "data-testid": `${field?.name}-number-input-field` }}
            label={label}
            error={error}
            InputProps={InputProps}
            {...field}
            helperText={helperText}
            disabled={isDisabled}
        />
    );
};