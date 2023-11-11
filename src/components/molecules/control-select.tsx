import { Control, Controller, FieldError, FieldValues, Path, PathValue, RegisterOptions } from "react-hook-form";
import { FormSelect } from "../atoms";
import { ElementType } from "react";

interface Props<T extends FieldValues> {
    label: string
    rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
    error?: FieldError
    helperText?: string | React.ReactNode
    control: Control<T>
    name: Path<T>
    isDisabled?: boolean
    defaultValue?: PathValue<T, Path<T>>;
    InputProps?: Object,
    labelId: string,
    children: React.ReactNode,
    iconComponent?: ElementType,
    endAdormant?: React.ReactNode
}

export const ControlSelect = <T extends object>({
    label,
    name,
    control,
    error,
    helperText,
    isDisabled,
    defaultValue,
    children,
    rules,
    iconComponent,
    endAdormant
}: Props<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={rules}
            render={({ field }) => (
                <FormSelect
                    labelId={`${name}-select`}
                    field={field}
                    label={label}
                    error={error !== undefined}
                    helperText={error?.message || helperText}
                    isDisabled={isDisabled === true}
                    iconComponent={iconComponent}
                    endAdornments={endAdormant}
                >
                    {children}
                </FormSelect>
            )}
        />
    );
}