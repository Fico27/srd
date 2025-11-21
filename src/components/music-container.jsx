function MusicContainer() {
  return (
    <div className="music-container">
      <h2>Check out my latest</h2>
      <div className="video-container"></div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/P2rNC3xkvrE?si=nq_x0tRfVB76wjiG"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default MusicContainer;
