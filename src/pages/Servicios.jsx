import "./Servicios.css";
import { Servicio } from "../components/Servicio";
import { servicios } from "../data.json";

export function Servicios() {
  return (
    <section className="services-section">
      <h2>Conocé nuestros servicios</h2>
      <div className="servicios-container">
        {servicios.map((servicio) => (
          <Servicio
            key={crypto.randomUUID()}
            url={servicio.url}
            title={servicio.title}
            description={servicio.description}
          />
        ))}
      </div>
    </section>
  );
}
