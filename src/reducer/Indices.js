const defaultState = {
  allIndices: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "ALL_INDICES":
      return { ...state, allIndices: action.payload };
    default:
      return { ...state };
  }
};
