import Style from "./Select.module.css"

function Select({ text, name, options, heandleOnChange, value }) {
    return (
        <div className={Style.form_controler}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name}>
                <option>Selecione uma opção</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id} >{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select