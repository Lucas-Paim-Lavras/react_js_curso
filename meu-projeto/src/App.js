import "./App.css";
import Condicional from "./components/Condicional";
//usaremos essa área para importar coisas

function App() {

  return (
    //Aqui, precisa usar className, sempre!
    <div className="App">
      <h1>Renderização condicional</h1>
      <Condicional/>
    </div>
  );
}

export default App;
