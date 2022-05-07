import axios from "axios";
import { useState } from "react";
import SavedStrategies from "../SavedStrategies/SavedStrategies";
import Categories from "../Strategies/Categories";

const SideBar = (props) => {

    const [displayBody, setDisplayBody] = useState(true)
    const [savedStrategies, setSavedStrategies] = useState(null);
    const [strategyNames, setStrategyNames] = useState([]);

    useState(() => {
        async function getStrategyDetails() {
            axios.get('http://localhost:4000/saved_strategies')
            .then(res => {
                setSavedStrategies(res);
                setStrategyNames([...strategyNames, res.name]);
            })
            .catch(err => {
                console.log("Strategy not found: "+err)
            })
        } 
        getStrategyDetails()
    })

    function handleBody() {
        displayBody ? setDisplayBody(false) : setDisplayBody(true)
    }

    return(
        <div className=" sidebar-equity-genie col-xl-4">
            <div className="card mb-4 mb-xl-0">
                <div className="card-header">Saved Strategies</div>
                <div className="card-body text-center">
                    <SavedStrategies name = {strategyNames} />
                </div>
                <div className="card-header" onClick={handleBody}>Categories</div>
                {displayBody ? 
                    <div className="card-body text-center">
                        <Categories updateName={props.updateName} />
                    </div> : null
                }
            </div>
        </div>
    );
}

export default SideBar;