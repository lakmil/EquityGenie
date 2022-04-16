import { useEffect, useState } from "react"

export const FloatText = ({field_label, field_default, field_id}) => {

    const [floatValue, setFloatValue] = useState(field_default)

    useEffect(() => {
        setFloatValue(field_default)
    }, [field_default])

    function handleChange(e) {
        const re = /^[0-9]*(\.[0-9]{0,2})?$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setFloatValue(e.target.value)
        }
    }

  return (
    <>
        <td>
            {field_label.charAt(0).toUpperCase() + field_label.slice(1)}
        </td>
        <td>
            <input onChange={handleChange} className="form-control" name={field_id} type="text" value = {floatValue} />
        </td>
    </>
  )
}
