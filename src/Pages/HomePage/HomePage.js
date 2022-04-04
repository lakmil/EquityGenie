import axios from "axios";
import { useEffect, useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import Fields from "../../Components/Strategies/Fields/Fields";

const HomePage = () => {

    const [fields, setFields] = useState(null);
    const [strategyName, setStrategyName] = useState(null);

    useEffect(() => {

    }, [fields])

    function handleStrategyClick(name) {
        setStrategyName(name)
        axios.get(`/system/strategy/template?name=${name}`, {
            auth: {
                username: "frontend@equitygenie.in",
                password: "WLXsviU6imQez25pnU"
            }
        })
        .then(res => {
            setFields(res.data)
        })
        .catch(err => {
            setFields(null)
            console.log(err)
        })
    }

    return (
        <div className="home-page-equity-genie container">
            <div className="row">
                <SideBar updateName={handleStrategyClick} />
                <div className="col-xl-8 equity-genie-stratigies">
                    <Fields fields = {fields} strategyName = {strategyName} />
                </div>
            </div>
        </div>
    )
}

export default HomePage;