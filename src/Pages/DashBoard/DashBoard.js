import axios from 'axios';
import { useEffect, useState } from 'react';

var KiteConnect = require('kiteconnect').KiteConnect

const DashBoard = () => {

    const [initialState, setInitialState] = useState({})

    useEffect(() => {
        getBrokerDetails()
    }, [])

    async function getBrokerDetails() {
        axios.get('/user/broker-info')
        .then(res => {
            setInitialState(res.data)
            localStorage.setItem("brokerData", JSON.stringify(res.data))
        })
        .catch(err => console.log("Broker Info not found: " + err))
    } 

    function handleButton() {
        console.log(initialState.appKey)
        var kc = new KiteConnect({
            api_key: initialState.appKey
        });
        const login_url = kc.getLoginURL()
        window.location.href = login_url;          
    }

    return(
        <div className="equity-genie-dashboard container ">
            <div className='zerodha-login-button'>
                <button className="btn btn-primary" onClick={handleButton} type="button">Login to your Broker</button>
            </div>
        </div>
    );
}

export default DashBoard