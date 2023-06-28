import styles from './Navbar.module.css'
import Container from './Container'
import {Link} from 'react-router-dom'
import logo from '../../img/costs_logo.png'

function Navbar (){
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Costs"/>
                </Link>
               <ul className={styles.list}>
                    <li className={styles.item}><Link to="/" style={{ textDecoration: 'none', color:'#FFFFFF'}}>Home</Link></li>
                    <li className={styles.item}><Link to="/projeto" style={{ textDecoration: 'none', color:'#FFFFFF'}}>Projeto</Link></li>
                    <li className={styles.item}><Link to="/empresa" style={{ textDecoration: 'none', color:'#FFFFFF'}}>Empresa</Link></li>
                    <li className={styles.item}><Link to="/contato" style={{ textDecoration: 'none', color:'#FFFFFF'}}>Contato</Link></li>
               </ul>
            </Container>
        </nav>
    )
}

export default Navbar