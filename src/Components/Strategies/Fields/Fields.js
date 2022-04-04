import { useEffect, useState } from "react";

const Fields = (props) => {
    const inputType = {
        int: 'textbox',
        float: 'textbox',
        text: 'textbox',
        bool: 'checkbox',
        metaData: null,
        time: 'date',
    }

    const [template, setTemplate] = useState(null);
    const [strategyName, setStrategyName] = useState(null);

    useEffect(() => {
        if(props.fields && props.strategyName) {
            setTemplate(props.fields);
            setStrategyName(props.strategyName)
        }
        else {
            setTemplate(null);
            setStrategyName(props.strategyName)
        }
    }, [props.fields, props.strategyName])

    return(
        <div className="equity-genie-dynamic-fields">
            <h3>{strategyName}</h3>
            <ul className="strategy-list">
                {template ? template.map((item, key) => {
                    if(item.type !== "metaData") {
                        return (
                            <li key = {key}>
                                <div className="fields">
                                    <div className="label">
                                        <strong>
                                            <label className="small mb-1">{item.label}</label>
                                        </strong>
                                    </div>
                                    <div className="element">
                                        <input className={item.type === "bool" ? "bool-checked" : "form-control"} defaultValue={item.default} type ={inputType[item.type]} name = {item.label} />
                                    </div>
                                </div>
                            </li>
                        )
                    }
                    else
                        return null;
                }) : "No Fields"}
            </ul>
        </div>
    )
}

export default Fields;