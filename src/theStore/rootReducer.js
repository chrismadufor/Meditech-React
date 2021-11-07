let rootReducer = (state, action) => {
    switch (action.type) {
      case "bgChange":
        return {
          ...state,
          bgColor: action.payload
        };
      case "colorChange":
        return {
          ...state,
          activeColor: action.payload
        };
      default:
        return state;
    }
  };

export default rootReducer