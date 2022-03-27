import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";

const BrokerInfo = () => {

    let navigate = useNavigate();

    const [userData, setUserData] = useState(null);
    const [clientID, setClientID] = useState(null);
    const [appKey, setAppKey] = useState(null);
    const [appSecret, setAppSecret] = useState(null);
    const [post, setPost] = useState(false)

    useEffect(() => {
        async function getBrokerDetails() {
            axios.get('/user/broker-info')
            .then(res => {
                setInitialState(res)
                localStorage.setItem("brokerData", JSON.stringify(res.data))
            })
            .catch(err => {
                console.log("Broker Info not found: " + err)
                setPost(true)
            })
        } 

        async function getUserDetails() {
            axios.get('/user')
            .then(res => {
                setUserData(res.data);
                localStorage.setItem("userData", JSON.stringify(res.data))
            })
        .catch(err => console.log(err));
        }


        getBrokerDetails();
        getUserDetails();
    }, [])

    function setInitialState(res) {
        const data = res.data
        setClientID(data.clientID)
        setAppKey(data.appKey)
        setAppSecret(data.appSecret)
    }

    function handleProfileInfo() {
        navigate('/profile')
    }

    function handleClientID(e) {
        setClientID(e.target.value)
    }

    function handleAppKey(e) {
        setAppKey(e.target.value)
    }

    function handleAppSecret(e) {
        setAppSecret(e.target.value)
    }

    function handleBrokerInfo(e) {

        const data = {
            "userId": userData.userId,
            "broker": "zerodha",
            "clientID": clientID,
            "appKey": appKey,
            "appSecret": appSecret,
            "requestToken": null
        }
        if(post) {
            axios.post('/user/broker-info',data)
            .then(res => {
                console.log("Broker Info Posted")
            })
            .catch(err =>  {
                console.log("Broker Info not posted:  "+err.response.data.detail)
            })
        }
        else {
            axios.put('/user/broker-info',data)
            .then(res => {
                console.log("Broker Info pdated")
            })
            .catch(err =>  {
                console.log("Broker Info not updated:  "+err.response.data.detail)
            })
        }
    }

    return(
        <div className="broker-info-equity-genie user-info container">
            {!userData ? <Loader /> : 
            <div className="row">
                <div className="col-xl-8">
                    <div className="card mb-4">
                        <div className="card-header">
                            Broker Details
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label className="small mb-1">UserId</label>
                                    <input disabled className="form-control" id="inputUsername" type="text" placeholder="Enter your username" value={userData.userId} />
                                </div>
                                <div className="mb-3">
                                    <label className="small mb-1">Broker</label>
                                    <input disabled className="form-control" id="inputBroker" type="text" placeholder="Enter your Broker" value="Zerodha" />
                                 </div>
                                <div className="mb-3">
                                    <label className="small mb-1">Client Id</label>
                                    <input className="form-control" id="inputClientId" type="text" onChange={handleClientID} placeholder="Enter your ClientId" value={clientID} />
                                </div>
                                <div className="mb-3">
                                    <label className="small mb-1">App Key</label>
                                    <input className="form-control" id="inputAppKey" type="text" onChange={handleAppKey} placeholder="Enter your App Key" value={appKey} />
                                </div>
                                <div className="mb-3">
                                    <label className="small mb-1">App Secret</label>
                                    <input className="form-control" id="inputAppSecret" type="password" onChange={handleAppSecret} placeholder="Enter your App Secret" value={appSecret} />
                                </div>
                                <div className='row gx-3 mb-3'>
                                    <div className="col-md-6">
                                        <button className="btn btn-primary" onClick={handleBrokerInfo} type="button">Save changes</button>
                                    </div>
                                    <div className="col-md-6">
                                        <button className="btn btn-primary" onClick={handleProfileInfo} type="button">Profile Info</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> }
        </div>
    )
}

export default BrokerInfo;