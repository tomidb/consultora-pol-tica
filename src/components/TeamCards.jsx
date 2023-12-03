/* eslint-disable react/prop-types */
import "./TeamCards.css";
import { BsArrowRight } from "react-icons/bs";
import { ProfileModal } from "./ProfileModal";
import { Trabajos } from "./Trabajos";
import { useState } from "react";

export function TeamCards({ url, name, competences, trabajos, biotext }) {
  const initialDisplay = false;
  const [modalDisplay, setModalDisplay] = useState(initialDisplay);
  const [trabajosDisplay, setTrabajosDisplay] = useState(initialDisplay);

  const handleModal = () => {
    console.log("HANDLE MODAL");
    if (modalDisplay == initialDisplay) {
      setModalDisplay(true);
    } else {
      setModalDisplay(initialDisplay);
    }
  };

  const handleTrabajos = () => {
    console.log("HANDLE TRABAJOS");
    if (trabajosDisplay == initialDisplay) {
      setTrabajosDisplay(true);
    } else {
      setTrabajosDisplay(initialDisplay);
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
              <button className="profile-btn" onClick={handleTrabajos}>
                Trabajos
                <BsArrowRight className="profile-btn-icon" />
              </button>
            ) : null}
          </div>
          {trabajosDisplay ? (
            <Trabajos trabajos={trabajos} handleTrabajos={handleTrabajos} />
          ) : null}
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
