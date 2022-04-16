import { useState } from "react"


export const CheckBox = ({field_label, field_default, field_id}) => {
  const [value, setValue] = useState(field_default)

  function handleChange(e) {
    setValue(e.target.value)
  }
  
  return (
    <>
      <td>
        {field_label.charAt(0).toUpperCase() + field_label.slice(1)}
      </td>
      <td>
        <input onChange={handleChange} type="checkbox" name={field_id} value={value}  />
      </td>
    </>
  )
}
