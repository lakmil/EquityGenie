import { useEffect } from "react";
import { CheckBox } from "../Element/CheckBox";
import { FloatText } from "../Element/FloatText";
import { IntText } from "../Element/IntText";
import Sslist from "../Element/Sslist";
import { Text } from "../Element/Text";
import { Time } from "../Element/Time";

const Fields = ({field_type, field_label, field_default, strategy_name, meta_type, field_id}) => {
    useEffect(() => {
    })
    switch (field_type) {
        case 'bool':
            return <CheckBox field_label={field_label} field_default = {field_default} field_id = {field_id} />
        
        case 'text':
            return <Text field_label={field_label} field_default = {field_default} field_id = {field_id} />
        
        case 'int':
            return <IntText field_label={field_label} field_default = {field_default} meta_type = {meta_type} field_id = {field_id} />

        case 'float':
            return <FloatText field_label={field_label} field_default = {field_default} meta_type = {meta_type} field_id = {field_id} />

        case 'time':
            return <Time field_label={field_label} field_default = {field_default} field_id = {field_id} />

        case 'sslist':
            return <Sslist field_label={field_label} field_default = {field_default} field_id = {field_id} meta_type = {meta_type} />
        default:
            return <p>{field_type}</p>;
    }
}

export default Fields