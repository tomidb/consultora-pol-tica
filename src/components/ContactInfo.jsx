import { MdOutlineLocationOn } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { MdWhatsapp } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import "./ContactInfo.css";

export function ContactInfo() {
  return (
    <div className="contact-info-container">
      <h3>Información de contacto</h3>
      <span>
        <MdOutlineLocationOn className="contact-icon" />
        Av. Carlos Pellegrini N° 781. Piso 12.
      </span>
      <span>
        <MdWhatsapp className="contact-icon" />
        (+54) 9 11 6001-8955
      </span>
      <span>
        <MdMailOutline className="contact-icon" />
        harrisoncompol@gmail.com
      </span>
      <h3 className="h3-redes">Seguinos en nuestras redes sociales</h3>
      <div className="redes-sociales">
        <FaSquareXTwitter />
        <FaFacebookSquare />
        <FaLinkedin />
        <FaInstagramSquare />
      </div>
    </div>
  );
}
