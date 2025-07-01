function Formulario() {

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log('Cadastrou')
    }

  return (
    <div>
      <h1>Novo cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label>Nome</label>
          <input type="text" placeholder="Digite o nome do usuário"></input>
        </div>
        <div>
          <label>Idade</label>
          <input type="Number" placeholder="Digite a idade do usuário"></input>
        </div>
        <div>
          <label>Estado Civil</label>
          <input
            type="text"
            placeholder="Digite o estado civil do usuário"
          ></input>
        </div>
        <div>
          <label>CPF</label>
          <input type="text" placeholder="Digite o CPF do usuário"></input>
        </div>
        <div>
          <input type="submit" value="Cadastrar"></input>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
