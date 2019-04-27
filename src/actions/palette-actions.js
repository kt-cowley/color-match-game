// Define action constants
export const ADD_TO_PALETTE = "ADD_TO_PALETTE";
export const REMOVE_FROM_PALETTE = "REMOVE_FROM_PALETTE";

let paletteActions = {
  addColor: color => ({
    type: ADD_TO_PALETTE,
    color: color
  }),

  removeColor: color => ({
    type: REMOVE_FROM_PALETTE,
    color: color
  })
};

export default paletteActions;
