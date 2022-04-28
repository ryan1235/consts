import { Link } from "react-router-dom"

function Navbar(){
    return (
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/Company'}>Empresa</Link>
            <Link to={'/NewProject'}>Novo Projeto</Link>
            <Link to={'/Contact'}>Contatos</Link>
        </nav>
    )
}

export default Navbar