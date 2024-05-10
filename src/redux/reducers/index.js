const initialState = {
  song: {
    content: [],
    queenSong: [],
    katyPerrySong: [],
    eminemSong: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SONG":
      return {
        ...state,
        song: { content: action.payload },
      };
    case "ADD_QEEN_SONG":
      return {
        ...state,
        song: {...state.song, queenSong: action.payload },
      };
    case "ADD_KATY_PERRY_SONG":
      return {
        ...state,
        song: {...state.song, katyPerrySong: action.payload },
      };
    case "ADD_EMINEM_SONG":
      return {
        ...state,
        song: {...state.song, eminemSong: action.payload },
      };
    default:
      return state;
  }
};
export default mainReducer;
