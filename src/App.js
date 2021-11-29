import "./App.css";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Carte from "./Components/Carte";
// import carte from './appConfig/pizzas'
import SimpleSlider from "./Components/Hilights/Hilights";
import { useEffect, useState } from "react";
import Admin from "./backend/CMS/Admin";




function App() {
  const [menu, setMenu] = useState('');

  useEffect(() => {
    async function getMenu(){
      try {
        const response = await fetch('/api/families')
        const json = await response.json()
        console.log(json)
        setMenu(json)
      } catch (error) {
        console.log(error)
      }
      
      
    }
    getMenu()
  }, []);
  return menu !== '' && (
    <div className="App">
      {}
      <Header />
      <Contact />
      <SimpleSlider carte={menu} />
      <Carte
        carte={menu}
      />
      <Admin carte={menu} />
    </div>
  );
}

export default App;
