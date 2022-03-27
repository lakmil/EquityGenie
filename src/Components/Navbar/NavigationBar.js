import axios from 'axios';
import { useEffect, useState } from 'react';
import {
    Navbar,
    Nav,
    Container,
    NavDropdown
} from 'react-bootstrap';

var KiteConnect = require('kiteconnect').KiteConnect


const NavigationBar = () => {

    const [initialState, setInitialState] = useState({})
    const [color, setColor] = useState('btn btn-danger')
    const [toggle, setToggle] = useState(false)
    const [brokerLogin, setBrokerLogin] = useState('Broker Login')

    useEffect(() => {
        getBrokerDetails()
        if(localStorage.getItem('request_token')) {
            setColor('btn btn-success')
            setToggle(true)
            setBrokerLogin('Logged In')
        }
    }, [])

    async function getBrokerDetails() {
        axios.get('/user/broker-info')
        .then(res => {
            setInitialState(res.data)
            localStorage.setItem("brokerData", JSON.stringify(res.data))
        })
        .catch(err => console.log("Broker Info not found: " + err))
    }

    // const [userData, setUserData] = useState(null);
    
    // useEffect(() => {
    //     if(localStorage.getItem('userData')) {
    //         userName = JSON.parse(localStorage.getItem('userData')).fName +' '+ JSON.parse(localStorage.getItem('userData')).lName
    //         setUserData(JSON.parse(localStorage.getItem('userData')))
    //     }
    // }, [userData])

    function handleLogout() {
        axios.delete('/user/logout')
        .then(res => {
            console.log("Logged Out")
        })
        .catch(err => console.log(err));
        localStorage.clear();
    }
    
    var rightLinks = (
        <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
        </Nav>
    )
    if(localStorage.getItem("access_token")) {
        var userName = ""
        if(localStorage.getItem('userData')) {
            userName = JSON.parse(localStorage.getItem('userData')).fName +' '+ JSON.parse(localStorage.getItem('userData')).lName
        }
        rightLinks = (
            <Nav>
                <NavDropdown title={userName !== "" ? userName : "Hello"} id="basic-nav-dropdown">
                    <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                    <NavDropdown.Item href="/broker-info">Broker Info</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleLogout} href="/">Logout</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        )
    }

    function handleButton() {
        console.log(initialState.appKey)
        var kc = new KiteConnect({
            api_key: initialState.appKey
        });
        const login_url = kc.getLoginURL()
        window.location.href = login_url;          
    }

    return (
        <div className="navbar-equity-genie">
            <Navbar sticky="top" bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">EquityGenie</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <button className= {color} disabled = {toggle} onClick={handleButton} type="button">{brokerLogin}</button>
                    </Nav>
                    {rightLinks}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavigationBar