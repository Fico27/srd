import "./hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <h1>Welcome to St. Srd Perisa's World</h1>
      <p>Discover the rhythm and soul of blues inspired music</p>
      <div className="overlay">
        <img src="https://placehold.co/1200x600" alt="" />
        <button onClick={() => navigate("/music")} className="cta-button">
          Explore Music
        </button>
      </div>
    </section>
  );
}

export default Hero;
