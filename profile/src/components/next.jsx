import Button from "@restart/ui/esm/Button";
import React from "react";

function Next(props){
    return(
        <Button onClick={props.toggle} disabled={props.active} className="btn1">
            <i class="fa fa-angle-right"></i>
            
        </Button>

    );
}

export default Next;