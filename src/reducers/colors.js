import { INITIALIZE_COLORS } from "../actions/color-actions";

const colors = (state = {}, action) => {
  switch (action.type) {
    case INITIALIZE_COLORS:
      let byName = {};
      let allColors = [];

      for (let color of action.colors) {
        let name = color.name;
        byName[name] = color;
        allColors.push(name);
      }
      return { byName: byName, all: shuffle([...allColors]) };
    default:
      return state;
  }
};

export default colors;

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
