import axios from "axios";
import { useEffect } from "react";

const SavedStrategies = () => {

    useEffect(() => {
        async function getStrategyDetails() {
            axios.get(`/user/strategy/saved/all`)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log("Strategy not found: " + err)
            })
        } 
        getStrategyDetails()
    })

    return(
        <div className="equity-genie-saved-strategies">
            <p>No Strategies</p>
        </div>
    )
}

export default SavedStrategies;