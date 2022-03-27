import Categories from "../Strategies/Categories";

const SideBar = (props) => {
    return(
        <div className=" sidebar-equity-genie col-xl-4">
            <div className="card mb-4 mb-xl-0">
                <div className="card-header">Categories</div>
                <div className="card-body text-center">
                    <Categories updateName={props.updateName} />
                </div>
            </div>
        </div>
    );
}

export default SideBar;