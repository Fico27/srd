import Nav from "../components/nav";
import Hero from "../components/hero";
import Footer from "../components/footer";
import AboutMe from "../components/about-me";

function AboutPage() {
  return (
    <div className="page">
      <Nav></Nav>
      <div className="page-content">
        <AboutMe />
        <Footer />
      </div>
    </div>
  );
}

export default AboutPage;
