import axios from "axios";
import { useState } from "react";
import SavedStrategies from "../SavedStrategies/SavedStrategies";
import Categories from "../Strategies/Categories";

const SideBar = (props) => {

    const [displayBody, setDisplayBody] = useState(true)

    useState(() => {
    
    }, [])

    function handleBody() {
        displayBody ? setDisplayBody(false) : setDisplayBody(true)
    }

    return(
        <div className=" sidebar-equity-genie col-xl-4">
            <div className="card mb-4 mb-xl-0">
                <div className="card-header">Saved Strategies</div>
                <div className="card-body text-center">
                    <SavedStrategies />
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