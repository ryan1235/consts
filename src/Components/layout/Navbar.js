import { Link } from "react-router-dom"
import Style from "./Navbar.module.css"
import logo from "../../img/costs_logo.png"
function Navbar(){
    return (
        <nav className={Style.navbar}>
                <Link to={'/'}>
                    <img src={logo} alt="logo do site"></img>
                </Link>
                <ul className={Style.list}>
                    <li className={Style.itens}>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className={Style.itens}>
                        <Link to={'/Company'}>Empresa</Link>                        
                    </li>
                     <li className={Style.itens}>
                        <Link to={'/NewProject'}>Novo Projeto</Link>                       
                    </li>
                    <li className={Style.itens}>
                        <Link to={'/Projects'}>Projetos</Link>                   
                    </li>
                    <li className={Style.itens}>
                        <Link to={'/Contact'}>Contatos</Link>                   
                    </li>
                    
                </ul>
        </nav>
    )
}

export default Navbar