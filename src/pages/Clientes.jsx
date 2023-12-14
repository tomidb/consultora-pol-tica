import "./Clientes.css";
import { clientes } from "../data.json";

export function Clientes() {
  return (
    <section className="clientes-section">
      <h2>Quienes trabajan con nosotros</h2>
      <div className="clientes-container">
        {clientes.map((cliente) => (
          <img
            key={crypto.randomUUID()}
            className="cliente-img"
            src={`/media/${cliente.url}`}
            alt={cliente.alt}
          />
        ))}
      </div>
    </section>
  );
}
