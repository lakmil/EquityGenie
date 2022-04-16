// import { useState } from "react"

export const Time = ({field_label, field_default, field_id}) => {

    // const [timeValue, setTimeValue] = useState(field_default)

    const hours = [{value: 9, name: "9"}, {value: 10, name: "10"},{value: 11, name: "11"},{value: 12, name: "12"},
    {value: 13, name: "13"},{value: 14, name: "14"},{value: 15, name: "15"},]

    let minutes = [];
    for(let i = 0; i<60; i++) {
        minutes = [...minutes, {value: i, name: i}]
    }

    const default_hour = "9"
    const default_min = "30"

    // function handleChange(e) {
    //     setTimeValue(e.target.value)
    // }
  return (
    <>
        <td>
            {field_label.charAt(0).toUpperCase() + field_label.slice(1)}
        </td>
        <td>
            {/* <input onChange={handleChange} name={field_id} className="form-control" type="select" value = {timeValue} /> */}
            <select name={field_id + "_hour"} defaultValue={default_hour}>
                {hours.map((item, key) => {
                    return <option key={key} value={item.value}>{item.name}</option>
                })}
            </select> : <select name={field_id + "_minute"} defaultValue={default_min}>
                {minutes.map((item, key) => {
                    return <option key={key} value={item.value}>{item.name}</option>
                })}
            </select>
        </td>
    </>
  )
}
