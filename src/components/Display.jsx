import React, { useState, useEffect } from "react";
import Task from "./Task";


function Display(props) {

    return (
        <div className="words">
            {
                props.outputText.map(item => {
                    return <Task item={item} />
                    //       <div>
                    //       <input type="text" name="view" id="view" value={item} onChange={(e) => console.log(e.target.value)} />
                    //       <button onClick={handleEditChange}>Edit</button>
                    //       </div>
                }
                )
            }
        </div>
    );
}

export default Display;