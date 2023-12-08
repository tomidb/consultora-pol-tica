import { Works } from "../components/Works";
import { servicios } from "../data.json";
import "./Portfolio.css";

export function Portfolio() {
  console.log(servicios);
  return (
    <section className="portfolio-section">
      <h2>Conocé nuestros trabajos</h2>
      <div className="portfolio-container">
        <div className="portfolio-categories">
          {servicios.map((servicio) => (
            <Works
              key={crypto.randomUUID()}
              url={servicio.url}
              title={servicio.title}
              href={servicio.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
