import { useEffect, useState } from "react"

export const IntText = ({field_label, field_default, meta_type, field_id}) => {

    const [intValue, setIntValue] = useState(null)

    useEffect(() => {
        if(field_default)
        setIntValue(field_default)
        else 
        setIntValue(0)
    }, [field_default])

    function handleChange(e) {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setIntValue(e.target.value)
        }
    }

    function handleMinMax(value) {
        if(meta_type) {
            const min = meta_type.min
            const max = meta_type.max
            if(parseInt(value) < min || isNaN(parseInt(value))) 
                setIntValue(min);
            else if(parseInt(value) > max)
                setIntValue(max);
            else return value;
        }
    }

    function handleIncrement() {
        let value = intValue
        value = value + meta_type.factor
        setIntValue(value)
        handleMinMax(value)
    }

    function handleDecrement() {
        let value = intValue
        value = value - meta_type.factor
        setIntValue(value)
        handleMinMax(value)
    }

  return (
    <>
        <td>
            {field_label.charAt(0).toUpperCase() + field_label.slice(1)}
        </td>
        <td>
            <input onChange={handleChange} disabled className="form-control" type="text" name={field_id}  value = {intValue}
            onKeyUp={handleMinMax} />
            {meta_type ? 
                <div className="desciption">
                    <p>Enter between {meta_type.min}....{meta_type.max}</p>
                </div> : null
            }
        </td>
        {meta_type.factor ? 
            <td>
                <div className="arrows">
                    <div className = "up-arrow"><i class="fa fa-caret-up" onClick={handleIncrement} ></i></div>            
                    <div className = "down-arrow"><i className="fa fa-caret-down" onClick={handleDecrement}></i></div>
                </div>  
            </td>
        : null}
    </>
  )
}
