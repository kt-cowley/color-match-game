export const NO_MATCH_COLOR = "#343a40";

export const RED = { name: "red", hex: "#dd2c00" };
export const YELLOW = { name: "yellow", hex: "#ffeb3b" };
export const BLUE = { name: "blue", hex: "#2962ff" };
export const WHITE = { name: "white", hex: "#FFFFFF" };
export const BLACK = { name: "black", hex: "#000000" };

export const BASE_COLORS = [RED, YELLOW, BLUE, WHITE, BLACK];

export const ORANGE = {
  name: "orange",
  hex: "#ff9800",
  components: [YELLOW, RED]
};

export const PURPLE = {
  name: "purple",
  hex: "#673ab7",
  components: [RED, BLUE]
};

export const GREEN = {
  name: "green",
  hex: "#4caf50",
  components: [YELLOW, BLUE]
};

export const LIGHT_ORANGE = {
  name: "light orange",
  hex: "#ffcc80",
  components: [RED, YELLOW, WHITE]
};
export const LIGHT_PURPLE = {
  name: "light purple",
  hex: "#b39ddb",
  components: [BLUE, RED, WHITE]
};
export const LIGHT_GREEN = {
  name: "light green",
  hex: "#b2dfdb",
  components: [BLUE, YELLOW, WHITE]
};

export const LIGHT_RED = {
  name: "light red",
  hex: "#ffcdd2",
  components: [RED, WHITE]
};
export const LIGHT_YELLOW = {
  name: "light yellow",
  hex: "#fff9c4",
  components: [YELLOW, WHITE]
};
export const LIGHT_BLUE = {
  name: "light blue",
  hex: "#b3e5fc",
  components: [BLUE, WHITE]
};
export const GREY = {
  name: "grey",
  hex: "#bdbdbd",
  components: [BLACK, WHITE]
};

export const DARK_ORANGE = {
  name: "dark orange",
  hex: "#ff6d00",
  components: [RED, YELLOW, BLACK]
};
export const DARK_PURPLE = {
  name: "dark purple",
  hex: "#4527a0",
  components: [BLUE, RED, BLACK]
};
export const DARK_GREEN = {
  name: "dark green",
  hex: "#004d40",
  components: [BLUE, YELLOW, BLACK]
};

export const DARK_RED = {
  name: "dark red",
  hex: "#721f05",
  components: [RED, BLACK]
};
export const DARK_YELLOW = {
  name: "dark yellow",
  hex: "#bcaa21",
  components: [YELLOW, BLACK]
};
export const DARK_BLUE = {
  name: "dark blue",
  hex: "#1a237e",
  components: [BLUE, BLACK]
};

export const MIX_COLORS = [
  ORANGE,
  PURPLE,
  GREEN,
  LIGHT_ORANGE,
  LIGHT_PURPLE,
  LIGHT_GREEN,
  LIGHT_RED,
  LIGHT_YELLOW,
  LIGHT_BLUE,
  GREY,
  DARK_ORANGE,
  DARK_PURPLE,
  DARK_GREEN,
  DARK_RED,
  DARK_YELLOW,
  DARK_BLUE
];

export const TOTAL_LEVELS = MIX_COLORS.length + BASE_COLORS.length;
