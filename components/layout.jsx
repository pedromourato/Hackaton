import Agendar from "./agendar";
import AulasAgendadas from "./AulasAgendadas";
import Footer from "./footer";
import Header from "./header";
import SignIn from "./SignIn";
import styles from "./header.module.css"
export default function Layout({ children }){
    
    return(
        <div className={styles.all}>
            <Header />
            <SignIn />
            <Agendar />
            <AulasAgendadas />
            
            <main>{children}</main>

            <Footer />
        </div>
    )
}