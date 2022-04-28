import Inputs from "../form/Inputs"
import Select from "../form/Select"
import Subimit from "../form/Subimit"
import Style from "./ProjectForm.module.css"

function ProjectForm({btntext}) {
    return (
        <form className={Style.form}>
            <Inputs type='text' text='Nome do projeto' name='name' placeholder='Digite o nome do projeto...'></Inputs>
            <Inputs type='number' text='Orçamento do projeto' name='badget' placeholder='Digite o orçamento total...'></Inputs>
            <Select name='category_id' text='Selecione uma categoria'></Select>
            <Subimit text={btntext}></Subimit>
        </form>
    )
}

export default ProjectForm