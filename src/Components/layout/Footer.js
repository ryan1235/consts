import { FaTwitter, FaGithubAlt, FaInstagram, FaTv } from "react-icons/fa";
import { Link } from "react-router-dom";
import Styles from './Footer.module.css'

function Footer(){
    return(
        <footer className={Styles.footer}>
            <div className={Styles.coppy}>
                <FaTv/>
                <h3>&copy; Site feito por <strong>Ryan luca</strong> 2022</h3>
            </div>
            <div>
                <p>Atenção este site foi feito para fins educativos e para o meu proprio aprendizado</p>
            </div>
            <div>
                <ol className={Styles.social_list}>
                    <li><a target="_blank" href="https://twitter.com/ryanluca007123" rel="noreferrer"><FaTwitter/></a></li>
                    <li><a target="_blank" href="https://github.com/ryan1235" rel="noreferrer"><FaGithubAlt/></a></li>
                    <li><a target="_blank" href="https://www.instagram.com/ryanluca007122/" rel="noreferrer"><FaInstagram/></a></li>
                </ol>
            </div>
        </footer>
    )}

export default Footer