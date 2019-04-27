import { combineReducers } from "redux";
import palette from "./palette";
import colors from "./colors";
import game from "./game";

export default combineReducers({ palette, colors, game });
