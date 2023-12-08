import { sources } from "../data.json";

export function Comunicacion() {
  console.log(sources.comunicacion);
  return (
    <section className="campanias-section">
      <h2>Comunicación de gobierno</h2>
      <div className="campanias-container">
        {sources.comunicacion.map((source) => (
          <div className="campanias-source" key={crypto.randomUUID()}>
            <video
              src={`/media/${source.url}`}
              alt={source.title}
              className="trabajo-preview"
              muted
            />
            <p className="trabajo-title">{source.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
