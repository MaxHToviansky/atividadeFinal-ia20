import { FormEventHandler, HtmlHTMLAttributes } from "react"

export default function(){

    const uploadImage: FormEventHandler<HTMLFormElement> = async ev => {
        ev.preventDefault()
        const imageUploadReq = await fetch("/api/upload/image", {
            method: "POST",
            body: new FormData(document.querySelector("#imagefile") as HTMLFormElement)
        })
        console.log( new FormData(document.querySelector("form") as HTMLFormElement))
    }

    return <>
    <form onSubmit={uploadImage} encType="multipart/form-data" id="imagefile">
        <input type="file" name="avatar" ></input>
        <button type="submit">submit</button>
    </form>
    </>
}