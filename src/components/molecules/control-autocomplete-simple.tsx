import { Control, Controller, FieldError, FieldValues, Path, PathValue, RegisterOptions } from "react-hook-form";
import { FormAutocompleteSimple } from "../atoms";

interface Props<T extends FieldValues> {
    label: string
    rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
    error?: FieldError
    helperText: string | React.ReactNode
    control: Control<T>
    name: Path<T>
    isDisabled?: boolean
    defaultValue?: PathValue<T, Path<T>>;
    options: Array<any>
    keyID?: string
    keyLabel?: string
    keyLabelSecondary?: string
    endAdornment?: React.ReactChild
}

export const ControlAutocompleteSimple = <T extends object>({
    label,
    name,
    control,
    error,
    helperText,
    isDisabled,
    defaultValue,
    rules,
    options,
    endAdornment,
    keyID,
    keyLabel,
    keyLabelSecondary,
}: Props<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={rules}
            render={({ field }) => (
                <FormAutocompleteSimple
                    keyID={keyID || 'id'}
                    keyLabel={keyLabel || 'name'}
                    keyLabelSecondary={keyLabelSecondary || ""}
                    labelId={`${name}-autocomplete-select`}
                    field={field}
                    label={label}
                    options={options}
                    error={error !== undefined}
                    helperText={error?.message || helperText}
                    isDisabled={isDisabled === true}
                    endAdornment={endAdornment}
                />
            )}
        />
    );
}