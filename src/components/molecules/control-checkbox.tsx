import { Control, Controller, FieldError, FieldValues, Path, PathValue, RegisterOptions } from "react-hook-form";
import { Checkbox } from "@mui/material";

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

export const ControlCheckbox = <T extends object>({
    label,
    rules,
    error,
    helperText,
    control,
    name,
    isDisabled,
    defaultValue,
}: Props<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={rules}
            render={({ field }) => (
                <Checkbox
                    {...field}
                    checked={field.value}
                />
            )}
        />
    );
}