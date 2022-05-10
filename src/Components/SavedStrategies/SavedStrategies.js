import axios from "axios";
import { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const SavedStrategies = (props) => {

    const [savedStrategies, setSavedStrategies] = useState(null);
    const [strategyNames, setStrategyNames] = useState([]);

    useEffect(() => {
        async function getStrategyDetails() {
            axios.get('http://localhost:4000/saved_strategies')
            .then(res => {
                console.log(res.data)
                setSavedStrategies(res.data);
            })
            .catch(err => {
                console.log("Strategy not found: "+err)
            })
        } 
        getStrategyDetails()
    }, [])

    return(
        <div className="equity-genie-saved-strategies">
            <ListGroup>
                {
                    savedStrategies && savedStrategies.length > 0 ? 
                    savedStrategies.map((item,index) => {
                        console.log(item)
                        return <ListGroupItem key={index}>{item.name}</ListGroupItem>
                    }) : <li>No Strategies</li>
                }
            </ListGroup>
        </div>
    )
}

export default SavedStrategies;