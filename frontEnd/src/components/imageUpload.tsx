import { FormEventHandler, HtmlHTMLAttributes } from "react"

export default function(){

    const uploadImage: FormEventHandler<HTMLFormElement> = async ev => {
        ev.preventDefault()
        const {_name, type } = ev.currentTarget
        const imageUploadReq = await fetch('https://zeppzeppelin-special-system-xqv9jp66p4xfgw6-8080.preview.app.github.dev/api/upload/image', {
            method: "POST",
            headers: { 'Content-Type': 'multipart/form-data'},
            body: new FormData(document.querySelector("#imagefile") as HTMLFormElement)
        })
        const datauploadReq = await fetch('https://zeppzeppelin-special-system-xqv9jp66p4xfgw6-8080.preview.app.github.dev/api/upload/image', {
            method: "POST",
            headers: { 'Content-Type': 'multipart/form-data'},
            body: JSON.stringify({
                name: _name.value,
                type: type.value
            })
            
        })
        console.log(datauploadReq.body)
        console.log( new FormData(document.querySelector("form") as HTMLFormElement))
    }

    return <>
    <form onSubmit={uploadImage}>
        <input type="file" name="uploaded_file" id="imagefile"></input>
        <input type="text" name="name"></input>
        <input type="text" name="type"></input>
        <button type="submit">submit</button>
    </form>
    </>
}