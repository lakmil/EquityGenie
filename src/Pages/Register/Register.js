import React, {useState, useEffect} from 'react';
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Button from '../../Components/Button/Button';
import Input from '../../Components/FormElements/Input';
import Header from '../../Components/Header/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [mobile, setMobile] = useState(null);
    const [password, setPassword] = useState(null);
    const [redirect, setRedirect] = useState(false);

    let navigate = useNavigate();

    useEffect(() => {
        if(redirect || localStorage.getItem('access_token')) {
            return navigate('/profile')
        }
    }, [redirect,navigate])

    // handle the registration form submission
    function handleSubmit(e) {
        e.preventDefault();

        const data = {
            "userName":email,
            "password":password,
            "fName":firstName,
            "lName":lastName,
            "mobile":mobile,
            "status":"ACTIVE",
            "userType":"NORMAL"
        }

        axios.post('/system/register',data)
        .then(res => {
            console.log(res)
            setRedirect(true)
        })
        .catch(err => console.log("Entered:  "+err.response.data.detail))
        
    }

    function firstNameChange(e) {
        setFirstName(e.target.value)
    }

    function lastNameChange(e) {
        setLastName(e.target.value)
    }

    function emailChange(e) {
        setEmail(e.target.value)
    }

    function mobileChange(e) {
        setMobile(e.target.value)
    }

    function passwordChange(e) {
        setPassword(e.target.value)
    }

    function confirmPasswordChange(e) {
        // setConfirmPassword(e.target.value)
    }
    return(
        <div className='login-registration-page'>
            <div className="equity-ginie-register container">
                <div className='card-block card-1'>
                    <div className='registration-form'>
                        <div className='header-section'>
                            <Header headerTitle="EquityGenie" headerContent="Register" />
                        </div>
                        <Form onSubmit={handleSubmit}>
                            <div className='registration-names'>
                                <Input name="firstName" handleChange = {firstNameChange} controlId = "first_name" type="text" placeholder="Enter First Name" label="First Name" description="" />
                                <Input name="lastName" handleChange = {lastNameChange} controlId = "last_name" type="text" placeholder="Enter Last Name" label="Last Name" description="" />
                            </div>
                            <Input name="email" handleChange = {emailChange} controlId = "email" type="email" placeholder="Enter Email" label="Email" description="" />
                            <Input name="email" handleChange = {mobileChange} controlId = "mobile" type="text" placeholder="Enter Mobile no." label="Mobile" description="" />
                            <div className='registration-passwords'>
                            <Input name="password" handleChange = {passwordChange} controlId = "password" type="password" placeholder="Enter Password" label="Password" />
                            <Input name="confirmPassword" handleChange = {confirmPasswordChange} controlId = "confirm_password" type="password" placeholder="Enter Password" label="Confirm Password" />
                            </div>
                            <Button type = "submit"  name = "Register" />
                            <div className='redirect-links'>
                                <Link className='redirect-link-tag' to="/login">Sign In?</Link>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;