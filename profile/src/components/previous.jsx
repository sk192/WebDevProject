import Button from "@restart/ui/esm/Button";
import React from "react";

function Prev(props){
    return(
        <Button onClick={props.toggle} disabled={props.active} className="btn">
            <i className="fa fa-angle-left" style={{backgroundColor:""}}></i>
        </Button>

            
    )
}

export default Prev;