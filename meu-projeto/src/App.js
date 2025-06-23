import "./App.css";
import OutraLista from "./components/OutraLista";


//usaremos essa área para importar coisas

function App() {

  const meusItens = ['React', "Vue", 'Angular']

  return (
    //Aqui, precisa usar className, sempre!
    <div className="App">
      <h1>Renderização de listas</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>
    </div>
  );
}

export default App;
