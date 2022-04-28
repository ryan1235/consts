import styles from './Conteiner.module.css'

function Conteiner(props){

    return(
        <div className={`${styles.conteiner} ${styles[props.customClass]}`}>{props.children}</div>
    )

}

export default Conteiner