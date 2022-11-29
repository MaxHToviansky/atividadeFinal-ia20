import { FormEventHandler } from "react"

export default function(){

    const uploadImage: FormEventHandler<HTMLFormElement> = async ev => {
        ev.preventDefault()
        const {_name, type } = ev.currentTarget
        const uploadReq = await fetch('/api/upload/image', {
            method: "POST",
            headers: { 'Content-Type': 'multipart/form-data'},
            body: new FormData(document.querySelector("form") as HTMLFormElement)
        })
        console.log(uploadReq)
    }

    return <>
    <form onSubmit={uploadImage}>
        <input type="file" name="file"></input>
        <input type="text" name="name"></input>
        <input type="text" name="type"></input>
        <button type="submit">submit</button>
    </form>
    </>
}