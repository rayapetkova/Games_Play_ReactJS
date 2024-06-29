import { useState } from "react";

export default function useForm(submitHander, initialVlues) {
    const [values, setValues] = useState(initialVlues)

    const onChange = (e) => {
        setValues(currentValues => ({
            ...currentValues,
            [e.currentTarget.name]: e.currentTarget.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        submitHander()
    }

    return {
        values,
        onChange,
        onSubmit
    }
}