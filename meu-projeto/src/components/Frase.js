import styles from './Frase.module.css'  //é preciso importar o css modules para as componentes

function Frase(){
    return(
        <div className= {styles.fraseContainer}>
            <p className={styles.fraseContent}>Esté é um componente com uma frase!</p>
        </div>
    )
}

export default Frase



//vamos importar a Frase lá pro HelloWorld