import QRCode from 'qrcode';
import classes from "./qrcode.module.css"
import styles from '../styles/Home.module.css'

import { useEffect, useState } from 'react';



export default function Qrcode ({ text }) {
    const [src, setSrc] = useState("Obrigado a todos! Apesar do  trabalho incompleto, sentimos que aprendemos muito e futuramente iremos melhor ainda mais nosso projeto")
    useEffect(() => {
        QRCode.toDataURL(text).then((data) => {
            setSrc(data)
        })
    }, [])

    const [name, setName] = useState("")
    useEffect(()=>{
        if(typeof window !== undefined) {
            setName(localStorage.getItem('name'))
         console.log(localStorage)
        }
    },[])
    
    return (
        <div className={classes.sectionQrcode}>
            <div className={classes.qrcode}>
                <img src={src} />

                <div className={styles.buttons}>Boa tarde
                    {
                    " "+name+" "
                    }, Utilize o Qrcode para conseguir descontos Incriveis com lojas parceiras,
                    </div>
                {/* DEFINIR BOA TARDE, BOA NOITE; ETC */}
                {/* NOME USUARIO  */}
            </div>
        </div>
    )
}


