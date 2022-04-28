import Style from "./Sabimit.module.css"

function Sabimit({ text }) {
    return (
        <div>
            <button className={Style.btn}>{text}</button>
        </div>
    )
}

export default Sabimit