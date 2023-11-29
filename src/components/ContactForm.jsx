import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

export function ContactForm() {
  const refForm = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_7v59amk";
    const templateId = "template_k3fx0bq";
    const apiKey = "on9h9dHPXOvOF989x";

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apiKey)
      .then((result) => console.log(result.text))
      .catch((error) => console.log(error));
  };

  return (
    <form ref={refForm} action="" onSubmit={handleSubmit} className="form">
      <input type="text" name="name" placeholder="Nombre" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea
        name="message"
        maxLength="500"
        placeholder="Motivo de tu consulta"
        required
      />
      <input type="submit" value="Enviar" className="send-btn" />
    </form>
  );
}
