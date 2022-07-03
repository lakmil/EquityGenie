import { createContext, useState } from "react";

export const StrategyInputs = createContext();
const StrategyInputProvider = (props) => {
    const [checkboxValue, setCheckBoxValue] = useState(false)
    return (
        <StrategyInputs.Provider value = {{checkboxValue, setCheckBoxValue}}>
            {props.children}
        </StrategyInputs.Provider>
    )
}

export default StrategyInputProvider;