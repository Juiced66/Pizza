
import './App.css';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Carte from './Components/Carte';
import carte from './appConfig/pizzas'
import SimpleSlider from './Components/Hilights/Hilights';


function App() {
  return (
    <div className="App">
      <Header />
      <Contact />
      <SimpleSlider />
      <Carte carte={carte}/>
    </div>
  );
}

export default App;
