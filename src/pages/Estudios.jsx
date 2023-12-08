import { sources } from "../data.json";

export function Campanias() {
  console.log(sources.campanias);
  return (
    <section className="campanias-section">
      <h2>Campañas políticas</h2>
      <div className="campanias-container">
        {sources.campanias.map((source) => (
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
