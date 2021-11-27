import Button from "@restart/ui/esm/Button";
import React from "react";
// import { FiArrowLeft } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Prev(props){
    return(
        <Button onClick={props.toggle} disabled={props.active} className="btn"><FontAwesomeIcon icon="FaAngleLeft" /></Button>
    )
}

export default Prev;