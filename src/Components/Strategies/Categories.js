import axios from "axios";
import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import Loader from "../Loader/Loader";
import Strategies from "./Strategies";

const Categories = (props) => {

    const [categories, setCategories] = useState(null);
    const [strategies, setStrategies] = useState(null);

    useEffect(() => {
        axios.get('/system/strategy', {
            auth: {
                username: "frontend@equitygenie.in",
                password: "WLXsviU6imQez25pnU"
            }
        })
        .then(res => {
            setCategories(res.data.categories)
            setStrategies(res.data.strategies)
        })
        .catch(err => {
            console.log("Error")
            return <div className="no-categories">No Categories Found</div>
        })
    }, [])

    return(
        <div className="equitigy-genie-categories">
            <ListGroup>
                {categories ? categories.map((item,index) => {
                    return (
                        <div key={index} className="list">
                            <ListGroup.Item  className="category-item">{item}</ListGroup.Item>
                            <Strategies updateName = {props.updateName} category = {item} strategies = {strategies} />
                        </div>
                    )
                }) : <Loader />}      
            </ListGroup>
        </div>
    );
    
}

export default Categories;