import TextField from "@mui/material/TextField";
import { ControllerRenderProps } from "react-hook-form";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers';

interface FormTextProps {
  field: ControllerRenderProps<any, any>;
  label: string;
  error: boolean;
  helperText: string;
  isDisabled?: boolean;
  endAdornment?: React.ReactChild | undefined;
  onDateSubmit?: (event: any) => void;
  restProps?: any
}

export const FormDate = ({
  label,
  error,
  helperText,
  field: { onChange, name, value, ...restFields },
  endAdornment,
  isDisabled,
  onDateSubmit,
  restProps
}: FormTextProps) => {
  let selectedDate = "";

  const handleDateSubmitOnKeyUp = (event: any) => {
    if (onDateSubmit) {
      if (event.key === "Enter") {
        onDateSubmit(event.target.value);
      }
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        mask="____-__-__"
        inputFormat="yyyy-MM-dd"
        value={value}
        onChange={(event: any) => {
          if (event) {
            onChange(event);
            selectedDate = event;
          }
        }}
        onClose={() => onDateSubmit && onDateSubmit(selectedDate)}
        maxDate={new Date("2121-11-22")}
        componentsProps={{
          actionBar: { actions: ['clear'] },
        }}
        disabled={isDisabled}
        InputAdornmentProps={{ position: 'end' }}
        renderInput={(params: any) => {
          const fieldProps = {
            InputProps: {
              inputProps: {
                ...params.inputProps,
                "data-testid": `${name}-text-input-field`,
              },
              ...params.InputProps,
              endAdornment: (
                <>
                  {endAdornment}
                  {params?.InputProps?.endAdornment}
                </>
              )
            }
          }
          return <TextField
            {...params}
            {...fieldProps}
            fullWidth={true}
            onKeyUp={handleDateSubmitOnKeyUp}
            data-testid={`${name}-text-input`}
            error={error}
            helperText={helperText}
          />
        }
        }
        {...restProps}
      />
    </LocalizationProvider>
  );
};