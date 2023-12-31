import styles from './Mensagem.module.css'
import { useState, useEffect } from 'react'

function Mensagem({type, msg}){
    
    const [visible, setVisible] = useState(false)

    useEffect(()=>{

        if(!msg){
            setVisible(false)
            return
        }
        setVisible(true)

        const timer = setTimeout (()=>{
            setVisible(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [msg])
    
    return(
        <>
        {visible && (
            <div className={`${styles.message} ${styles[type]}`} >{msg}</div>
        )}
        </>
    )
}

export default Mensagem