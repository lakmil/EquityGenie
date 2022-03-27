import { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import Loader from "../Loader/Loader";

const Strategies = (props) => {


    useEffect(() => {
        
    }, [])

    

    return(
        <div className="equity-genie-strategies-list">
            <ListGroup>
                {props.strategies && props.category ? props.strategies.filter(item => item.category === props.category)
                .map((item, index) => {
                    return <ListGroup.Item onClick={() => props.updateName(item.name)} key={index}>{item.name}</ListGroup.Item>
                }) : <Loader />
                }
            </ListGroup>
        </div>
    )
}

export default Strategies