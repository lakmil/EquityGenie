import axios from "axios";
import { useEffect, useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import Fields from "../../Components/Strategies/Fields/Fields";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const HomePage = () => {

    const [fields, setFields] = useState(null);
    const [strategyName, setStrategyName] = useState(null);
    // const [categoryName, setCategoryName] = useState(null);
    const [filteredValues, setFilteredValues] = useState(null);
    // const [defaultValues, setDefaultValues] = useState(null);
    // const [getStrategy, setGetStrategy] = useState(null)

    useEffect(() => {
        
    }, [])

    function handleStrategyClick(name,category) {
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
        const filtered_values = {}
        if(!filteredValues) {
            for (const element of e.target.elements) {
                if(element.name.length !== 0) {
                    const numeric = isNumeric(element.value)
                    let value = element.value
                    if(numeric) {
                        value = Number(value)
                    }
                    filtered_values[element.name] = value
                }
            }
            filtered_values['userId'] = JSON.parse(localStorage.getItem('userData')).userId
            filtered_values['accessLevel'] = "NORMAL"
            filtered_values['type'] = strategyName;
            setFilteredValues(filtered_values)
        }
    }

    function strategyNameSubmit(e) {
        console.log("Entered");
        e.preventDefault();
        let filtered_values = filteredValues;
        filtered_values['name'] = e.target.elements.name.value;
        filtered_values = JSON.stringify(filteredValues);
        // const headers = {
        //     'Content-type': 'application/json'
        // }
        // console.log(filtered_values)
        // axios.post(`/user/strategy/${categoryName}/`, filtered_values, {
        //     headers: headers
        // })
        // .then(res => {
        //     console.log("Posted!")
        // })
        // .catch(err =>  {
        //     console.log("Not posted:"+err)
        // })

        //npm json server: dbs.json
        axios.post('http://localhost:4000/saved_strategies', filteredValues)
        .then(res => {
            alert("Posted")
        })
        .catch(err => {
            alert("Not Posted : "+err)
        })
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
                                        // onClick={close}
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