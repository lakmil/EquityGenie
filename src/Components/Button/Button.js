import { Button as InputButton } from 'react-bootstrap'

const Button = (props) => {
    return(
        <InputButton type={props.type} className='sign-in-btn btn btn-primary' >{props.name}</InputButton>
    );
}

export default Button