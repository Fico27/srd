import "./Splash.css";

function Splash() {
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

      <button className="enter-button">Enter</button>
    </div>
  );
}

export default Splash;
