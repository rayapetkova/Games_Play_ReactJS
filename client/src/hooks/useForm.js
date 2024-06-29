import { useState } from "react";

export default function useForm(submitHander, initialVlues) {
    const [values, setValues] = useState(initialVlues)

    const onChange = (e) => {
        setValues(currentValues => ({
            ...currentValues,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        submitHander(values)
    }

    return [
        values,
        onChange,
        onSubmit
    ]
}