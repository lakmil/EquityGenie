import { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import Loader from "../Loader/Loader";

const Strategies = (props) => {


    useEffect(() => {
        // axios.get('/system/strategy/template?name=NineTwentyStrategy', {
        //     auth: {
        //         username: "frontend@equitygenie.in",
        //         password: "WLXsviU6imQez25pnU"
        //     }
        // })
        // .then(res => {
        //     console.log(res.data)
        //     // setStrategies(res.data.categories)
        // })
        // .catch(err => console.log("Error"))
    }, [])

    return(
        <div className="equity-genie-strategies">
            <ListGroup>
                {props.strategies && props.category ? props.strategies.filter(item => item.category === props.category)
                .map((item, index) => {
                    return <ListGroup.Item key={index}>{item.name}</ListGroup.Item>
                }) : <Loader />
                }
            </ListGroup>
        </div>
    )
}

export default Strategies