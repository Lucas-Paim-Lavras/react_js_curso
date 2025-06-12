import Frase from "./Frase"


function HelloWorld (){   //aqui não altera lá no navegador porque tenho que importá-lo para o app.js
    return (
        <div>
            <Frase/>
            <h1>Meu primeiro Componente</h1>
            <Frase/>    
        </div>
    )

}

export default HelloWorld