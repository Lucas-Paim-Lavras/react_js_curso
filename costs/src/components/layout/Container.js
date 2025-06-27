import styles from './Container.module.css'

function Container(props){
    return(
        <div className={`${styles.container} ${styles[props.customClass]}`}>{props.children}</div>  
        // O props.children direciona pra gente onde os conteúdos que estão encapsulados pelo <Container> devem ser migrados, no caso para essa componente
    )
}

export default Container