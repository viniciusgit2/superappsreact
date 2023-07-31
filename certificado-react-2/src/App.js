import logo from './logo.svg';
import './App.css';
import Calculadora from './calc/Calculadora';
import Aleatorio from './componentes/Aleatorio'
import Frag from './componentes/Frag'
import Card from './componentes/Card'
import Contador from './componentes/contadador'
import Listaaluno from './componentes/Listaaluno'
import Primeiro from './componentes/Primeiro'
import Parouimpar from './componentes/Parouimpar'
import Segundo from './componentes/Segundo'
import Soma from './componentes/Soma'
import  Membro from './componentes/Membro'
import Grupo from './componentes/Grupo'

function App() {
  return (
    <div className="App">
      <Soma/>
      <Grupo/>
      <Parouimpar/>
      <Contador/>
      <Aleatorio/>
      <Membro/>
      <Aleatorio/>
      <Calculadora/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
