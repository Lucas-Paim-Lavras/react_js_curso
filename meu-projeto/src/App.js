import "./App.css";
import Evento from "./components/Evento";
import Form from "./components/Form";
//usaremos essa área para importar coisas

function App() {

  return (
    //Aqui, precisa usar className, sempre!
    <div className="App">
      <h1>Testando o evento</h1>
      <Evento/>
      <Form />

    </div>
  );
}

export default App;
