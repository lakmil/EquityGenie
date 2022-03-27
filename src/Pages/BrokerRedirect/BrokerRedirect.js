import axios from "axios";
import { useEffect } from "react";

const BrokerRedirect = () => {

    // const [initialState, setInitialState] = useState('')

    useEffect(() => {
        // setInitialState(JSON.parse(localStorage.getItem('brokerData')))
        const initialState = JSON.parse(localStorage.getItem('brokerData'));
        const request_token = searchParams("request_token");
        const action = searchParams("action")
        const status = searchParams("status")
        if(request_token && action === "login" && status === "success") {
           
            const data = {
                "userId": initialState.userId,
                "broker": "zerodha",
                "clientID": initialState.clientID,
                "appKey": initialState.appKey,
                "appSecret": initialState.appSecret,
                "requestToken": request_token
            }
            async function updateBrokerDetails() {
                axios.put('/user/broker-info', data)
                .then(res => {
                    console.log("Broker Info Updated")
                    localStorage.setItem("request_token", request_token)
                    window.location.href = "/"
                })
                .catch(err => console.log("Error: "+err));
            }
            updateBrokerDetails()
        }
    }, [])

    function searchParams(param) {
        return new URLSearchParams(window.location.search).get(param)
    }
    return(
        <div className="equity-genie-broker-redirect container">
            <h1>You Have been logged in!</h1>
        </div>
    )
}

export default BrokerRedirect;  