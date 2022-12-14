import { FormEventHandler } from "react"

export default function () {
    const display = [<div>Start Of Chat</div>]

    var ws = new WebSocket('ws://127.0.0.1:8090')

    ws.addEventListener("message", ev => {
        const data = <div>{ev.data}</div>
        display.push(data)
    })

    const wsEvent: FormEventHandler<HTMLFormElement> = async ev => {
        ev.preventDefault
        let currentMessage = ev.currentTarget.message.value
        ws.send(currentMessage)
        currentMessage = ""
    }
    return <>
        <div>
        <form onSubmit={wsEvent}>
            <input name="message"></input>
            <button type="submit"></button>
        </form>
        {display}
        </div>
    </>
}