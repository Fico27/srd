import Nav from "../components/nav";
import Hero2 from "../components/hero2";
import Footer from "../components/footer";
import AboutMe from "../components/about-me";

function AboutPage() {
  return (
    <div className="page">
      <Nav></Nav>
      <Hero2 />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default AboutPage;
