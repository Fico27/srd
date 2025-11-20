import Slider from "react-slick";
import "./hero.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Placeholder images
  const images = [
    "https://placehold.co/1200x600",
    "https://placehold.co/1200x600",
    "https://placehold.co/1200x600",
    "https://placehold.co/1200x600",
  ];

  return (
    <section className="hero">
      <h1>Welcome to St. Srd Perisa's World</h1>
      <p>Discover the rhythm and soul of blues inspired music</p>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="slide">
            <img src={img} alt={`Slide ${index + 1}`} />
            <div className="overlay">
              <button className="cta-button">Explore Music</button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Hero;
