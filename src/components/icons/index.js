import React from "react";
import gticons from "./Vectorgithub.svg";
import linkedin from "./Vectordribble.svg";
import instagram from "./Vectortwitter.svg";
import "./index.css"

function Icons() {
    return(
       <div className="icons" >
        <img className="icon" src={gticons} alt="github" />
        <img className="icon" src={linkedin} alt="linkedin" />
        <img className="icon" src={instagram} alt="instagram" />
       </div>
    )
}

export default Icons;