import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NoPage from './components/pages/NoPage'
import Contacto from './components/pages/Contacto'
import Ubicacion from './components/pages/Ubicacion';
import Container from './components/pages/Container';
import Home from './components/pages/Home';
import Menu from './components/shared/Menu';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Container/>}>
          <Route index element={<Home/>}></Route>
          <Route path='contact' element ={<Contacto/>}></Route>
          <Route path='menu' element ={<Menu/>}></Route>
          <Route path='direccion' element={<Ubicacion/>}></Route>
          <Route path='*' element={<NoPage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
