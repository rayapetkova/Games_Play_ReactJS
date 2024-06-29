import { useState } from "react";

export default function useForm(submitHandler, initialVlues) {
    const [values, setValues] = useState(initialVlues)

    const onChange = (e) => {
        setValues(currentValues => ({
            ...currentValues,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        submitHandler(values)
    }

    return [
        values,
        onChange,
        onSubmit
    ]
}