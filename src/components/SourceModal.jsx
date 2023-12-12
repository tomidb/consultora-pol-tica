import "./SourceModal.css";

import { AiFillCloseSquare } from "react-icons/ai";

export function SourceModal({
  title,
  cliente,
  tipo,
  contexto,
  medios,
  trabajo,
  detalle,
  handleModal,
}) {
  return (
    <div className="source-modal-overlay">
      <div className="source-modal-container">
        <AiFillCloseSquare
          className="source-modal-close-icon"
          onClick={handleModal}
        />
        <div className="source-modal-profile-card">
          <div className="source-modal-profile-info">
            <h3>{title}</h3>
            <p className="source-modal-competences">{cliente}</p>
            <hr />
            <div className="source-biotext-container">
              <p>{detalle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
