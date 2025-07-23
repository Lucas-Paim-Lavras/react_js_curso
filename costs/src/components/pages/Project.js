import { useParams } from 'react-router-dom'
import styles from './Project.module.css'


function Project(){

    const { id } = useParams
    

    return(
        <p>Projeto</p>
    )
}

export default Project