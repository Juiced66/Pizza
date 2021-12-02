import "./App.css";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Carte from "./Components/Carte";
import Login from "./Components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SimpleSlider from "./Components/Hilights/Hilights";
import { useEffect, useState } from "react";
import Admin from "./backend/CMS/Admin";


function App() {
  const [menu, setMenu] = useState("");

  useEffect(() => {
    async function getMenu() {
      try {
        const response = await fetch("/api/families");
        const json = await response.json();
        // console.log(json)
        setMenu(json);
      } catch (error) {
        console.log(error);
      }
    }
    getMenu();
  }, []);

  return (
    menu !== "" && (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Contact />
                  <SimpleSlider carte={menu} />
                  <Carte carte={menu} />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin carte={menu} />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  );
}

export default App;
