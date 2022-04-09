import { useEffect, useState } from "react"

export const FloatText = ({field_label, field_default}) => {

    const [floatValue, setFloatValue] = useState(field_default)

    useEffect(() => {
        setFloatValue(field_default)
    }, [field_default])

    function handleChange(e) {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setFloatValue(e.target.value)
        }
    }

  return (
    <div className="fields">
        <div className="label">
            <strong>
                <label className="small mb-1">{field_label}</label>
            </strong>
        </div>
        <div className="element">
            <input onChange={handleChange} className="form-control" type="text" value = {floatValue} />
        </div>
    </div>
  )
}
