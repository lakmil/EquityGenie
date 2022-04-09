import { useState } from "react"

export const Time = ({field_label, field_default}) => {

    const [timeValue, setTimeValue] = useState(field_default)

    function handleChange(e) {
        setTimeValue(e.target.value)
    }
  return (
    <div className="fields">
        <div className="label">
            <strong>
                <label className="small mb-1">{field_label}</label>
            </strong>
        </div>
        <div className="element">
            <input onChange={handleChange} className="form-control" type="date" value = {timeValue} />
        </div>
    </div>
  )
}
