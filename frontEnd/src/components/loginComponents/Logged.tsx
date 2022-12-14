export default function () {
    let name = "none"
    let email = "none"

    async function sessionVerify() {
        const request = await fetch(`/api/logged/${sessionStorage.getItem('token')}`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                sesid: sessionStorage.getItem('token')
            })
        })
        if (request.status >= 200 && request.status <= 299) {
            const user = await request.json()
            name = user.name
            email = user.email
        }
    }
    
    if (name != "none" && email != "none") {
        return <>
            <div>Nome: {name}<br />Email: {email}</div>
        </>
    } else {
        return <>
            <div>Awaiting Fetch...</div>
        </>
    }

}