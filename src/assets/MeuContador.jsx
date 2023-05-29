import { useState } from 'react'
import styles from 'F:/lcode/Projects/React/React-Course-Style/react-style/src/button.module.css'
export default function MeuContador() {

    
    const [contador, setContador] = useState(0)

    console.log('Renderizando contador')

    function aumentar() {
        setContador(contador + 1)        
    }

    function diminuir() {
        setContador(contador - 1)
    }


    return(
        <div className='container'> 
        <h3>{contador}</h3>
        <button className={styles.myButton} onClick={aumentar} >aumentar</button>
        <button className={styles.myButton} onClick={diminuir} >diminuir</button>
        </div>
    )   
}