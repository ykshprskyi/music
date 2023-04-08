import { legacy_createStore as createStore } from "redux";
import albums from "../data/dataAlbums";

const initialState = {
  gamesList: albums,
  selectedGenre: "none",
  searchRequest: "",
  playlist: [],
};
const reducer = (state, action) => {};

const store = createStore(reducer, initialState);
export default store;
