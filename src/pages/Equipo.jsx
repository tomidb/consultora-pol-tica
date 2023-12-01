import "./Equipo.css";
import { TeamCards } from "../components/TeamCards";
import { profiles } from "../data.json";

export function Equipo() {
  return (
    <section className="team-section">
      <h2>Conoce nuestro equipo</h2>
      <div className="team-cards-container">
        {profiles.map((profile) => (
          <TeamCards
            key={profile.name}
            url={profile.url}
            name={profile.name}
            competences={profile.competences}
            biotext={profile.biotext}
            trabajos={profile.trabajos}
          />
        ))}
      </div>
    </section>
  );
}
