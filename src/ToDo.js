import React from "react"

function ToDo (props){

    const completedStyle = {
        fontStyle: "italic",
        textDecoration: "line-through"
    }

    return (
        <div>
            <input type="checkbox" 
                checked={props.item.completed}
                onChange={() => props.handleClick(props.item.id)}/>
                <span style={props.item.completed ? completedStyle : null}>{props.item.task}</span>
            <hr/>   
        </div>
    )
}

export default ToDo