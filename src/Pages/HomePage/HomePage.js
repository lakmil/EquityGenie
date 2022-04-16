import axios from "axios";
import { useEffect, useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import Fields from "../../Components/Strategies/Fields/Fields";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const HomePage = () => {

    const [fields, setFields] = useState(null);
    const [strategyName, setStrategyName] = useState(null);
    const [filteredValues, setFilteredValues] = useState(null);
    const [post, setPost] = useState(false)

    useEffect(() => {
        async function getStrategyDetails() {
            axios.get('/user/strategy/momentum')
            .then(res => {
                // setFields(res)
                // localStorage.setItem("brokerData", JSON.stringify(res.data))
            })
            .catch(err => {
                console.log("Broker Info not found: " + err)
                setPost(true)
            })
        } 
        getStrategyDetails()
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

    function isNumeric(num){
        return !isNaN(num)
    }

    function handleStrategyRequest(e) {
        e.preventDefault();
        const values = e.target.elements;
        console.log(values)
        const filtered_values = {}
        if(!filteredValues) {
            for (const element of e.target.elements) {
                if(element.name.length !== 0) {
                    const numeric = isNumeric(element.value)
                    let value = element.value
                    if(numeric) {
                        value = Number(value)
                    }
                    if(value === "true") 
                        value = 1;
                    else if(value === "false")
                        value = 0;
                    filtered_values[element.name] = value
                }
            }
            filtered_values['userId'] = JSON.parse(localStorage.getItem('userData')).userId
            // filtered_values['accessLevel'] = "NORMAL"
            filtered_values['type'] = strategyName;
            setFilteredValues(filtered_values)
        }
    }

    function strategyNameSubmit(e) {
        e.preventDefault();
        let filtered_values = filteredValues;
        filtered_values['name'] = e.target.elements.name.value;
        filtered_values = JSON.stringify(filteredValues);
        if(post) {
            axios.post('/user/strategy/momentum/', filtered_values, {
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(res => {
                console.log("Posted!")
            })
            .catch(err =>  {
                console.log("Not posted:"+err)
            })
        }
        else {
            axios.put('/user/strategy/momentum/', filtered_values, {
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(res => {
                console.log("Posted!")
            })
            .catch(err =>  {
                console.log("Not posted:"+err)
            })
        }
    }

    return (
        <div className="home-page-equity-genie container">
            <div className="row mt-4">
                <SideBar updateName={handleStrategyClick} />
                <div className="col-xl-8 equity-genie-stratigies">
                    <h3>{strategyName}</h3>
                    <form id="form-strategy-fields" onSubmit={handleStrategyRequest}>
                    <table className="table table-borderless" >
                        <tbody>
                            {fields ? fields.map((item, key) => {
                                if(item.type !== "metaData")
                                    return  <tr key={key}><Fields field_type = {item.type} field_label = {item.label}
                                        field_default = {item.default} meta_type = {item.metaType} field_id = {item.id}  /></tr>
                                return null
                            }) : <tr><td>Choose a Strategy</td></tr>}
                        </tbody>
                    </table>
                    {/* {fields ? <input type="submit" className="btn btn-primary" name="update" value ="Save Changes" /> : null} */}
                        {fields ?
                            <Popup
                                trigger={<button className="btn btn-primary"> Save Changes </button>}
                                modal
                                nested
                            >
                            {close => (
                                <div className="modal-1">
                                    <button className="close" onClick={close}>
                                    &times;
                                    </button>
                                    <div className="header"> Enter Strategy Name </div>
                                    <div className="content">
                                    {' '}
                                    </div>
                                    <div className="actions">
                                    <form onSubmit={strategyNameSubmit}>
                                        <input className="form-control" type = "text" name="name" placeholder="Enter Strategy Name" required />
                                    <button
                                        className="btn btn-primary mt-4"
                                        // onClick={strategyNameSubmit}
                                    >
                                        Submit
                                    </button>
                                    </form>
                                    </div>
                                </div>
                            )}
                        </Popup>
                        : 
                        null}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HomePage;