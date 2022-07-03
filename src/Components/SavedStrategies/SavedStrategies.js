import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import {SavedStrategyUpdate} from '../../ContextProvider/UpdateSavedStrategiesProvider';

const SavedStrategies = (props) => {

    const [savedStrategies, setSavedStrategies] = useState(null);
    const {updateSavedStrategies, setUpdateSavedStrategies} = useContext(SavedStrategyUpdate);
    const [flag, setFlag] = useState(null);
    // const {data, dispatch} = useContext(HomeContext)

    useEffect(() => {
        async function getStrategyDetails() {
            axios.get('http://localhost:4000/saved_strategies')
            .then(res => {
                setSavedStrategies(res.data);
            })
            .catch(err => {
                console.log("Strategy not found: "+err)
            })
        } 
        getStrategyDetails()
        setFlag(updateSavedStrategies)
        setUpdateSavedStrategies(null);

    }, [flag,updateSavedStrategies,setUpdateSavedStrategies])

    return(
        <div className="equity-genie-saved-strategies">
            <ListGroup>
                {
                    savedStrategies && savedStrategies.length > 0 ? 
                    savedStrategies.map((item,index) => {
                        return <ListGroupItem key={index} onClick = {() => props.updateName(item.type, item.name)} >{item.name}</ListGroupItem>
                    }) : <li>No Strategies</li>
                }
            </ListGroup>
        </div>
    )
}

export default SavedStrategies;