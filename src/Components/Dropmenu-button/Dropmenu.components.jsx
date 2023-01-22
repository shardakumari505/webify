import React from "react";
import './Dropmenu.styles.scss';

const Dropmenu = ({nextblock}) => {
    return(
        <div className="dashboard-container-middle">
            <a className="dropdown" href={`#${nextblock}`}><span className="fa fa-chevron-down chevron"></span></a>
        </div>
    )
}

export default Dropmenu;