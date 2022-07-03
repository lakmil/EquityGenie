import { useContext, useEffect } from "react"
import { StrategyInputs } from '../../../ContextProvider/StrategyInputProvider';


export const CheckBox = ({field_label, field_default, field_id}) => {

  const {checkboxValue, setCheckBoxValue} = useContext(StrategyInputs)

  useEffect(() => {
    setCheckBoxValue(field_default)
    console.log(field_default);
  })

  // function handleChange(e) {
    // setCheckBoxValue(e.target.checked)
    // alert(e.target.checked)
  // }
  
  return (
    <>
      <td>
        {field_label.charAt(0).toUpperCase() + field_label.slice(1)}
      </td>
      <td>
        <input onChange={(e) => setCheckBoxValue(e.target.checked)} type="checkbox" name={field_id} value={field_default}  />
      </td>
    </>
  )
}
