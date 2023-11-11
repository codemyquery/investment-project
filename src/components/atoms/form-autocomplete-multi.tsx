import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from "@mui/material/TextField";
import { ControllerRenderProps } from "react-hook-form";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { 
  ChangeEvent,
  FormEventHandler,
  useEffect,
  useState,
} from "react";

interface FormSelectProps {
  labelId: string;
  field: ControllerRenderProps<any, any>;
  placeholder?: string;
  freeSolo?: boolean;
  label: string;
  error: boolean;
  helperText: string | React.ReactNode;
  isDisabled: boolean;
  options: Array<any>;
  keyID: string;
  keyLabel: string;
  keyLabelSecondary: string;
  renderTags?: any;
  renderInputList?: (string | null | number)[];
  onInputChange?: (event: ChangeEvent<HTMLInputElement>, defaultCallback?: FormEventHandler<HTMLInputElement> ) => void;
}

export const FormAutocompleteMulti = ({
  options,
  labelId,
  isDisabled,
  label,
  error,
  helperText,
  field: { onChange, value, ...restField },
  placeholder,
  freeSolo,
  keyID,
  keyLabel,
  keyLabelSecondary,
  renderTags,
  renderInputList,
  onInputChange,
}: FormSelectProps) => {

  const [values, setValues] = useState<any>([]);

  useEffect(() => {
    if (renderInputList !== undefined && renderInputList.length) {
      setValues(renderInputList);
    }
    if (renderInputList !== undefined && !renderInputList.length) {
      setValues([]);
    }
  }, [renderInputList]);

  return (
    <FormControl
      error={error}
      fullWidth
    >
      <Autocomplete
        multiple={true}
        freeSolo={freeSolo}
        value={renderInputList !== undefined ? values : value}
        onChange={(event: any, newValue: any | null) => {
          if (newValue) {
            onChange(newValue);
          }
          if (renderInputList !== undefined) {
            setValues(newValue);
          }
        }}
        autoSelect
        data-testid={`${labelId}-autocomplete`}
        options={options}
        getOptionLabel={(option) => {
          if (freeSolo) {
            return option;
          }
          return keyLabelSecondary ? `${option[keyLabel]} - ${option[keyLabelSecondary]}` : option[keyLabel]
        }}
        renderInput={({inputProps, ...restParams}) => {
          if (onInputChange) {
            const originChange = inputProps.onChange;
            inputProps.onChange = (event: ChangeEvent<HTMLInputElement>) => {
              return onInputChange(event, originChange);
            }
          }
          return <TextField {...restParams} inputProps={inputProps} error={error} label={label} placeholder={placeholder} />
        }}
        renderOption={(props, option) => (
          <ListItem {...props}>
            <ListItemText
              data-testid={`select-option-${option[keyID]}`}
              primary={option[keyLabel]}
              secondary={option[keyLabelSecondary]}
            />
          </ListItem>
        )}
        isOptionEqualToValue={(option, value) => {
          const optionKey = typeof option === "string" ? option : option[keyID];
          const valueKey = typeof value === "string" ? value : value[keyID];
          return optionKey === valueKey;
        }}
        renderTags={renderTags}
        disabled={isDisabled}
      />
      {(helperText) && (<FormHelperText component={((typeof helperText === 'string') ? 'p' : 'div')}>
        {helperText}
      </FormHelperText>)}
    </FormControl>
  );
};