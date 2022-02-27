import { Routes, Route } from 'react-router-dom';
import ForgotPassword from '../Pages/ForgotPassword/ForgotPassword';
import HomePage from '../Pages/HomePage/HomePage';
import Login from '../Pages/Login/Login';
import Profile from '../Pages/Profile/Profile';
import Register from '../Pages/Register/Register';

const RouteFile = () => {
    return(
        <>
            <Routes>
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/register' element={<Register />} />
                <Route exact path='/forgot-password' element={<ForgotPassword />} />
                <Route exact path='/profile' element={<Profile />} />
                <Route exact path='/' element={<HomePage />} />
            </Routes>
        </>
    );
}

export default RouteFile;