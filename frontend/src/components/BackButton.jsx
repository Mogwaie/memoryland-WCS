import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import arrowleft from "../assets/icons/arrowleft.svg";

function BackButton({ path }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };
  return (
    <button className="circle-button" type="button" onClick={handleClick}>
      <img src={arrowleft} alt="" />
    </button>
  );
}

BackButton.propTypes = {
  path: PropTypes.string.isRequired,
};

export default BackButton;
