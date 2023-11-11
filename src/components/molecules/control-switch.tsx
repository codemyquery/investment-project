import { Control, Controller, FieldError, FieldValues, Path, PathValue, RegisterOptions } from "react-hook-form";
import { FormSwitch } from "../atoms/form-switch";

interface Props<T extends FieldValues> {
    label: string
    rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
    error: FieldError
    helperText: string
    control: Control<T>
    name: Path<T>
    isDisabled?: boolean
    defaultValue?: PathValue<T, Path<T>>;
}

export const ControlSwitch = <T extends object>({
    label,
    name,
    control,
    error,
    helperText,
    isDisabled,
    defaultValue,
    rules,
}: Props<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={rules}
            render={({ field }) => (
                <FormSwitch
                    labelId={`${name}-switch`}
                    field={field}
                    label={label}
                    error={error !== undefined}
                    helperText={error?.message || helperText}
                    isDisabled={isDisabled === true}
                />
            )}
        />
    );
}