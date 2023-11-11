import { Control, Controller, FieldError, FieldValues, Path, PathValue, RegisterOptions } from "react-hook-form";
import { FormNumber } from "../atoms";

interface Props<T extends FieldValues> {
    label: string
    rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
    error?: FieldError
    helperText: string
    control: Control<T>
    name: Path<T>
    isDisabled?: boolean
    defaultValue?: PathValue<T, Path<T>>;
    InputProps?: Object
}

export const ControlNumber = <T extends object>({
    label,
    rules,
    error,
    helperText,
    control,
    name,
    isDisabled,
    defaultValue,
    InputProps,
}: Props<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={rules}
            render={({ field }) => (
                <FormNumber
                    field={field}
                    label={label}
                    InputProps={InputProps}
                    error={error !== undefined}
                    helperText={error?.message || helperText}
                    isDisabled={isDisabled === true}
                />
            )}
        />
    );
}