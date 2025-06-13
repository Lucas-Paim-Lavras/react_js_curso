// Importa os hooks do React: useState para controlar valores, useEffect se quiser usar efeitos later
import { useEffect, useState } from "react";

// Componente funcional Form
function Form() {

  // Função que será chamada ao enviar o formulário
  function cadastrarUsuario(e) {
    e.preventDefault(); // impede que a página recarregue ao enviar o form

    // Exibe os valores dos campos no console
    console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`);
  }

  // Estado para armazenar o nome digitado
  const [name, setName] = useState(); // inicia sem valor definido

  // Estado para armazenar a senha digitada
  const [password, setPassword] = useState(); // inicia sem valor definido

  // JSX que representa o formulário
  return (
    <div>
      <h1>Meu Cadastro:</h1>

      {/* Formulário com evento onSubmit ligado à função cadastrarUsuario */}
      <form onSubmit={cadastrarUsuario}>

        {/* Campo de nome */}
        <div>
          <label htmlFor="name">Nome:</label>
          <input 
            type="text"              // tipo de input
            id="name"                // usado para o label estar associado
            placeholder="Digite o seu nome" // texto de dica dentro do input
            // value={name}          // se ativar essa linha, o campo fica controlado totalmente (in/out)
            onChange={(e) => setName(e.target.value)} // atualiza o estado conforme o usuário digita
          />
        </div>

        {/* Campo de senha */}
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"           // oculta os caracteres digitados
            id="password"
            placeholder="Digite a sua senha"
            onChange={(e) => setPassword(e.target.value)} // atualiza o estado da senha
          />
        </div>

        {/* Botão para enviar o formulário */}
        <div>
          <input type="submit" value="Cadastrar" />
        </div>

      </form>
    </div>
  );
}

// Exporta o componente Form para ser usado em outro lugar (ex: App.js)
export default Form;
