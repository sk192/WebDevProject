import Button from "@restart/ui/esm/Button";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Next(props){
    return(
        <Button onClick={props.toggle} disabled={props.active} className="btn"><FontAwesomeIcon icon="FaAngleLeft" /></Button>

    );
}

export default Next;