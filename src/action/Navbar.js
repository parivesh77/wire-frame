export const changeActiveMenu = (tabName) => (dispatch) => {
  dispatch({
    type: "NAV",
    tabName: tabName,
  });
};
