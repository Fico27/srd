import Nav from "../components/nav";
import Hero from "../components/hero";
import Footer from "../components/footer";
import MusicContainer from "../components/music-container";

function Homepage() {
  return (
    <div className="page">
      <Nav></Nav>
      <Hero></Hero>

      <MusicContainer></MusicContainer>
      <Footer></Footer>
    </div>
  );
}

export default Homepage;
