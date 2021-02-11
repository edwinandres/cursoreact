import logo from './logo.svg';
import './App.css';
import {Componente, Componente1, Componente2} from './components/Componente'

function App() {
  return (
    <div className="App">
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
      <section>
        <Componente
          message='Hola soy un componente de clase'
        />
        <Componente1
          message='Hola soy un componente funcional'
        />
        <Componente2
          message='Hola soy un componente de arrow function'
        />
      </section>
    </div>
  );
}

export default App;
