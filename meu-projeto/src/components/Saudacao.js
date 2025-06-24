function Saudacao ( {nome} ){

    function gerarSaudacao (algumNome){
        return `Olá ${algumNome}, tudo bem?`
    }

    return(
        <div>
            {nome && <p>{gerarSaudacao(nome)}</p>} 
            {/* Aqui, usei uma rederização condicional em que, se houver alguma coisa no nome, ele printa */}
        </div>
    )
}

export default Saudacao