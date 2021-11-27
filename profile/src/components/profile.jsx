import React from "react";

function Profile(props){
    return(
        <div className="projects">
            <img src={props.img} alt="images" width="400px" height="400px" />
            <br/>
            <a href={props.link}>Github</a>
            <h1>{props.name}</h1>
        </div>
    );
}

export default Profile;