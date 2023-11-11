import { useEffect } from "react"
import { UseFormProps, useForm } from "react-hook-form"

export const useHookForm = <T extends object>(formProps: UseFormProps<T>) => {
    const forms = useForm<T>(formProps)
    useEffect(() => {
        forms.clearErrors();
    
    }, [])
    return forms;
}