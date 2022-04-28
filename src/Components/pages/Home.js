import banner from "../../img/savings.svg"
import LinkButtom from "../layout/LinkButtom"
import Style from "./Home.module.css"

function Home(){
    return(
        <>
            <main className={Style.home_conteiner}>
                <h1>Bem-Vindo ao <span>Custos</span></h1>
                <p>Comece a gerenciar seus projetos</p>
                <LinkButtom to='/NewProject' text="Criar Novo Projeto"/>
                <img src={banner} alt="Logo principal do site"></img>
            </main>
        </>
    )
}

export default Home