// Define action constants
export const INITIALIZE_GAME = "INITIALIZE_GAME";
export const NEXT_LEVEL = "NEXT_LEVEL";
export const END_GAME = "END_GAME";

let gameActions = {
  initializeGame: () => ({
    type: INITIALIZE_GAME
  }),

  nextLevel: () => ({
    type: NEXT_LEVEL
  }),

  endGame: () => ({ type: END_GAME })
};

export default gameActions;
