import ProjectForm from "../project/ProjectForm"
import Style from "./NewProject.module.css"

function NewProject(){
    return(
        <section className={Style.NewProject_Conteiner}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os servirços.</p>
            <ProjectForm btntext='Criar Projeto'/>
        </section>
    )
}

export default NewProject