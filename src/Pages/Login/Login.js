import React, {useState,useEffect} from 'react';
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Button from '../../Components/Button/Button';
import Input from '../../Components/FormElements/Input';
import Header from '../../Components/Header/Header';
import axios from 'axios';


const Login = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if(redirect || localStorage.getItem('access_token')) {
            return window.location.href = "/profile"
        }
    }, [redirect])

    //handle the login submit
    function handleSubmit(e)  {
        e.preventDefault();

        axios.post('/user/login',{}, {
            auth: {
                username: email,
                password: password
            }
        })
        .then(res => {
            localStorage.setItem("access_token", res.data.accessToken)
            axios.get('/user', {
                headers: {
                    'Authorization': 'Bearer ' + res.data.accessToken
                }
            })
            .then(res => {
                localStorage.setItem("userData", JSON.stringify(res.data))
            })
            .catch(err => {
                localStorage.clear();
            })
            setRedirect(true)
        })
        .catch(err => console.log(err));
    }

    function emailChange(e) {
        setEmail(e.target.value)
    }

    function passwordChange(e) {
        setPassword(e.target.value)
    }

    return(
        <div className='login-registration-page'>
            <div className="equity-ginie-login container">
                <div className='card-block card-1'>
                    <div className='login-form'>
                        <div className='header-section'>
                            <Header headerTitle="EquityGenie" headerContent="Sign In" />
                        </div>
                        <Form onSubmit={handleSubmit}>
                            <Input handleChange={emailChange} controlId = "email" type="email" placeholder="Enter Email" label="Email" description="" />
                            <Input handleChange={passwordChange} controlId = "password" type="password" placeholder="Enter Password" label="Password" />
                            <Button name = "Sign In" />
                        </Form>
                        <div className='redirect-links'>
                            <Link className='redirect-link-tag' to="/register">Create Account?</Link>
                            <Link className='redirect-link-tag' to="/forgot-password">Forgot Password?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login