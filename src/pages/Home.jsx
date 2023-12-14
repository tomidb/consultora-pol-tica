import { Contacto } from "./Contacto";
import { Servicios } from "./Servicios";
import { Clientes } from "./Clientes";
import { Portfolio } from "./Portfolio";
import { Equipo } from "./Equipo";
import "./Home.css";

export function Home() {
  return (
    <section className="home-section">
      <Equipo />
      <Servicios className="home-component" />
      <Portfolio />
      <Clientes />
      <Contacto />
    </section>
  );
}
