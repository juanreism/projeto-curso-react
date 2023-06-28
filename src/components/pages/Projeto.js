import { useLocation } from 'react-router-dom'
import Mensagem from '../layout/Mensagem'
import styles from './Projeto.module.css'
import Container from '../layout/Container'
import Loading from '../layout/Loading'
import LinkButton from '../layout/LinkButton'
import Card from '../projeto/Card'
import { useState, useEffect } from 'react'

function Projeto(){

    const [projects, setProjects] = useState([])
    const[removeLoading, setRemoveLoading] = useState(false)
    const[projectMessage, setProjectMessage] = useState('')

    const currentLocation = useLocation()
    let message =''
    if(currentLocation.state){
        message = currentLocation.state.message
    }

    useEffect(()=>{
        fetch('http://localhost:5000/projects', {
            method: 'GET', 
            headers:{
                'Content-Type':'application/json'
            },
        })
        .then(resp=> resp.json())
        .then((data)=>{
            console.log(data)
            setProjects(data)
            setRemoveLoading(true)
        })
        .catch((err) => console.log(err))
    }, [])

    function removeProject(id){
        fetch(`http://localhost:5000/projects/${id}`, {
        method: 'DELETE',
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then((resp) => resp.json())
    .then(() => {
        setProjects(projects.filter((project) => project.id !== id))
        setProjectMessage('Projeto removido com sucesso!')
    })
    .catch(err => console.log(err))
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to='/novoprojeto' text='Criar Projeto!'/>
            </div>
            
            {message && <Mensagem type="success" msg={message} />}
            {projectMessage && <Mensagem type="success" msg={projectMessage} />}
            
            <Container customClass="start" >
                {projects.length >0 &&
                    projects.map((project)=>(
                        <Card 
                            id={project.id} 
                            name={project.name} 
                            category={project.category.name} 
                            budget={project.budget} 
                            key={project.id}
                            handleRemove={removeProject}
                        />
                    ))}
                    {!removeLoading && <Loading/>}
                    {removeLoading && projects.length === 0 && (
                        <p> Não há projetos cadastrados </p>
                    )}
            </Container>
        </div>
    )
}

export default Projeto