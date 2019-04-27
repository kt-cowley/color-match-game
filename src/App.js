import React from "react";
import "./App.css";
import GameCanvas from "./components/GameCanvas";
import colorActions from "./actions/color-actions";
import { connect } from "react-redux";

const App = props => {
  if (!props.colors.all) {
    props.initializeColors();
  }
  return <GameCanvas />;
};

App.propTypes = {};

const mapStateToProps = state => ({
  colors: state.colors
});

const mapDispatchToProps = dispatch => ({
  initializeColors: () => dispatch(colorActions.initializeColors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
