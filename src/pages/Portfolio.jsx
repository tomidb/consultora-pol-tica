import { WorksCategories } from "../components/WorksCategories";
import { Sources } from "../components/Sources";
import { servicios } from "../data.json";
import "./Portfolio.css";
import { useState } from "react";

export function Portfolio() {
  let InitialDisplay = false;
  let InitialCategory = null;

  const [contentDisplay, setContentDisplay] = useState(InitialDisplay);
  const [contentCategory, setContentCategory] = useState(InitialCategory);
  const handleContent = (e) => {
    setContentDisplay(true);
    let CategoryState = e.target.alt || e.target.textContent;
    console.log(contentDisplay);
    console.log(CategoryState);
    setContentCategory(CategoryState);
  };

  return (
    <section className="portfolio-section">
      <h2>Conocé nuestros trabajos</h2>
      <div className="portfolio-container">
        <div className="portfolio-categories">
          {servicios.map((servicio) => (
            <WorksCategories
              key={crypto.randomUUID()}
              url={servicio.url}
              title={servicio.title}
              href={servicio.href}
              handleContent={handleContent}
            />
          ))}
        </div>
        <div className="portfolio-content">
          {contentDisplay ? (
            <Sources contentCategory={contentCategory} />
          ) : null}
        </div>
      </div>
    </section>
  );
}
