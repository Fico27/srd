import "./hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <p>Discover the rhythm and soul of blues inspired music</p>
        <button onClick={() => navigate("/music")} className="cta-button">
          Explore Music
        </button>
      </div>
    </section>
  );
}

export default Hero;
