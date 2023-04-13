const selectGenre = (genreName) => {
  const action = {
    type: "SELECT_GENRE",
    payload: {
      name: genreName,
    },
  };
  return action;
};

const addToPlaylist = (albumId) => {
  const action = {
    type: "ADD_TO_PLAYLIST",
    payload: {
      albumId: albumId,
    },
  };
  return action;
};

const deleteFromPlaylist = (albumId) => {
  const action = {
    type: "DELETE_FROM_PLAYLIST",
    payload: {
      albumId: albumId,
    },
  };
  return action;
};

const clearPlaylist = () => {
  const action = {
    type: "CLEAR_PLAYLIST",
  };
  return action;
};

const setSearchRequest = (searchRequest) => {
  const action = {
    type: "SET_SEARCH",
    payload: {
      searchRequest: searchRequest,
    },
  };
  return action;
};

export const actions = {
  selectGenre,
  addToPlaylist,
  deleteFromPlaylist,
  clearPlaylist,
  setSearchRequest,
};
