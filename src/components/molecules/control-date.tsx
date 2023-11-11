import { Control, Controller, FieldError, FieldValues, Path, PathValue, RegisterOptions } from "react-hook-form";
import { FormDate } from "../atoms";

interface Props<T extends FieldValues> {
    label: string
    rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
    error?: FieldError
    helperText: string
    control: Control<T>
    name: Path<T>
    defaultValue?: PathValue<T, Path<T>>;
    endAdornment?: React.ReactChild | undefined;
    isDisabled?: boolean
    onDateSubmit?: (event: any) => void;
    restProps?: any
}

export const ControlDate = <T extends object>({
    label,
    rules,
    error,
    helperText,
    control,
    name,
    isDisabled,
    defaultValue,
    onDateSubmit,
    endAdornment,
    restProps
}: Props<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={rules}
            render={({ field }) => (
                <FormDate
                    field={field}
                    label={label}
                    error={error !== undefined}
                    helperText={error?.message || helperText}
                    endAdornment={endAdornment}
                    isDisabled={isDisabled}
                    onDateSubmit={onDateSubmit}
                    restProps={restProps}
                />
            )}
        />
    );
}