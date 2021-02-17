import logo from './logo.svg';
import './App.css';
import {Componente, Componente1, Componente2} from './components/Componente'
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';

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
        <Propiedades
          cadena='Esto es una cadena'
          numero={9}
          booleano={true}
          arreglo={[1,2,3]}
          objeto={{nombre:'Edwin', edad:38, email:'pazamoryperdon@gmail.com'}}
          elementoReact={<i>Esto es un elemento react</i>}
          funcion={num=>num*num}
          componente={<Componente message='Componente usado como prop' />}
        />
        <hr></hr>
        <Estado
        
        />
      </section>
      </header>
    </div>
  );
}

export default App;
