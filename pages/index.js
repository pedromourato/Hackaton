import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Qrcode from '../components/qrcode'
import styles from '../styles/Home.module.css'

export default function Home() {
  
  return (
    <div className={styles.container}>

      <Qrcode className={styles.qrcode} text="TESTE" />

      <section className={styles.ligas}>
        <div className={styles.liOpacity}>
          <div>
            <span style={{ opacity: "20%", fontSize: "15px", marginRight: "40px" }}>Liga Diamond</span>
            <span>Liga Master</span>
            <span style={{ opacity: "20%", fontSize: "15px", marginLeft: "40px" }}>Liga Platinium</span>
          </div>
          <ul>
            <li><b>#1 </b>John Snow</li>
            <li><b>#2 </b>Erica Pires</li>
            <li><b>#3 </b>Sean John</li>
            <li><b>#4 </b>Vera Andrade</li>
            <li><b>#5 </b>Carlos Brito</li>
          </ul>
        </div>

        <div className={styles.buttons}>
          <button>Agendar</button>
          <button>Comprar</button>
        </div>


      </section>


      <footer className={styles.footer}>
        <div className={styles.image1}>
          <img src="./images/buondiBr.svg" />
        </div>
        <div className={styles.image2}>
          <img src="./images/mercedesBr.svg" />
        </div>
        <div class={styles.image3}>
          <img src="./images/meoBr.svg"/>
        </div>

      </footer>


    </div>
  )
}
