import { useEffect, useState } from "react"

export default function AulasAgendadas(){
    const [array, setArray] = useState([])
    useEffect(()=>{
        if(typeof window !== undefined) {
        async function callBackAulas (){
            console.log(localStorage)
            const res = await fetch(
                '/api/aulasagendadas/', {
                body: JSON.stringify(localStorage.getItem("User")),
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST"
            })
            const json = await res.json()
            setArray(json);
        }
        callBackAulas()
    }

    },[])
    

    return (
        <div>
            <ul>
               
            </ul>
        </div>
    )
}