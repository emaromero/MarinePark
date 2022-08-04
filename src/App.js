import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Carrousel } from './components/Carrousel';
import { Contacto } from './components/Contacto';
import Footer from './components/Footer';
import { Header } from './components/Header';
import { Seguridad } from './components/Seguridad';

function App() {
  return (
    <>
      <div className="App">
      <BrowserRouter>
            <Header />
            
            <Routes>
            <Route path="/" element={<Carrousel/>} />
            <Route path="/contacto" element={<Contacto/>} />
            <Route path='/ubicacion' element={<Contacto/>} />
            </Routes>
            <Contacto/>
            <Seguridad/>
            <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
