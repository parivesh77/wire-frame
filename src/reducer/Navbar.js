const defaultState = {
  activeTabs: {
    Dashboard: true,
    "All Indices": false,
    "52-week Low": false,
    "52-week High": false,
    "Top Gainers": false,
    "Top Loosers": false,
    Symbols: false,
  },
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case "NAV": {
      let tempObj = {...defaultState.activeTabs};
      for (let [key, value] of Object.entries(tempObj)) {
        if (key == action.tabName) {
          tempObj[key] = true;
        } else {
          tempObj[key] = false;
        }
      }
      return { ...state, activeTabs: tempObj };
    }
    default:
      return { ...state };
  }
};
