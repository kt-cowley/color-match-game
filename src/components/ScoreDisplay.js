import React from "react";
import PropTypes from "prop-types";
import s from "./component-styles/ScoreDisplay.module.css";

function ScoreDisplay(props) {
  let { score, level } = props;
  return (
    <div className="ml-auto text-light">
      <span className={s.text}>
        Score:<span className="text-right float-right ml-2">{score}</span>
        <br />
        Level: <span className="text-right float-right ml-2">{level}</span>
      </span>
    </div>
  );
}

export default ScoreDisplay;

ScoreDisplay.propTypes = {
  score: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired
};
