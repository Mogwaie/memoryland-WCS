import PropTypes from "prop-types";

export default function SingleCard({
  fruit,
  handleChoice,
  flipped,
  disabled,
  background,
  pirate,
}) {
  const handleClickCard = () => {
    if (!disabled) {
      handleChoice(fruit);
    }
  };

  return (
    <div className="singleCard">
      <div className={flipped ? "flipped" : ""}>
        <p className="card-front">{fruit.character} </p>
        <button
          style={background}
          type="button"
          className="card-back"
          onClick={handleClickCard}
        >
          <img src={pirate} alt="card back" />
        </button>
      </div>
    </div>
  );
}

SingleCard.propTypes = {
  fruit: PropTypes.objectOf(PropTypes.string).isRequired,
  handleChoice: PropTypes.func.isRequired,
  flipped: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  background: PropTypes.string.isRequired,
  pirate: PropTypes.string.isRequired,
};
