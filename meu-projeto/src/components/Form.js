function Form(){
    
    function cadastrarUsuario(e){
        e.preventDefault()  // impede que a página recarregue
        console.log("Cadastrou o usuário")
    }
    
    
    return(
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome"></input>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </form>
        </div>
    )
}

export default Form