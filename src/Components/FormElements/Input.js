import { Form } from 'react-bootstrap';

const Input = (props) => {
    return(
        <Form.Group className={props.cname ? props.cname : "mb-3"} controlId={props.controlId ? props.controlId : "formIdBasic"}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control name={props.name} onInput={props.handleChange} type={props.type} placeholder={props.placeholder} />
            <Form.Text className="text-muted">
                {props.description}
            </Form.Text>
        </Form.Group>
    );
}

export default Input;