import { useState, useEffect } from "react";

function Formulario({ onSalvar, dadoEditar }) {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [estadoCivil, setEstadoCivil] = useState("");
  const [cpf, setCpf] = useState("");

  useEffect(() => {
    if (dadoEditar) {
      setNome(dadoEditar.nome);
      setIdade(dadoEditar.idade);
      setEstadoCivil(dadoEditar.estadoCivil);
      setCpf(dadoEditar.cpf);
    }
  }, [dadoEditar]);

  function submit(e) {
    e.preventDefault();
    onSalvar({ nome, idade, estadoCivil, cpf });
    setNome("");
    setIdade("");
    setEstadoCivil("");
    setCpf("");
  }

  return (
    <form onSubmit={submit} class='divForm'>
      <h2>Novo Cadastro</h2>
      <label>Nome</label><br/><br/>
      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome"
      />
      <br />
      <label>Idade</label><br/><br/>
      <input
        value={idade}
        type="number"
        maxLength={3}
        onChange={(e) => setIdade(e.target.value)}
        placeholder="Idade"
      />
      <br />
      <label>Estado Civil</label><br/><br/>
      <input
        value={estadoCivil}
        onChange={(e) => setEstadoCivil(e.target.value)}
        placeholder="Estado Civil"
      />
      <br />
      <label>CPF</label><br/><br/>
      <input
        value={cpf}
        type="number"
        maxLength={11}
        onChange={(e) => setCpf(e.target.value)}
        placeholder="CPF"
      />
      <br />
      <br />
      <button type="submit">Salvar</button>
    </form>
  );
}

export default Formulario;