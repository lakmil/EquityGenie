import { useState } from "react"


export const CheckBox = ({field_label, field_default}) => {
  const [value, setValue] = useState(field_default)

  function handleChange(e) {
    setValue(e.target.value)
  }
  
  return (
    <div className='fields'>
        <div className="label">
            <strong>
                <label className="small mb-1">{field_label}</label>
            </strong>
        </div>
        <div className="element">
            <input onChange={handleChange} type="checkbox" value={value} />
        </div>
    </div>
  )
}
