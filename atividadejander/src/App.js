import { useState } from "react";
import Formulario from "./components/Formulario";
import Tabela from "./components/Tabela";

import './components/App.css'

function App() {
  const [dados, setDados] = useState([]);
  const [editando, setEditando] = useState(null);

  function salvarRegistro(registro) {
    if (editando !== null) {
      const novosDados = [...dados];
      novosDados[editando] = registro;
      setDados(novosDados);
      setEditando(null);
    } else {
      setDados([...dados, registro]);
    }
  }

  function editarRegistro(index) {
    setEditando(index);
  }

  function apagarRegistro(index) {
    const novosDados = dados.filter((_, i) => i !== index);
    setDados(novosDados);
  }

  return (
    <div className="container">
      <Formulario onSalvar={salvarRegistro} dadoEditar={dados[editando]} />
      
      <Tabela dados={dados} onEditar={editarRegistro} onApagar={apagarRegistro} />
    </div>
  );
}

export default App;