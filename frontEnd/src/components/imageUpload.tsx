import { FormEventHandler } from "react"

export default function(){

    const uploadImage: FormEventHandler<HTMLFormElement> = async ev => {
        ev.preventDefault()
        const {_name, type } = ev.currentTarget
        
    }

    return <>
    <form onSubmit={uploadImage}>
        <input type="file" ></input>
        <input type="text" name="name"></input>
        <input type="text" name="type"></input>
        <button type="submit">submit</button>
    </form>
    </>
}