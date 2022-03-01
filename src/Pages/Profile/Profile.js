import axios from 'axios';
import React , {useState, useEffect} from 'react'
import SideBar from '../../Components/SideBar/SideBar';

const Profile = () => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            
        }, 3000);
        if(!userData)
            getData()
    }, [userData])

    function getData() {
        axios.get('/user')
        .then(res => {
            setUserData(res.data);
            localStorage.setItem("userData", JSON.stringify(res.data))
        })
        .catch(err => console.log(err));
    }

    
    
    return(
        <div className="profile-page container">
            {!userData ? <p>Loader...</p> : 
            <div>
                <div class="row">
                    <SideBar />
                    <div class="col-xl-8">
                    <div className="card mb-4">
                    <div className="card-header">Profile Details</div>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label className="small mb-1" for="inputUsername">UserId</label>
                                <input disabled className="form-control" id="inputUsername" type="text" placeholder="Enter your username" value={userData.userId} />
                            </div>
                            <div className="row gx-3 mb-3">
                                <div className="col-md-6">
                                    <label className="small mb-1" for="inputFirstName">First name</label>
                                    <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value={userData.fName} />
                                </div>
                                <div className="col-md-6">
                                    <label className="small mb-1" for="inputLastName">Last name</label>
                                    <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" value={userData.lName} />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="small mb-1" for="inputEmailAddress">Email address</label>
                                <input disabled className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value={userData.userName} />
                            </div>
                            <div className="row gx-3 mb-3">
                                <div className="col-md-6">
                                    <label className="small mb-1" for="inputPhone">Phone number</label>
                                    <input className="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value={userData.mobile} />
                                </div>
                            </div>
                            <div className='row gx-3 mb-3'>
                            <div className="col-md-6">
                            <button className="btn btn-primary" type="button">Save changes</button>
                            </div>
                            <div className="col-md-6">
                            <button className="btn btn-primary" type="button">Broker Info</button>
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