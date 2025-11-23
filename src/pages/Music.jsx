import Nav from "../components/nav";
import MusicContainer from "../components/music-container";
import Footer from "../components/footer";

function Music() {
  return (
    <div className="page">
      <Nav />

      <div className="page-content">
        <MusicContainer />
        <Footer />
      </div>
    </div>
  );
}

export default Music;
