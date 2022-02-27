import React, {useState} from 'react';
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Button from '../../Components/Button/Button';
import Input from '../../Components/FormElements/Input';
import Header from '../../Components/Header/Header';
import axios from 'axios';


const ForgotPassword = () => {

    const [email, setEmail] = useState(null);

    // handle the registration form submission
    function handleSubmit(e) {
        e.preventDefault();
        const data = {
            email: email,
        }
        
        axios.post('https://jsonplaceholder.typicode.com/posts/1', data)
        .then(res => console.log("Entered"+res))
        .catch(err => console.log(err))

    }

    function emailChange(e) {
        setEmail(e.target.value)
    }
    return(
        <div className='login-registration-page'>
            <div className="equity-ginie-register container">
                <div className='card-block card-1'>
                    <div className='registration-form'>
                        <div className='header-section'>
                            <Header headerTitle="EquityGenie" headerContent="Reset" />
                        </div>
                        <Form onSubmit={handleSubmit}>
                            <Input name="email" handleChange = {emailChange} controlId = "email" type="email" placeholder="Enter Email" label="Email" description="An Email will be sent with the new Password" />
                            <Button type = "submit"  name = "Send Mail" />
                            <div className='redirect-links'>
                                <Link className='redirect-link-tag' to="/login">Sign In?</Link>
                                <Link className='redirect-link-tag' to="/register">Create Account?</Link>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;