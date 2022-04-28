import Style from './Inputs.module.css'

function Inputs({ type, text, name, placeholder, heandleOnChange, value }) {
    return (
        <div className={Style.form_controler}>
            <label htmlFor={name}>{text}:</label>
            <input type={type} name={name} id={name} placeholder={placeholder} onChange={heandleOnChange} value={value} ></input>
        </div>
    )
}

export default Inputs

//type, text, name, placeholder, heandleOnChange, value 