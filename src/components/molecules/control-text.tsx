import { 
    Control, 
    Controller, 
    FieldError, 
    FieldValues, 
    Path, 
    PathValue, 
    RegisterOptions 
} from "react-hook-form";
import { FormText } from "../atoms";

interface Props<T extends FieldValues> {
    label: string
    rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' >;
    multiline?: boolean
    maxRows?: number
    minRows?: number
    error?: FieldError
    helperText: string
    control: Control<T>
    name: Path<T>
    isDisabled?: boolean
    defaultValue?: PathValue<T, Path<T>>;
    InputProps?: Object
}

export const ControlText = <T extends object>({
    label,
    rules,
    multiline,
    maxRows,
    minRows,
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
                <FormText
                    field={field}
                    multiline={multiline}
                    maxRows={maxRows}
                    minRows={minRows}
                    label={label}
                    error={error !== undefined}
                    helperText={error?.message || helperText}
                    InputProps={InputProps}
                    isDisabled={isDisabled === true}
                />
            )}
        />
    );
}