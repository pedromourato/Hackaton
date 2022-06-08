import Agendar from "./agendar";
import AulasAgendadas from "./AulasAgendadas";
import Footer from "./footer";
import Header from "./header";
import SignIn from "./SignIn";

export default function Layout({ children }){
    
    return(
        <div>
            <Header />
            <SignIn />
            <Agendar />
            <AulasAgendadas />
            
            <main>{children}</main>

            {/* <Footer /> */}
        </div>
    )
}