import React from "react"

function ContactCard (props){

    return (
        <div>
            <p>Name: {props.person.name}</p>
            <p>Email: {props.person.email}</p>
        </div>
    )
}

export default ContactCard