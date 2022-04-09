import axios from "axios";
import { useEffect, useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import Fields from "../../Components/Strategies/Fields/Fields";

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
                    <form>
                    {fields ? fields.map((item, key) => {
                        if(item.type !== "metaData")
                            return <Fields key={key} field_type = {item.type} field_label = {item.label}
                            field_default = {item.default} />
                        return null
                    }) : <p>No Fields</p>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HomePage;