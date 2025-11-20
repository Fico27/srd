import Slider from "react-slick";

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
    "https://via.placeholder.com/1200x600?text=Performance+Photo+1",
    "https://via.placeholder.com/1200x600?text=Album+Art+2",
    "https://via.placeholder.com/1200x600?text=Stage+Shot+3",
    "https://via.placeholder.com/1200x600?text=Music+Event+4",
  ];

  return (
    <section className="hero">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="slide">
            <img src={img} alt={`Slide ${index + 1}`} />
            <div className="overlay">
              <h1>Welcome to St. Srd Perisa's World</h1>
              <p>Discover the rhythm and soul of blues inspired music</p>
              <button className="cta-button">Explore Music</button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Hero;
