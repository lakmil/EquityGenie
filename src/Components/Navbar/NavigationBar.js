import axios from 'axios';
import {
    Navbar,
    Nav,
    Container,
    NavDropdown
} from 'react-bootstrap';

const NavigationBar = () => {
    
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
                <NavDropdown title={userName} id="basic-nav-dropdown">
                    <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                    <NavDropdown.Item href="/broker-info">Broker Info</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleLogout} href="/">Logout</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        )
    }
    return (
        <div className="navbar-equity-genie">
            <Navbar sticky="top" bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">EquityGenie</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/dashboard">DashBoard</Nav.Link>
                        
                    </Nav>
                    {rightLinks}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavigationBar