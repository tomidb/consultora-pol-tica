import "./Sources.css";
import { servicios } from "../data.json";

export function Sources({ contentCategory }) {
  const servicio = servicios.find(
    (servicio) => servicio.title === contentCategory
  );

  console.log(servicio.sources);
  return (
    <>
      {contentCategory !== "Estudios y encuestas"
        ? servicio.sources.map((source) => (
            <div key={crypto.randomUUID()} className="source-card">
              <div className="source-info">
                <p>{source.title}</p>
              </div>
              <div className="vid-container">
                <video
                  src={`/media/${source.url}`}
                  alt={source.title}
                  className="source-vid"
                  muted
                ></video>
                <p className="ver-video">Ver video</p>
              </div>
            </div>
          ))
        : null}
    </>
  );
}
