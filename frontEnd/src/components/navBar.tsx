import { useEffect } from "react"
import userImg from "../assets/userImage.png"
import imgUploadFigure from "../assets/uploadImage.png"
import chatImg from "../assets/chatImage.png"

export default function(){
    
    return <>
    <div id="navBarBox">
        <div className="buttonBox">
            <button className="navButton"><img src={imgUploadFigure}></img></button>
        </div>
        <div className="buttonBox">
            <button className="navButton"><img src={chatImg}></img></button>
        </div>
        <div className="buttonBox">
            <button className="navButton"><img src={userImg}></img></button>
        </div>
    </div>
    </>
}