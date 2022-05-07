import axios from "axios";
import { useEffect } from "react";

const SavedStrategies = (props) => {

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
            <ul>
                {
                    props.name.lenngth > 0 ? 
                    props.name.map((item,index) => {
                        return <li key={index}>{item}</li>
                    }) : <li>No Strategies</li>
                }
            </ul>
        </div>
    )
}

export default SavedStrategies;