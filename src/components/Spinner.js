import React from "react";
import "./Spinner.css"; 
const Spinner =()=>{
    return(
        <div className="flex flex-col space-y-2 item-center">
            <div className="Spinner"></div>
            <p className="bg-bgDark text-lg font-semibold">Loading....</p>
            </div>
    )
}

export default Spinner;