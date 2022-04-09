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
            <div className="row mt-4">
                <SideBar updateName={handleStrategyClick} />
                <div className="col-xl-8 equity-genie-stratigies">
                    <h3>{strategyName}</h3>
                    <form>
                    {fields ? fields.map((item, key) => {
                        if(item.type !== "metaData")
                            return  <Fields field_type = {item.type} field_label = {item.label}
                                field_default = {item.default} meta_type = {item.metaType}  />
                        return null
                    }) : <p>Choose a Strategy</p>}
                    {fields ? <input type="submit" className="btn btn-primary" name="update" value ="Update" /> : null}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HomePage;