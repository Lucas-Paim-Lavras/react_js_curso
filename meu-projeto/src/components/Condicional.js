// Importa o hook useState do React, que serve para armazenar estados (variáveis reativas)
import { useState } from "react";

// Componente Condicional
function Condicional() {
  // Cria um estado para armazenar o valor digitado no input de e-mail
  const [email, setEmail] = useState();

  // Estado para armazenar o e-mail após o envio (simulando um "cadastro")
  const [userEmail, setUserEmail] = useState();

  // Função executada ao clicar no botão de envio
  function enviarEmail(e) {
    e.preventDefault();           // Impede o recarregamento da página (comportamento padrão de um <form>)
    setUserEmail(email);          // Salva o e-mail atual no estado "userEmail"
    setEmail("");                 // Limpa o input após o envio
  }

  // Função para limpar o e-mail cadastrado e esconder a mensagem condicional
  function limparEmail(e) {
    setUserEmail("");             // Limpa o valor armazenado em "userEmail"
  }

  // JSX (código visual)
  return (
    <div>
      <h2>Cadastre o seu e-mail:</h2>

      {/* Formulário, que contém o input e o botão de envio */}
      <form>
        <input
          type="email"                               // Tipo email (aplica validação automática no navegador)
          value={email}                              // Torna o input controlado (ligado ao estado "email")
          placeholder="Digite o seu e-mail ..."      // Texto que aparece dentro do campo quando vazio
          onChange={(e) => setEmail(e.target.value)} // Atualiza o estado "email" a cada tecla digitada
        />

        {/* Botão que chama a função de envio */}
        <button type="submit" onClick={enviarEmail}>
          Enviar e-mail
        </button>

        {/* Renderiza o bloco abaixo apenas se userEmail tiver um valor (condicional) */}
        {userEmail && (
          <div>
            <p>O e-mail do usuário é: {userEmail}</p>

            {/* Botão que limpa o e-mail cadastrado */}
            <button onClick={limparEmail}>Limpar e-mail</button>
          </div>
        )}
      </form>
    </div>
  );
}

// Exporta o componente para ser usado em outro arquivo (ex: App.js)
export default Condicional;
