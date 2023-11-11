import { FormControl, FormControlLabel, FormHelperText, Switch } from "@mui/material"
import { ControllerRenderProps } from "react-hook-form"

interface FormSwitchProps {
    labelId: string;
    field: ControllerRenderProps<any, any>,
    label: string
    error: boolean
    helperText: string | React.ReactNode
    isDisabled: boolean
    InputProps?: React.InputHTMLAttributes<HTMLInputElement>
    color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
}

export const FormSwitch = ({
    labelId,
    field: { value, ...restfields },
    label,
    error,
    helperText,
    isDisabled,
    InputProps,
    color
}: FormSwitchProps) => {
    return <FormControl
        variant="outlined"
        error={error}
        fullWidth
    >
        <FormControlLabel
            control={
                <Switch color={color} checked={value} {...restfields} disabled={isDisabled} data-testid={labelId} />
            }
            label={label}
        />
        {
            (helperText) &&
            <FormHelperText component={((typeof helperText === 'string') ? 'p' : 'div')}>
                {helperText}
            </FormHelperText>
        }
    </FormControl >
}