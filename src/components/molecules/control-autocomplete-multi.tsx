import { Control, Controller, FieldError, FieldValues, Path, PathValue, RegisterOptions } from "react-hook-form";
import { FormAutocompleteMulti } from "../atoms";
import { ChangeEvent, FormEventHandler } from "react";

interface Props<T extends FieldValues> {
    label: string
    rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
    error: FieldError
    helperText: string | React.ReactNode
    control: Control<T>
    name: Path<T>
    isDisabled?: boolean
    defaultValue?: PathValue<T, Path<T>>;
    options: Array<any>
    keyID?: string
    keyLabel?: string
    keyLabelSecondary?: string
    freeSolo?: boolean
    placeholder?: string
    rendertags?: any
    renderInputList?: Array<(string | null | number)>
    onInputChange?: (event: ChangeEvent<HTMLInputElement>, defaultCallback?: FormEventHandler<HTMLInputElement>) => void;
}

export const ControlAutocompleteMulti = <T extends object>({
    label,
    name,
    control,
    error,
    helperText,
    isDisabled,
    defaultValue,
    rules,
    options,
    keyID,
    keyLabel,
    keyLabelSecondary,
    freeSolo,
    onInputChange,
    placeholder,
    rendertags,
    renderInputList
}: Props<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={rules}
            render={({ field }) => (
                <FormAutocompleteMulti
                    keyID={keyID || 'id'}
                    keyLabel={keyLabel || 'name'}
                    keyLabelSecondary={keyLabelSecondary || ""}
                    labelId={`${name}-autocomplete-select`}
                    freeSolo={freeSolo}
                    placeholder={placeholder}
                    field={field}
                    label={label}
                    options={options}
                    error={error !== undefined}
                    helperText={error?.message || helperText}
                    isDisabled={isDisabled === true}
                    renderTags={rendertags}
                    renderInputList={renderInputList}
                    onInputChange={onInputChange}
                />
            )}
        />
    );
}