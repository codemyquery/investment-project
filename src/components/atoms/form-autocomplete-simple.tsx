import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from "@mui/material/TextField";
import { ControllerRenderProps } from "react-hook-form";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

interface FormSelectProps {
  labelId: string;
  field: ControllerRenderProps<any, any>;
  label: string;
  error: boolean;
  helperText: string | React.ReactNode;
  isDisabled: boolean;
  options: Array<any>;
  keyID: string;
  keyLabel: string;
  keyLabelSecondary: string;
  endAdornment?: React.ReactChild | undefined;
  freeSolo?: boolean
}

// Maybe pass the same type like cell which allow us to create a list depending on the component pass?
// use the state ID to select the element?
export const FormAutocompleteSimple = ({
  options,
  labelId,
  isDisabled,
  label,
  error,
  helperText,
  field: { onChange, value, ...restField },
  keyID,
  keyLabel,
  keyLabelSecondary,
  endAdornment,
  freeSolo
}: FormSelectProps) => {
  return (
    <FormControl
      error={error}
      fullWidth
    >
      <Autocomplete
        value={options.find((option) => value === option[keyID]) || null}
        onChange={(event: any, newValue: any | null) => {
          if (newValue) {
            onChange(newValue[keyID]);
          }
        }}
        freeSolo={freeSolo}
        data-testid={`${labelId}-autocomplete`}
        options={options}
        isOptionEqualToValue={(option, value) => option[keyID] === value[keyID]}
        getOptionLabel={(option) => {
          return keyLabelSecondary ? `${option[keyLabel]} - ${option[keyLabelSecondary]}` : option[keyLabel]
        }}
        renderInput={
          (params) => {
            const fieldProps = {
              InputProps :{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {endAdornment}
                    {params?.InputProps?.endAdornment}
                  </>
                )
              }
            }
            return <TextField {...params} fullWidth={true} error={error} label={label} variant="outlined" {...fieldProps}/>;
          } 
        }
        renderOption={(props, option) => (
          <ListItem {...props} key={`${option.id}-list-item`}>
            <ListItemText
              data-testid={`select-option-${option[keyID]}`}
              key={`${option.id}-list-item-text`}
              primary={option[keyLabel]}
              secondary={option[keyLabelSecondary]}
            />
          </ListItem>
        )}
        disabled={isDisabled}
      />
      {(helperText) && (<FormHelperText component={((typeof helperText === 'string') ? 'p' : 'div')}>
        {helperText}
      </FormHelperText>)}
    </FormControl>
  );
};