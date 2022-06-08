import QRCode from 'qrcode';
import classes from "./qrcode.module.css"
import { useEffect, useState } from 'react';



export default function Qrcode ({ text }) {
    const [src, setSrc] = useState("")
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

                <p>Boa tarde, 
                    {
                    name
                    }
                    </p>
                {/* DEFINIR BOA TARDE, BOA NOITE; ETC */}
                {/* NOME USUARIO  */}
            </div>
        </div>
    )
}


