import react from "react";
import noteContext from "./notecontext";

const NoteState= (props)=>{
     
    const state={
        "name": "tarun",
        "class": "10"
    }

    return(
        <noteContext.Provider value={state}>

                {props.children}
        </noteContext.Provider>
    )
    

}

export default NoteState;