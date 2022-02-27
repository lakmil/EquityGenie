import axios from 'axios';
import React , {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const Profile = () => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        if(!userData)
            getData()
    }, [userData])

    function getData() {
        axios.get('/user')
        .then(res => {
            setUserData(res.data);
        })
        .catch(err => console.log(err));
    }
    
    return(
        <div className="profile-page">
            {!userData ? <p>Loader...</p> : 
            <div>
                <Link to={'/'} onClick = {() => localStorage.clear()}>Logout</Link>
                <h1>Profile</h1>
                <h1>Username: {userData.userName}</h1>
                <h1>First Name: {userData.fName}</h1>
                <h1>Last Name: {userData.lName}</h1>
                <h1>Mobile: {userData.mobile}</h1> 
            </div> }
        </div>
    );
}

export default Profile;