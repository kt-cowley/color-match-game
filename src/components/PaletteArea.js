import React from "react";
import s from "./component-styles/PaletteArea.module.css";
import ColorComponent from "./ColorComponent";
import { connect } from "react-redux";
import paletteActions from "../actions/palette-actions";
import colorActions from "../actions/color-actions";

class PaletteArea extends React.Component {
  componentDidMount() {
    this.props.initializeColors();
  }
  render() {
    let { palette } = this.props;
    return palette.length === 0 ? (
      <p className={`${s.text} text-muted pt-5`}>( Select colors to begin )</p>
    ) : (
      palette.map((item, index) => (
        <React.Fragment key={index}>
          {palette.length > 1 && index >= 1 && (
            <span className="text-light display-4">+</span>
          )}
          <ColorComponent
            color={this.props.colors.byName[item]}
            onClick={this.props.removeColor}
          />
        </React.Fragment>
      ))
    );
  }
}

PaletteArea.propTypes = {};

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  removeColor: color => dispatch(paletteActions.removeColor(color)),
  initializeColors: () => dispatch(colorActions.initializeColors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaletteArea);
