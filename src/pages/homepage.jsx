import Nav from "../components/nav";
import Hero from "../components/hero";
import Footer from "../components/footer";
import MusicContainer from "../components/music-container";
import Concerts from "../components/concerts";

function Homepage() {
  return (
    <div className="page">
      <Nav></Nav>
      <Hero></Hero>
      <Concerts></Concerts>
      <Footer></Footer>
    </div>
  );
}

export default Homepage;
