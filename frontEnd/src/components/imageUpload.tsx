import { FormEventHandler, HtmlHTMLAttributes } from "react"
import { useNavigate } from "react-router-dom"

export default function () {
    let navigate = useNavigate()
    // Acabou que não precisei sofrer com o github. Consegui conter todas as informações 
    // só na imagem, e depois disso tirei o Content Header do fetch.
    const uploadImage: FormEventHandler<HTMLFormElement> = async ev => {
        ev.preventDefault()
        const imageUploadReq = await fetch("http://127.0.0.1:8080/api/upload/image", {
            method: "POST",
            body: new FormData(document.querySelector("#imagefile") as HTMLFormElement)
        })
        console.log(new FormData(document.querySelector("form") as HTMLFormElement))
    }

    return <>
        <div id="uploadBox">
            <form onSubmit={uploadImage} encType="multipart/form-data" id="imagefile">
                <input type="file" name="avatar" ></input>
                <button type="submit">Submit</button>
                <button type="button" onClick={() => navigate("/")}>Pagina Inicial</button>
            </form>
        </div>
    </>
}