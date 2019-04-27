import React from "react";
import s from "./component-styles/ColorComponent.module.css";
import PropTypes from "prop-types";
import { BLACK, WHITE, YELLOW } from "../color-constants";

export default class ColorComponent extends React.PureComponent {
  handleClick = () => {
    this.props.onClick(this.props.color);
  };
  render() {
    let { name, hex } = this.props.color;
    let style =
      name === BLACK.name
        ? { backgroundColor: hex, color: WHITE.hex }
        : { backgroundColor: hex };
    let classes =
      name === WHITE.name || name === YELLOW.name ? s.light : s.component;
    return (
      <div style={style} className={classes} onClick={this.handleClick}>
        <div className="d-flex flex-column justify-content-center h-100">
          <span>{name}</span>
        </div>
      </div>
    );
  }
}

ColorComponent.propTypes = {
  color: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};
