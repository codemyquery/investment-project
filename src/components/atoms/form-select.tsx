import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';

import { ControllerRenderProps } from "react-hook-form";
import React, { ElementType } from 'react';
interface FormSelectProps {
    labelId: string;
    field: ControllerRenderProps<any, any>;
    label: string;
    error: boolean;
    helperText: string | React.ReactNode;
    isDisabled: boolean;
    children: React.ReactNode;
    iconComponent?: ElementType;
    endAdornments?: React.ReactNode;
}

const preventUncontrolled = (value: any): any => {
    if (value === undefined || value === null) {
        return '';
    }
    return value;
}

export const FormSelect = ({ labelId, isDisabled, label, error, helperText, field: { onChange, value, ...restField }, children, iconComponent, endAdornments }: FormSelectProps) => {
    return (
        <FormControl
            variant="outlined"
            error={error}
            fullWidth
            data-testid={`${labelId}-container`}
        >
            <InputLabel id={labelId}>
                {label}
            </InputLabel>
            <Select
                {...restField}
                labelId={labelId}
                onChange={(e) => {
                    onChange(preventUncontrolled(e.target.value));
                }}
                value={preventUncontrolled(value)}
                label={label}
                disabled={isDisabled}
                SelectDisplayProps={{ /* "data-testid": `${labelId}` */ }}
                inputProps={{ "data-testid": `${labelId}-input` }}
                IconComponent={iconComponent}
                endAdornment={endAdornments}
            >
                {children}
            </Select>
            {(helperText) && (<FormHelperText data-testid={`${labelId}-helper-text`} component={((typeof helperText === 'string') ? 'p' : 'div')}>
                {helperText}
            </FormHelperText>)}
        </FormControl>
    );
};