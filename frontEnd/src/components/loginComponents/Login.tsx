import { FormEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import Logoff from "./Logoff";
import Logged from "./Logged"


export default function () {

  let navigate = useNavigate()
  const enviarDados: FormEventHandler<HTMLFormElement> = async ev => {
    ev.preventDefault()
    const { email, password } = ev.currentTarget


    const request = await fetch(`/api/login/`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    })

    const responseData = await request.json()

    if (request.status >= 200 && request.status <= 299) {
      sessionStorage.setItem("token", responseData.sesid)
      alert("PARABAEINZ!")
      return
    }

    if (responseData.error) {
      alert(responseData.error)
      return
    }

    alert("Cara! deu um erro tão foda, que eu nem sei o que foi!")
  }

  console.log(sessionStorage.token)

  if (sessionStorage.token == undefined) {
    console.log(sessionStorage.token)
    return <>
      <div id="loginBox">
        <form onSubmit={enviarDados} id="loginForm">
          <h1>Login</h1>
          <input name="email" placeholder="email" />
          <input name="password" placeholder="password" />
          <div id="loginButtonDiv">
            <button type="submit" >Entrar</button>
            <button type="button" onClick={() => navigate("/Cadastro")}>Cadastrar-se</button>
            <button type="button" onClick={() => navigate("/")} id="buttonHome">Pagina inicial</button>
          </div>
        </form>
      </div>
    </>
  }else{
    console.log(sessionStorage.token)
    return <>
      <div id="loginBox">
        <form id="loginForm">
          <h1>User</h1>
          <Logged/>
          <div id="loginButtonDiv">
            <button type="button" onClick={() => navigate("/Teste")}>Teste</button>
            <button type="button" onClick={() => navigate("/Update")}>Alterar Dados</button>
            <button type="button" onClick={() => navigate("/")} id="buttonHome">Pagina inicial</button>
            <Logoff/>
          </div>
        </form>
      </div>
    </>
  }
}
