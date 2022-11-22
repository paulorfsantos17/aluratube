import { useState } from "react"

export function useForm (propsForm) {
  const [values, setValues] = useState(propsForm.initialValues);
  
  return  {
    values,
    handleChange:(e) =>  {
      const value = e.target.value
      const name = e.target.name
      console.log(values)
      setValues({
        ...values,
        [name]: value
      })
    },
    clearForm() {
      setValues({})
    }
  }
}