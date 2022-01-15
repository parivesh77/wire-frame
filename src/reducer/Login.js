const defaultState = {
  userDetails: {},
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, userDetails: action.payload };
      case "LOGOUT":
        return { ...state, userDetails: action.payload };
    default:
      return { ...state };
  }
};
