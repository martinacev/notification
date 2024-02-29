import PropTypes from "prop-types";
import { useState } from "react";
import classes from "./Header.module.css";

const Header = ({ onToggleColor, showColor }) => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    if (!buttonClicked) {
      onToggleColor();
      setButtonClicked(true);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.notification}>
          <h1 className={classes.title}>Notifications</h1>
          {showColor && (
            <div className={classes.number}>
              <p className={classes.color}>3</p>
            </div>
          )}
        </div>
        <button
          className={classes.btnRead}
          onClick={handleClick}
          disabled={buttonClicked}
        >
          Mark all as read
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  onToggleColor: PropTypes.func.isRequired,
  showColor: PropTypes.bool.isRequired,
};

export default Header;
