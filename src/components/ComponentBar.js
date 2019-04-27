import React from "react";
import { BASE_COLORS } from "../color-constants";
import ColorComponent from "./ColorComponent";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import paletteActions from "../actions/palette-actions";

class ComponentBar extends React.Component {
  render() {
    return BASE_COLORS.map((item, index) => (
      <React.Fragment key={index}>
        <ColorComponent color={item} onClick={this.props.addColor} />
        <br />
      </React.Fragment>
    ));
  }
}

ColorComponent.propTypes = {
  color: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  addColor: color => dispatch(paletteActions.addColor(color))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentBar);
