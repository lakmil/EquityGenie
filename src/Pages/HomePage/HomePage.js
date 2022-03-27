import axios from "axios";
import { useEffect, useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";

const HomePage = () => {

    const [fields, setFields] = useState(null);

    useEffect(() => {

    }, [fields])

    function handleStrategyClick(name) {
        axios.get(`/system/strategy/template?name=${name}`, {
            auth: {
                username: "frontend@equitygenie.in",
                password: "WLXsviU6imQez25pnU"
            }
        })
        .then(res => {
            setFields(res.data)
            console.log(res.data)
        })
        .catch(err => console.log("Error"))
    }

    return (
        <div className="home-page-equity-genie container">
            <div className="row">
                <SideBar updateName={handleStrategyClick} />
                <div className="col-xl-8 equity-genie-stratigies">
                    {fields !== null ? Object.entries(fields).map(([key, value], i) => {
                        return (
                            <div key={key}>
                                {key} : {value}
                            </div>
                        )
                    }) : <p>Choose a Strategy</p>}
                </div>
            </div>
        </div>
    )
}

export default HomePage;