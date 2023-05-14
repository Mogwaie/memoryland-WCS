import { Link } from "react-router-dom";
import Header from "../components/Header";

function Error404() {
  return (
    <>
      <Header
        path="/"
        audioSrc="../src/assets/audio/hitMeBaby.mp3"
        forefinger=""
        listenTheStory=""
        isOnRepeat
        soundon="../src/assets/icons/soundon.svg"
        soundoff="../src/assets/icons/soundoff.svg"
      />
      <div className="error404Div">
        <img
          className="skullImg"
          src="./src/assets/images/skull.png"
          alt="Skull"
        />
        <h2>404</h2>
        <h2>Page not found</h2>
        <div className="buttonAndBottleDiv">
          <Link to="/map">
            <button className="primary-button error404Button" type="button">
              Go to the map
            </button>
          </Link>
          <img
            className="rumBottleImg"
            src="./src/assets/images/rum-bottle.png"
            alt="Bottle of rum"
          />
        </div>
      </div>
    </>
  );
}

export default Error404;
