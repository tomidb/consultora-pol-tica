import "./Works.css";

export function Works({ url, title }) {
  return (
    <div className="works-service-container">
      <img src={`/media/${url}`} alt={title} className="works-service-img" />
      <p className="works-service-title">{title}</p>
    </div>
  );
}
