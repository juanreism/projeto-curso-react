import styles from './Card.module.css'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Card({id, name, budget, category, handleRemove} ){

    const remove = (e)=> {
        e.preventDefault()
        handleRemove(id)
    }
    return(
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento: </span> R${budget},00
            </p>
            <p>
                <span> </span>{category} 
            </p>
            <div>
                <Link to={`/edicao/${id}`}>
                    <BsPencil className={styles.icon}/>
                </Link>
                <BsFillTrashFill onClick={remove} className={styles.icon}/>
            </div>

        </div>
    )
}

export default Card