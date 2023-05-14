import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import arrowleft from "../assets/icons/arrowleft.svg";

function ReturnButton({ path }) {
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };

  const urlPageList = ["/Win", "/", "/lose", "/win", "/Lose"];
  const [currentUrl, setCurrentUrl] = useState("");
  const [color, setColor] = useState("");
  const [border, setBorder] = useState("");
  useEffect(() => {
    setCurrentUrl(window.location.pathname);
    if (location.pathname === "/map/fruits") {
      setColor("#E9FCFF");
      setBorder("none");
    }
    if (location.pathname === "/map/forest") {
      setColor("#C9FF72");
      setBorder("none");
    }
    if (location.pathname === "/map/animals") {
      setColor("#E0B800");
      setBorder("none");
    }
  }, []);
  const hideButton =
    urlPageList.find((urlPage) => urlPage === currentUrl) === undefined;

  return (
    <button
      className={`${hideButton ? "circle-button " : "circle-button-hidden"}`}
      type="button"
      onClick={handleClick}
      style={{ backgroundColor: `${color}`, border: `${border}` }}
    >
      <img src={arrowleft} alt="arrow left to go to previous page" />
    </button>
  );
}
ReturnButton.propTypes = {
  path: PropTypes.string.isRequired,
};
export default ReturnButton;
