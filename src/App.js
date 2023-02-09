import './App.css';
import ShowHide from './Components/ShowHide'
import Age from './Components/Age'
import Botons from './Components/Botons'
import ChangeColor from './Components/ChangeColor'



function App() {
  return (
    <div className="App">
    <ShowHide />
    <br/>
    <Age />
    <Botons />
    <br/>
    <ChangeColor />
    </div>
  );
}

export default App;
