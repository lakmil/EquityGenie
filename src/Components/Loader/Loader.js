import { Spinner } from "react-bootstrap"

const Loader = () => {
    return(
        <div className="equity-genie-loader">
            <Spinner animation="grow" variant="dark" />
        </div>
    )
}

export default Loader;