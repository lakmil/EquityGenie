import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from '../Components/Navbar/NavigationBar';
import BrokerInfo from '../Pages/BrokerInfo/BrokerInfo';
import BrokerRedirect from '../Pages/BrokerRedirect/BrokerRedirect';
import DashBoard from '../Pages/DashBoard/DashBoard';
import ForgotPassword from '../Pages/ForgotPassword/ForgotPassword';
import HomePage from '../Pages/HomePage/HomePage';
import Login from '../Pages/Login/Login';
import Profile from '../Pages/Profile/Profile';
import Register from '../Pages/Register/Register';
import jwt_decode from "jwt-decode";

const RouteFile = () => {

    useEffect(() => {
        if(!localStorage.getItem('access_token') && !window.location.href.includes('login')) {
            window.location.href = "/login"
        }
        else if(localStorage.getItem("access_token")) {
            const accessToken = localStorage.getItem("access_token") ? localStorage.getItem("access_token") : "" ;
            const expirationTime = jwt_decode(accessToken).exp ? jwt_decode(accessToken).exp : "" ;
            if(expirationTime < Date.now() / 1000 && !window.location.href.includes('login')) {
                localStorage.clear();
                window.location.href = "/login"
            }
        }
    }, [])


    return(
        <>
            {localStorage.getItem('access_token') ? <NavigationBar /> : null}
            <Routes>
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/register' element={<Register />} />
                <Route exact path='/forgot-password' element={<ForgotPassword />} />
                <Route exact path='/profile' element={<Profile />} />
                <Route exact path='/broker-info' element={<BrokerInfo />} />
                <Route exact path='/dashboard' element={<DashBoard />} />
                <Route exact path='/redirect/broker-info' element={<BrokerRedirect />} />
                <Route exact path='/' element={<HomePage />} />
            </Routes>
        </>
    );
}

export default RouteFile;