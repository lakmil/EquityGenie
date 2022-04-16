const Sslist = ({field_label, field_default, field_id, meta_type}) => {
//   const [value, setValue] = useState(field_default)
  const options = meta_type.items
//   function handleChange(e) {
//     setValue(e.target.value)
//   }
  
  return (
    <>
      <td>
        {field_label.charAt(0).toUpperCase() + field_label.slice(1)}
      </td>
      <td>
        <select name={field_id} defaultValue={field_default}>
            {options.map((item, key) => {
                return <option key={key} value={item}>{item}</option>
            })}
        </select>
      </td>
    </>
  )
}

export default Sslist
