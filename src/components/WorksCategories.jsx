import "./WorksCategories.css";

export function WorksCategories({ url, title, handleContent }) {
  return (
    <button className="works-service-container" onClick={handleContent}>
      <img src={`/media/${url}`} alt={title} className="works-service-img" />
      <p className="works-service-title" alt={title}>
        {title}
      </p>
    </button>
  );
}
