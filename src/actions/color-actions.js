import { MIX_COLORS, BASE_COLORS } from "../color-constants";

// Define action constants
export const INITIALIZE_COLORS = "INITIALIZE_COLORS";

let colorActions = {
  initializeColors: () => ({
    type: INITIALIZE_COLORS,
    colors: [...MIX_COLORS, ...BASE_COLORS]
  })
};

export default colorActions;
