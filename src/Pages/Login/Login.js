import React, {useState,useEffect} from 'react';
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Button from '../../Components/Button/Button';
import Input from '../../Components/FormElements/Input';
import Header from '../../Components/Header/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [redirect, setRedirect] = useState(false);

    let navigate = useNavigate();

    useEffect(() => {
        if(redirect || localStorage.getItem('access_token')) {
            return navigate('/profile')
        }
    }, [redirect,navigate])

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
            console.log(res)
            setRedirect(true)
            localStorage.setItem("access_token", res.data.accessToken)
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
                        <div className='other-options'>
                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                            </div>
                            <a className="btn btn-primary btn-lg btn-block" href="#!" role="button">
                                <i className="fab fa-google-f me-2"></i>Continue with Google
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login