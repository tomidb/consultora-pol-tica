/* eslint-disable react/prop-types */
import "./ProfileModal.css";
import { AiFillCloseSquare } from "react-icons/ai";

export function ProfileModal({ url, name, competences, biotext, handleModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <AiFillCloseSquare className="modal-close-icon" onClick={handleModal} />
        <div className="modal-profile-card">
          <img src={`/media/${url}`} alt={name} className="modal-profile-img" />
          <div className="modal-profile-info">
            <h3>{name}</h3>
            <p className="modal-competences">{competences}</p>
            <hr />
            <div className="biotext-container">
              <p>{biotext}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
