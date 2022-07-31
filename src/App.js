import './App.css';
import { Carrousel } from './components/Carrousel';
import { Contacto } from './components/Contacto';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Carrousel/>
        <Contacto/>
      </div>
    </>
  );
}

export default App;
