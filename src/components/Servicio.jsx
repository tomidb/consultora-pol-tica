import "./Servicio.css";

export function Servicio({ url, title, description }) {
  const paragraphs = description.split("<br>");

  return (
    <article className="service-container">
      <div className="service-img-container">
        <img src={`/media/${url}`} alt={title} className="service-img" />
        <p className="service-title">{title}</p>
      </div>
      <div className="service-description-container">
        {paragraphs.map((paragraph) => (
          <p key={crypto.randomUUID} className="service-description">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
