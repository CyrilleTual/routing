import React from 'react'

function MyInput(props) {


    if(props.toto === "input"){
        return (
            <input  
                    className = {props.class} 
                    type      = {props.type}
                    id        = {props.id}
                    name      = {props.name}
                    value     = {props.value}
                    onChange  = {props.change}
            />
        ) 
    }else if (props.toto === "textArea"){
        return (
            <textarea 
                    className = {props.class} 
                    id        = {props.id}
                    name      = {props.name}
                    value     = {props.value}
                    onChange  = {props.change}
                    rows      = {props.rows}
                    cols      = {props.cols}  
            />
        ) 
    }


    
}

export default MyInput


