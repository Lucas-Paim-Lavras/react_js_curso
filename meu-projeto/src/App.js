import { useState } from "react";
import SeuNome from "./components/SeuNome";
import Saudacao from "./components/Saudacao";
import "./App.css";
//usaremos essa área para importar coisas
function App() {
  const [nome, setNome] =  useState()
  return (
    //Aqui, precisa usar className, sempre!
    <div className="App">
      <h1>State lift</h1>
      <SeuNome setNome = {setNome}/>
      <Saudacao nome = {nome} />
    </div>
  );
}

export default App;
