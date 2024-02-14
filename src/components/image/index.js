import React from "react";
import "./index.css";
import riad from "./riad.png"

function ImageRiad() {
    return(
        <div className="image" >
             <img className="img" src={riad} alt="riad" />
        </div>
    )
}
export default ImageRiad;