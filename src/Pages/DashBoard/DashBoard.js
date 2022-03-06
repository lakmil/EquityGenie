var KiteConnect = require('kiteconnect').KiteConnect

const DashBoard = () => {

    function handleButton() {
        console.log("Entered")
        var kc = new KiteConnect({
            api_key: "d6dhumvfvecb3f7h"
        });
        const login_url = kc.getLoginURL()
        console.log(login_url)
        window.location.href = login_url;          
    }

    return(
        <div className="equity-genie-dashboard container ">
            <h1>Dashboard</h1>
            <button className="btn btn-primary" onClick={handleButton} type="button">Login to your Broker</button>
        </div>
    );
}

export default DashBoard