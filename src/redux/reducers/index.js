const initialState = {
  song: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SONG":
      return {
        ...state,
        song: action.payload,
      };
    default:
      return state;
  }
};
export default mainReducer;
