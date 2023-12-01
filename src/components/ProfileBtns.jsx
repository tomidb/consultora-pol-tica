/* eslint-disable react/prop-types */
import { BsArrowRight } from "react-icons/bs";
import "./ProfileBtns.css";

export function ProfileBtns({ handleModal, value }) {
  return (
    <button className="profile-btn" onClick={handleModal}>
      {value}
      <BsArrowRight className="profile-btn-icon" />
    </button>
  );
}
