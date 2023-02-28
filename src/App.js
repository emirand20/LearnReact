import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import PagesNotFound from './Components/PagesNotFound'
import NavBar from './Components/NavBar'
import Aplicacion from './Components/Aplicacion'
import Botons from './Components/Botons'
import ChangeColor from './Components/ChangeColor'
import ShowHide from './Components/ShowHide'
import ToDo from './Components/ToDo';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='*' element={<PagesNotFound/>} />
            <Route exact path='/aplicacion' element={<Aplicacion/>} />
            <Route exact path='/botons' element={<Botons/>} />
            <Route exact path='/changeColor' element={<ChangeColor/>} />
            <Route exact path='/showHide' element={<ShowHide/>} />
            <Route exact path='/toDO' element={<ToDo />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

