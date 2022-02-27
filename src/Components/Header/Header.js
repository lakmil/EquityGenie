const Header = (props) => {
    return(
        <div className="equity-ginie-header">
            <div className="header-title">
                <a href="/"><strong>{props.headerTitle}</strong></a>
            </div>
            <div className="header-content">
                <p className="header-para"><strong>{props.headerContent}</strong></p>
            </div>
        </div>
    );
}

export default Header;