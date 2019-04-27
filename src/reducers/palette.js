import {
  ADD_TO_PALETTE,
  REMOVE_FROM_PALETTE
} from "../actions/palette-actions";

import { NEXT_LEVEL, INITIALIZE_GAME } from "../actions/game-actions";

const palette = (state = [], action) => {
  let colors = undefined;
  switch (action.type) {
    case ADD_TO_PALETTE:
      colors = new Set([...state, action.color.name]);
      return Array.from(colors.values());
    case REMOVE_FROM_PALETTE:
      colors = new Set([...state]);
      colors.delete(action.color.name);
      return Array.from(colors.values());
    case NEXT_LEVEL:
    case INITIALIZE_GAME:
      return [];
    default:
      return state;
  }
};

export default palette;
