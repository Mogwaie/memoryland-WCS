import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero-image.png";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="home-page">
      <Header
        path=""
        audioSrc="../src/assets/audio/DanceOfTheFairyFolk.mp3"
        isOnRepeat
        forefinger=""
        listenTheStory=""
        soundon="../src/assets/icons/soundon.svg"
        soundoff="../src/assets/icons/soundoff.svg"
      />
      <div className="home-body">
        <img src={heroImage} alt="" />
        <p>Train Your Brain with MemoryLand's Educational Game !</p>
        <Link to="/story">
          <button className="primary-button" type="button">
            {" "}
            Start the adventure now
          </button>
        </Link>
      </div>
      <div className="wave-container">
        <div className="water-waves" />
        <div className="water-waves2" />
      </div>
    </div>
  );
}
