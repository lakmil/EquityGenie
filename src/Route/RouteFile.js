// import axios from 'axios';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// import AuthVerify from '../Auth/AuthVerify';
import BrokerInfo from '../Pages/BrokerInfo/BrokerInfo';
import BrokerRedirect from '../Pages/BrokerRedirect/BrokerRedirect';
import DashBoard from '../Pages/DashBoard/DashBoard';
import ForgotPassword from '../Pages/ForgotPassword/ForgotPassword';
import HomePage from '../Pages/HomePage/HomePage';
import Login from '../Pages/Login/Login';
import Profile from '../Pages/Profile/Profile';
import Register from '../Pages/Register/Register';

const RouteFile = () => {

    // function logOut() {
    //     // AuthService.logout();
    //     axios.delete('/user/logout')
    //     .then(res => {
    //         console.log("Logged Out")
    //     })
    //     .catch(err => console.log(err));
    //     localStorage.clear();
    // }

    useEffect(() => {
        if(!localStorage.getItem('access_token')) {
            // window.location.href = "/login"
        }
    }, [])

    return(
        <>
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
            {/* <AuthVerify logOut={logOut}/> */}
        </>
    );
}

export default RouteFile;