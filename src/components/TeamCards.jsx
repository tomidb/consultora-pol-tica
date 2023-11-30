/* eslint-disable react/prop-types */
import "./TeamCards.css";

export function TeamCards({ url, name, competences, trabajos }) {
  console.log(trabajos);
  return (
    <div className="profile-card-container">
      <img className="profile-card-image" src={`/media/${url}`} alt={name} />
      <div className="profile-info-container">
        <h3 className="profile-name">{name}</h3>
        <p className="profile-competences">{competences}</p>
        <div className="profile-btn-panel">
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
}
