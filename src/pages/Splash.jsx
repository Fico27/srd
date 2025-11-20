import { useNavigate } from "react-router-dom";
import "./Splash.css";

function Splash() {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <h1 className="splash-heading">St. Srđ Periša</h1>

      <video
        className="splash-video"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        src="/videos/stipe-playing.mp4"
      ></video>

      <button onClick={() => navigate("/home")} className="enter-button">
        Enter
      </button>
    </div>
  );
}

export default Splash;
