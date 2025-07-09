function Tabela({ dados, onEditar, onApagar }) {
  return (
    <div class='divTabela'>
      <h2>Tabela</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>CPF</th>
            <th>Estado Civil</th>
            <th>Editar</th>
            <th>Apagar</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.idade}</td>
              <td>{item.cpf}</td>
              <td>{item.estadoCivil}</td>
              <td>
                <button onClick={() => onEditar(index)}>Editar</button>
              </td>
              <td>
                <button onClick={() => onApagar(index)}>Apagar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabela;