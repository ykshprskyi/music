import { legacy_createStore as createStore } from "redux";
import albums from "../data/dataAlbums";

const initialState = {
  albumsList: albums,
  selectedGenre: "none",
  searchRequest: "",
  playlist: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_GENRE":
      if (action.payload.name === "none")
        return {
          ...state,
          selectedGenre: action.payload.name,
          searchRequest: "",
          albumsList: albums,
        };
      else
        return {
          ...state,
          selectedGenre: action.payload.name,
          albumsList: albums.filter(
            (album) => album.album === action.payload.name
          ),
        };
    case "ADD_TO_PLAYLIST":
      if (state.playlist.find((el) => el.id === action.payload.albumId)) {
        return { ...state };
      } else {
        return {
          ...state,
          playlist: [
            ...state.playlist,
            albums.find((album) => album.id === action.payload.albumId),
          ],
        };
      }
    case "DELETE_FROM_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.filter(
          (el) => el.id !== action.payload.albumId
        ),
      };
    case "CLEAR_PLAYLIST": {
      return {
        ...state,
        playlist: [],
      };
    }
    case "SET_SEARCH":
      return {
        ...state,
        searchRequest: action.payload.searchRequest,
        albumsList: albums.filter((album) =>
          album.name.toLowerCase().includes(action.payload.searchRequest)
        ),
      };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);
export default store;
