import axios from 'axios';
import React , {useState, useEffect} from 'react'
import SideBar from '../../Components/SideBar/SideBar';
import { useNavigate } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';


const Profile = () => {

    let navigate = useNavigate();

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

    function handleBrokerInfo() {
        navigate('/broker-info')
    }

    function handleFirstName(e) {
        const name = e.target.value
        setUserData(prevState => ({
            ...prevState,
            fname: name
        }));
    }

    
    
    return(
        <div className="profile-page-equity-genie user-info container">
            {!userData ? <Loader /> : 
            <div>
                <div className="row">
                    <SideBar />
                    <div className="col-xl-8">
                    <div className="card mb-4">
                    <div className="card-header">Profile Details</div>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label className="small mb-1">UserId</label>
                                <input disabled className="form-control" id="inputUsername" type="text" placeholder="Enter your username" value={userData.userId} />
                            </div>
                            <div className="row gx-3 mb-3">
                                <div className="col-md-6">
                                    <label className="small mb-1">First name</label>
                                    <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" onChange={handleFirstName} value={userData.fName} />
                                </div>
                                <div className="col-md-6">
                                    <label className="small mb-1">Last name</label>
                                    <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" value={userData.lName} />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="small mb-1">Email address</label>
                                <input disabled className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value={userData.userName} />
                            </div>
                            <div className="row gx-3 mb-3">
                                <div className="col-md-6">
                                    <label className="small mb-1">Phone number</label>
                                    <input className="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value={userData.mobile} />
                                </div>
                            </div>
                            <div className='row gx-3 mb-3'>
                            <div className="col-md-6">
                            <button className="btn btn-primary" type="button">Save changes</button>
                            </div>
                            <div className="col-md-6">
                            <button className="btn btn-primary" onClick={handleBrokerInfo} type="button">Broker Info</button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
            </div>
        }
        </div>
    );
}

export default Profile;