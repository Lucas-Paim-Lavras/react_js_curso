import "./App.css";
import HelloWorld from "./components/HelloWorld";
//usaremos essa área para importar coisas

function App() {
  const nome = "Lucas";
  const novoNome = nome.toUpperCase(); //deixa a letra maiúscula
  function soma(a, b) {
    return a + b;
  }

  const url = "https://picsum.photos/300";
  
  return (
    //Aqui, precisa usar className, sempre!
    <div className="App">    
      <h1>Alterando o JSX</h1>
      <p>Olá, {nome}</p>
      <p>Olá, {novoNome}</p>
      <p>Soma: {soma(1, 2)}</p>
      <img src={url} alt="Minha imagem" />
      < HelloWorld/>
    </div>
  );
}

export default App;
