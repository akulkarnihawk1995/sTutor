import React from "react";
import  "./Selection.css";
//{props.match.params.id.slice(3, -1)}
function Selection(props){

    function handleClick(type){
        if(type==="new"){
            props.history.push("/new/"+ props.match.params.id);
        }
        else if(type==="join"){
            props.history.push("/join/"+ props.match.params.id);
        }
    }
    return <div id="selector-div" className="container">
        <div className="selector-option-div with-border-right" onClick={()=> handleClick("new")}>Tutor New Discussion</div>
        <div className="selector-option-div" onClick={()=> handleClick("join")}>Join Existing Discussion</div>
    </div>
}

export default Selection;