import { useEffect, useState } from "react"

export const IntText = ({field_label, field_default}) => {

    const [intValue, setIntValue] = useState(null)

    useEffect(() => {
        setIntValue(field_default)
    }, [field_default])

    function handleChange(e) {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setIntValue(e.target.value)
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
            <input onChange={handleChange} className="form-control" type="text" value = {intValue} />
        </div>
    </div>
  )
}
