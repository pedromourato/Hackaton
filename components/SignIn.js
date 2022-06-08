import { useState } from "react"
import Link from "next/link"
import styles from "../styles/signIn.module.css"
export default function SignIn() {
    const [signIn, setSignIn] = useState({
        email: "",
        password: ""
    })

    const submit = async () => {

        const res = await fetch(
            '/api/signin/', {
            body: JSON.stringify(signIn),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        })
        const json = await res.json()
        console.log(json)
        if (res.status != 404) {
            localStorage.setItem('User', json.userId)
            localStorage.setItem('name', " "+json.name)
            console.log(localStorage)
            //const token = localStorage.getItem("tokena")
        }
    }

    const submit2 = async () => {
        console.log(createUser)
        const res = await fetch(
            '/api/signup/', {
            body: JSON.stringify(createUser),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        })
        const json = await res.json()
        console.log(json)
        console.log(json.message)
        console.log(json.errors)
        if (res.status != 404) {
            localStorage.setItem('User', json.userId)
            localStorage.setItem('name', " "+json.name)
            console.log(localStorage)
            //const token = localStorage.getItem("token")
        }
    }


    //qweasdzxc5@gmail.com
    //Danilo123456789=
    const [createUser, setCreateUser] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        captchaComplete: true
    })
    const [loginShow, setLoginShow] = useState(false);
    const [signUpShow, setSignUpShow] = useState(false);
    const [errs, setErrs] = useState("")
    return (
        <div>
        <div className={styles.loginCaixa}>
            <div className={styles.caixa}>
            {!signUpShow && !loginShow ?
                <div className={styles.botoes}>
                    <button className={styles.botaologin} onClick={() => setLoginShow((prev) => !prev)}>Login</button><br/>
                    <button className={styles.botaocadastro} onClick={() => setSignUpShow((prev) => !prev)}>Cadastro</button>
                </div>
                : ""
            }
            {signUpShow ? <div>


            </div> : ""}
            {loginShow ?
                <div><form onSubmit={(e) => { e.preventDefault() }}>
                    <div >
                        <p className={styles.para}>Your Email</p>
                        <input className={styles.email} placeholder="Your Email" onChange={(e) => setSignIn({ ...signIn, email: e.target.value })} type="email"></input>
                        <p className={styles.para}>Password</p>
                        <input className={styles.password} placeholder="Your Password" onChange={(e) => setSignIn({ ...signIn, password: e.target.value })} type="password"></input>
                        <p className={styles.para}><Link href="#">Forgot your password?</Link></p>
                        <input className={styles.buttonSign} onClick={() => submit()} value="Login" type="submit"></input>
                        <input value="X" onClick={() => setLoginShow((prev) => !prev)} type="submit"></input>
                    </div>
                </form></div>
                : ""
            }

            {signUpShow ?
                <div>
                    <form onSubmit={(e) => { e.preventDefault() }}>

                        <p className={styles.para}>Name</p>
                        <input className={styles.email} value={createUser.name} onChange={(e) => setCreateUser({ ...createUser, name: e.target.value })} type="text" placeholder="Your Username"></input>

                        <p className={styles.para}>Email</p>
                        <input className={styles.email} value={createUser.email} onChange={(e) => setCreateUser({ ...createUser, email: e.target.value })} type="email" placeholder="Your Email"></input>
                        <p className={styles.para}>Password</p>
                        <input className={styles.password} value={createUser.password} onChange={(e) => setCreateUser({ ...createUser, password: e.target.value })} type="password" placeholder="Password"></input>
                        <p className={styles.para}>Confirm Password</p>
                        <input className={styles.email} value={createUser.passwordConfirmation} onChange={(e) => setCreateUser({ ...createUser, passwordConfirmation: e.target.value })} type="password" placeholder="Confirm Password"></input>
                        <input className={styles.buttonSign} value="Register" onClick={submit2} type="submit"></input>
                        <input value="X" onClick={() => setSignUpShow((prev) => !prev)} type="submit"></input>

                    </form>
                </div>
                : ""

            }
</div>
        </div>
        </div>


    )
}




/*

<div className={styles.signInContainer}>
            <div className={styles.signInBox}>
                <h1>Sign In</h1>
                <form onSubmit={(e) => {
                    e.preventDefault(),
                    
                }}>
                    <p>Your Email</p>
                    <input className={styles.input
                    } placeholder="Your Email" onChange={(e) => setSignIn({ ...signIn, email: e.target.value })} type="email"></input>
                    <p>Password</p>
                    <input className={styles.input} placeholder="Your Password" type="password"></input>
                    <p><Link href="#">Forgot your password?</Link></p>
                    <p><Link href="/login/signup">Don't have an account?</Link></p>
                    <input onClick={() => submit()} className={styles.button} value="Login" type="submit"></input>
                </form>
            </div>
        </div>





headers: {
    "Authenticate": localStorage.getItem("token")
}
localStorage.setItem('token', json.token)
aplication.get("/list", authenticate, (req, res) => {
const user = req.user
res.status(200).json(user)
})

async function authenticate(req, res, next) {
const gotToken = req.headers.authenticate //é o token que vem do frontend
const result = await findToken(gotToken) //verifica se o token existe na sessao
if (!result) return res.status(404).send() //se nao exister, xau
const user = await findUserId(result.userId) //se existir, obtermos o utilizador 
req.user = user //e guardamos no pedido
next() // salta para o proxim0o
}
const json = await res.json()
if (res.status != 404) {
localStorage.setItem('token', json.token)
}
const res = await fetch("/list", {
method: "GET",
headers: {
    "Authenticate": localStorage.getItem("token")
}
})
async function findToken(gotToken) {
const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_SESSION)
return await collection.findOne({ 
_id: new ObjectId(gotToken)
}) 
}
const token = localStorage.getItem("token")

*/