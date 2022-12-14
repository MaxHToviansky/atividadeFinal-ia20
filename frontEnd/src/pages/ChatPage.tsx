import React, { FormEventHandler, useState } from "react"
import { render } from "react-dom";

export default function () {
    const [display, setDisplay] = useState([<div key={0}>Start Of Chat</div>]);
    
    let data = <div></div>
    var ws = new WebSocket('ws://127.0.0.1:8090')

    
    ws.addEventListener("message", ev => {
        data = document.createElement("div")
        console.log(data)
        let temp = display
        temp.push(data)
        setDisplay(temp)
        console.log(display.flatMap)
    })

    const wsEvent: FormEventHandler<HTMLFormElement> = async ev => {
        ev.preventDefault
        let currentMessage = ev.currentTarget.message.value
        console.log(currentMessage)
        ws.send(currentMessage)
        currentMessage = ""
    }
    return <>
        
        <form onSubmit={wsEvent}>
            <input name="message"></input>
            <button type="submit"></button>
        </form>
        {display.map}
        
    </>
}