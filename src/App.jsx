import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Contacto } from "./pages/Contacto";
import { Header } from "./components/Header";
import { Servicios } from "./pages/Servicios";
import { Clientes } from "./pages/Clientes";
import { Portfolio } from "./pages/Portfolio";
import { Equipo } from "./pages/Equipo";

import { Error404 } from "./pages/Error404";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/equipo" element={<Equipo />} />
            <Route path="/trabajos" element={<Portfolio />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
