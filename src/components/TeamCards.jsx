/* eslint-disable react/prop-types */
import "./TeamCards.css";
import { BsArrowRight } from "react-icons/bs";
import { ProfileModal } from "./ProfileModal";
import { useState } from "react";

export function TeamCards({ url, name, competences, trabajos, biotext }) {
  const initialDispaly = false;
  const [modalDisplay, setModalDisplay] = useState(initialDispaly);

  const handleModal = () => {
    console.log("HANDLE MODAL");
    if (modalDisplay == initialDispaly) {
      setModalDisplay(true);
    } else {
      setModalDisplay(initialDispaly);
    }
  };

  return (
    <>
      <div className="profile-card-container">
        <img className="profile-card-image" src={`/media/${url}`} alt={name} />
        <div className="profile-info-container">
          <h3 className="profile-name">{name}</h3>
          <p className="profile-competences">{competences}</p>
          <div className="profile-btn-panel">
            <button className="profile-btn" onClick={handleModal}>
              Bio
              <BsArrowRight className="profile-btn-icon" />
            </button>
            {trabajos ? (
              <button className="profile-btn">
                Trabajos
                <BsArrowRight className="profile-btn-icon" />
              </button>
            ) : null}
          </div>
        </div>
      </div>
      {modalDisplay ? (
        <ProfileModal
          url={url}
          name={name}
          competences={competences}
          biotext={biotext}
          handleModal={handleModal}
        />
      ) : null}
    </>
  );
}
