import PropTypes from "prop-types";
import ReturnButton from "./ReturnButton";
import Sound from "./Sound";
import Logo from "../assets/icons/logo.svg";

export default function Header({
  path,
  audioSrc,
  isOnRepeat,
  forefinger,
  listenTheStory,
  soundon,
  soundoff,
}) {
  return (
    <header className="header">
      <ReturnButton path={path} />
      <img className="logo" src={Logo} alt="Logo site with a pirate parrot" />
      <Sound
        audioSrc={audioSrc}
        forefinger={forefinger}
        listenTheStory={listenTheStory}
        isOnRepeat={isOnRepeat}
        soundon={soundon}
        soundoff={soundoff}
      />
    </header>
  );
}
Header.propTypes = {
  path: PropTypes.string.isRequired,
  audioSrc: PropTypes.string.isRequired,
  isOnRepeat: PropTypes.bool.isRequired,
  forefinger: PropTypes.string.isRequired,
  listenTheStory: PropTypes.string.isRequired,
  soundon: PropTypes.string.isRequired,
  soundoff: PropTypes.string.isRequired,
};
