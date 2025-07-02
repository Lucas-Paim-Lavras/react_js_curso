import { useEffect, useState } from "react";
import styles from "./Formulario.module.css";

function Formulario() {
  const [name, setName] = useState("");
  const [idade, setIdade] = useState("");
  const [civil, setCivil] = useState("");
  const [cpf, setCpf] = useState("");
  const lista = [];

  function cadastrarUsuario(e) {
    e.preventDefault();
    const dados = {
      name: name,
      idade: idade,
      civil: civil,
      cpf: cpf,
    };
    lista.push(dados)
  }

  return (
    <div>
      <h1>Novo cadastro</h1>
      <form onSubmit={(e) => cadastrarUsuario(e)}>
        <div>
          <label>Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Digite o nome do usuário"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Idade</label>
          <input
            type="Number"
            id="idade"
            placeholder="Digite a idade do usuário"
            onChange={(e) => setIdade(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Estado Civil</label>
          <input
            type="text"
            id="civil"
            placeholder="Digite o estado civil do usuário"
            onChange={(e) => setCivil(e.target.value)}
          ></input>
        </div>
        <div>
          <label>CPF</label>
          <input
            type="text"
            id="cpf"
            placeholder="Digite o CPF do usuário"
            maxLength={11}
            onChange={(e) => setCpf(e.target.value)}
          ></input>
        </div>
        <div>
          <input type="submit" value="Salvar"></input>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
