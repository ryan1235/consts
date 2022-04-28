import { Link } from 'react-router-dom'
import Style from './LinkButtom.module.css'

function LinkButtom({to, text}){

    return(
        <Link className={Style.btn} to={to}>{text}</Link>
    )

}

export default LinkButtom