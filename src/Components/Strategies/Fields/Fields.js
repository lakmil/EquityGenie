import { useEffect } from "react";
import { CheckBox } from "../Element/CheckBox";
import { FloatText } from "../Element/FloatText";
import { IntText } from "../Element/IntText";
import { Text } from "../Element/Text";
import { Time } from "../Element/Time";

const Fields = ({field_type, field_label, field_default}) => {
    useEffect(() => {

    }, [field_default])
    switch (field_type) {
        case 'bool':
            return <CheckBox field_label={field_label} field_default = {field_default} />
        
        case 'text':
            return <Text field_label={field_label} field_default = {field_default} />
        
        case 'int':
            return <IntText field_label={field_label} field_default = {field_default} />

        case 'float':
            return <FloatText field_label={field_label} field_default = {field_default} />

        case 'time':
            return <Time field_label={field_label} field_default = {field_default} />
    
        default:
            return <p>{field_type}</p>;
    }
}

export default Fields