/*

import { createContext, useState } from "react";

const ModalContext = createContext();

const initialModalDisplay = false;
const initialModalData = {};

 const ModalProvider = ({ children }) => {
  const [modalDisplay, setModalDisplay] = useState(initialModalDisplay);
  const [modalData, setModalData] = useState(initialModalData);

  const handleModal = (e, url, name, competences, biotext) => {
    if (modalDisplay == initialModalDisplay) {
      setModalDisplay(true);
      let modalData = { url, name, competences, biotext };
      setModalData(modalData);
    } else {
      setModalDisplay(initialModalDisplay);
      setModalData(initialModalData);
    }
  };

  const data = { modalDisplay, modalData, handleModal };

  return <ModalContext.Provider value={data}>{children}</ModalContext.Provider>;
};

export { ModalProvider };
export default ModalContext;


*/
