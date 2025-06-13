import "./App.css";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";
import List from "./components/List";
//usaremos essa área para importar coisas

function App() {
  const nome = "Maria";

  return (
    //Aqui, precisa usar className, sempre!
    <div className="App">
      <h1>Testando o CSS</h1>
      <Frase/>
      <Frase/>
      <SayMyName nome="Matheus" />
      <SayMyName nome="Paim" />
      <SayMyName nome="Gustavo" />
      <SayMyName nome="Luciana" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="Rodrigo"
        idade="28"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
        />
      <List/>
    </div>
  );
}

export default App;
