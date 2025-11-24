import { useNavigate } from "react-router-dom";
import "./Splash.css";

function Splash() {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      {/* LEFT SIDE – VIDEO */}
      <div className="bit-container">
        <video
          className="splash-video"
          autoPlay
          loop
          muted
          playsInline
          src="/videos/stipe-playing.mp4"
        />
      </div>

      {/* RIGHT SIDE – TEXT (only visible on desktop, centered on mobile) */}
      <div className="text-container">
        <h1 className="splash-heading">St. Srđ Periša</h1>
        <button onClick={() => navigate("/home")} className="enter-button">
          Enter
        </button>
      </div>
    </div>
  );
}

export default Splash;
