import { FormEventHandler, HtmlHTMLAttributes } from "react"

export default function(){

    // Acabou que não precisei sofrer com o github. Consegui conter todas as informações 
    // só na imagem, e depois disso tirei o Content Header do fetch.
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