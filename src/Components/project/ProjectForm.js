import { useEffect, useState } from "react"

import Inputs from "../form/Inputs"
import Select from "../form/Select"
import Subimit from "../form/Subimit"
import Style from "./ProjectForm.module.css"

function ProjectForm({btntext}) {
    const [categorie, setcategorie] = useState([])
    
    useEffect(()=>{
        fetch("http://localhost:5000/categories",{
            method: "GET",
            headers: {
                'Content-Type': 'aplication/json'
            }
    })
    .then((resp) => resp.json())
    .then((data) => {
        setcategorie(data)
    })
    .catch((err) => console.log(err))},[])
    return (
        <form className={Style.form}>
            <Inputs type='text' text='Nome do projeto' name='name' placeholder='Digite o nome do projeto...'></Inputs>
            <Inputs type='number' text='Orçamento do projeto' name='badget' placeholder='Digite o orçamento total...'></Inputs>
            <Select name='category_id' options={categorie} text='Selecione uma categoria'></Select>
            <Subimit text={btntext}></Subimit>
        </form>
    )
}

export default ProjectForm