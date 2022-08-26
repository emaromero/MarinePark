import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Carrousel } from './components/Carrousel';
import Footer from './components/Footer';
import { Header } from './components/Header';
import { Nosotros } from './components/Nosotros';
import { Seguridad } from './components/Seguridad';
import { Servicios } from './components/Servicios';

function App() {
  return (
    <>
      <div className="App">
      <BrowserRouter>
            <Header />
            <Carrousel/>
            <Nosotros/>
            <Seguridad/>
            <Servicios/>
            <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
