// import { useState } from "react";
// import TimeField from "react-simple-timefield";
// import TimePicker from "react-time-picker/dist/TimePicker";

export const Time = ({field_label, field_default, field_id}) => {

    // const [time, setTime] = useState('09:30')
    
    const hours = [{value: 9, name: "9"}, {value: 10, name: "10"},{value: 11, name: "11"},{value: 12, name: "12"},
    {value: 13, name: "13"},{value: 14, name: "14"},{value: 15, name: "15"},]

    let minutes = [];
    for(let i = 0; i<60; i++) {
        minutes = [...minutes, {value: i, name: i}]
    }

    const default_hour = "9"
    const default_min = "30"

  return (
    <>
        <td>
            {field_label.charAt(0).toUpperCase() + field_label.slice(1)}
        </td>
        <td className="d-flex">
            {/* <input onChange={handleChange} name={field_id} className="form-control" type="select" value = {timeValue} /> */}
            <select className="form-control w-25" name={field_id + "_hour"} defaultValue={default_hour}>
                {hours.map((item, key) => {
                    return <option key={key} value={item.value}>{item.name}</option>
                })}
            </select> : <select className="form-control w-25" name={field_id + "_minute"} defaultValue={default_min}>
                {minutes.map((item, key) => {
                    return <option key={key} value={item.value}>{item.name}</option>
                })}
            </select>
            {/* <TimeField className = "form-control"
                value={time}                       // {String}   required, format '00:00' or '00:00:00'
                onChange={(event, value) => {
                    setTime(value)
                }} // {Function} required
                input={<input type="text" name={field_id} />}   // {Element}  default: <input type="text" />
                inputRef={(ref) => {}}          // {Function} input's ref
                colon=":"                          // {String}   default: ":"
            /> */}
        </td>
    </>
  )
}
