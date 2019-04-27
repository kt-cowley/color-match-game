import React from "react";
import { connect } from "react-redux";
import s from "./component-styles/CurrentColor.module.css";
import paletteActions from "../actions/palette-actions";
import colorActions from "../actions/color-actions";
import { BLACK, WHITE, NO_MATCH_COLOR, TOTAL_LEVELS } from "../color-constants";
import gameActions from "../actions/game-actions";
import PropTypes from "prop-types";

class CurrentColor extends React.Component {
  constructor(props) {
    super(props);
  }
  checkColor = current_color => {
    console.log(this.props.game.level);
    console.log(TOTAL_LEVELS);
    if (current_color.name === this.props.targetColor.name) {
      if (this.props.game.level < TOTAL_LEVELS - 1) {
        let _this = this;
        setTimeout(function() {
          _this.props.nextLevel();
        }, 750);
      } else {
        this.props.endGame();
      }
    }
  };

  getColor = () => {
    let { palette, colors } = this.props;
    let { all } = colors;
    if (palette.length === 1) {
      // return this.props.colors.byName[palette[0]];
      let name = palette[0];
      this.checkColor(this.props.colors.byName[name]);
      return this.props.colors.byName[name];
    } else if (palette.length > 1) {
      let hasMatch = false;
      for (let c in all) {
        if (!hasMatch) {
          let color = colors.byName[colors.all[c]];
          if (color.components && color.components.length === palette.length) {
            let isMatch = true;
            for (let c of color.components) {
              if (!palette.includes(c.name)) isMatch = false;
            }
            if (isMatch) {
              this.checkColor(color);
              return color;
            }
          }
        }
      }
    }
    return undefined;
  };

  render() {
    let name = "No match!";
    let hex = NO_MATCH_COLOR;
    let color = this.getColor();

    if (color) {
      name = color.name;
      hex = color.hex;
    }
    let style =
      name === BLACK.name
        ? { backgroundColor: hex, color: WHITE.hex }
        : { backgroundColor: hex };

    return (
      <div className={s.currentColor} style={style}>
        {color ? (
          <div className="d-flex flex-column justify-content-center h-100">
            <span className="text-uppercase h3 font-weight-light text-center">
              {name}
            </span>
          </div>
        ) : (
          <div
            className={`${
              s.currentColor
            } text-uppercase h3 text-light font-weight-light text-center`}
          >
            <span>{name}</span>
          </div>
        )}
      </div>
    );
  }
}

CurrentColor.propTypes = {
  targetColor: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  colors: state.colors,
  palette: state.palette,
  game: state.game
});

const mapDispatchToProps = dispatch => ({
  removeColor: color => dispatch(paletteActions.removeColor(color)),
  initializeColors: () => dispatch(colorActions.initializeColors()),
  nextLevel: () => dispatch(gameActions.nextLevel()),
  endGame: () => dispatch(gameActions.endGame())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentColor);
