import React from "react";
import s from "./component-styles/GameCanvas.module.css";
import ComponentBar from "./ComponentBar";
import PaletteArea from "./PaletteArea";
import TargetMatch from "./TargetMatch";
import CurrentColor from "./CurrentColor";
import paletteActions from "../actions/palette-actions";
import colorActions from "../actions/color-actions";
import gameActions from "../actions/game-actions";
import { connect } from "react-redux";
import ScoreDisplay from "./ScoreDisplay";

class GameCanvas extends React.Component {
  render() {
    let { score, level, hasWon } = this.props.game;
    let color_name = this.props.colors.all[level];
    let color = this.props.colors.byName[color_name];

    return (
      <div className={`${s.container} container mt-5 p-5 bg-dark`}>
        <div className="row">
          <div className="col-3">
            <ComponentBar />
          </div>

          {!hasWon ? (
            <div className="col-9 d-flex flex-column justify-content-between">
              <ScoreDisplay level={level} score={score} />
              <div>
                <h1 className={`${s.text} text-light h3 font-weight-light`}>
                  Can you make...
                </h1>
                <TargetMatch color={color} />
              </div>

              <div className={`${s.paletteArea} text-center`}>
                <PaletteArea />
              </div>
              <div>
                <h1 className="text-center text-light display-4">=</h1>
                <CurrentColor targetColor={color} />
              </div>
            </div>
          ) : (
            <div className="col-9 d-flex flex-column">
              <ScoreDisplay level={level} score={score} />
              <div className="text-center h-100 d-flex flex-column justify-content-center">
                <div className="mb-5 pb-3">
                  <h1 className={`${s.text} text-light text-center`}>
                    You won!
                  </h1>
                  <button
                    className="btn btn-primary"
                    onClick={this.props.initializeGame}
                  >
                    Play again?
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

GameCanvas.propTypes = {};

const mapStateToProps = state => ({
  colors: state.colors,
  palette: state.palette,
  game: state.game
});

const mapDispatchToProps = dispatch => ({
  removeColor: color => dispatch(paletteActions.removeColor(color)),
  initializeColors: () => dispatch(colorActions.initializeColors()),
  initializeGame: () => dispatch(gameActions.initializeGame())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameCanvas);
