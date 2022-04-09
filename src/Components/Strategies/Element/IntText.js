import { useEffect, useState } from "react"

export const IntText = ({field_label, field_default, meta_type}) => {

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

    function handleMinMax(e) {
        if(meta_type) {
            console.log(e.target.value)
            const value = e.target.value
            const min = meta_type.min
            const max = meta_type.max
            if(parseInt(value) < min || isNaN(parseInt(value))) 
                setIntValue(min);
            else if(parseInt(value) > max)
                setIntValue(max);
            else return value;
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
            <input onChange={handleChange} className="form-control" type="text" value = {intValue}
            onKeyUp={handleMinMax} />
            {meta_type ? 
                <div className="desciption">
                    <p><mute>Min: {meta_type.min}, Max: {meta_type.max}</mute></p>
                </div> : null
            }
        </div>
    </div>
  )
}
