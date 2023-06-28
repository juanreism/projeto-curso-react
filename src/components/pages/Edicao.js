import styles from './Edicao.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ProjetoForm from '../projeto/ProjetoForm'

function Edicao (){
    const {id} = useParams()
    console.log(id)
    
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm]= useState (false)

    useEffect(()=>{
        fetch(`http://localhost:5000/projects/${id}`, {
            method: "GET", 
            headers:{
                 'Content-Type':'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data)=>{
            setProject(data)
        })
        .catch((err)=> console.log)
    }, [id])

    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }

    function editPost(project){

        if(project.budget < project.cost){
            return false
        }
        fetch(`http://localhost:5000/projects/${id}`, {
            method: "PATCH", 
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then((data)=>{
            setProject(data)
            setShowProjectForm(false)
        })
        .catch((err)=> console.log)
    }

    return(
        
        <>
        {project.name?(
            <div className={styles.project_details}>
                <Container customClass="column">
                    <div className={styles.details_container}>
                        <h1>Projeto: {project.name}</h1>
                        <button className={styles.btn} onClick={toggleProjectForm}>
                            {!showProjectForm ? 'Editar Projeto' : 'Fechar'}
                        </button>
                        {!showProjectForm ? (
                            <div className={styles.project_info}>
                                <p>
                                    <span> Categoria: </span> {project.category.name}
                                </p>
                                <p>
                                    <span> Total de Orçamento: </span> {project.budget}
                                </p>
                                <p>
                                    <span> Total Utilizado: </span> {project.cost}
                                </p>
                            </div>
                        ) : (
                            <div className={styles.project_info}>
                                <ProjetoForm handleSubmit={editPost} btnText="Concluir Edição" projectData={project}/>
                            </div>

                        )}
                    </div>
                </Container>
            </div>
        ):(
            <Loading/>
        )}
        </>
    )
}

export default Edicao