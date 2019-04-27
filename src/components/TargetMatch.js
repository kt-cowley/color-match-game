import React from "react";
import s from "./component-styles/TargetMatch.module.css";
import PropTypes from "prop-types";
import { BLACK, WHITE } from "../color-constants";

export default class TargetMatch extends React.PureComponent {
  handleClick = () => {
    this.props.onClick(this.props.color);
  };
  render() {
    let { name, hex } = this.props.color;
    let style =
      name === BLACK.name
        ? { backgroundColor: hex, color: WHITE.hex }
        : { backgroundColor: hex };
    return (
      <div style={style} className={s.target}>
        <div className=" d-flex flex-column justify-content-center h-100">
          <span className="text-uppercase h3 font-weight-light">{name}?</span>
        </div>
      </div>
    );
  }
}

TargetMatch.propTypes = {
  color: PropTypes.object.isRequired
  //   onClick: PropTypes.func.isRequired
};
