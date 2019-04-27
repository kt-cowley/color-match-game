import { INITIALIZE_GAME, NEXT_LEVEL, END_GAME } from "../actions/game-actions";

const game = (state = {}, action) => {
  switch (action.type) {
    case INITIALIZE_GAME:
      return { score: 0, level: 0, hasWon: false };
    case NEXT_LEVEL:
      return { ...state, score: state.score + 10, level: state.level + 1 };
    case END_GAME:
      return { ...state, hasWon: true };
    default:
      return state;
  }
};

export default game;
