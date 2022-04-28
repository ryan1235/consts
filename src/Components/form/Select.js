import Style from "./Select.module.css"

function Select({ text, name, options, heandleOnChange, value }) {
    return (
        <div className={Style.form_controler}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name}>
                <options>Selecione uma opção</options>
            </select>
        </div>
    )
}

export default Select