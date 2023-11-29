import { ContactForm } from "../components/ContactForm";
import { ContactInfo } from "../components/ContactInfo";

import "./Contacto.css";

export function Contacto() {
  return (
    <section className="section-contacto">
      <h2>Ponete en contacto con nosotros</h2>
      <div className="contacto-container">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}
