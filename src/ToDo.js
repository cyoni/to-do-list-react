import React from "react"

function ToDo (props){

    return (
        <div>
            <p>
            <input type="checkbox" checked={props.item.isDone}/>
             {props.item.task}</p>
            <p>Done: {props.item.isDone}</p>
            <hr/>   
        </div>
    )
}




export default ToDo