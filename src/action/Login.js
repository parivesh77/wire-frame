export const login = (formvalues) => (dispatch) => {
  formvalues.isLoggedIn = true;
  dispatch({
    type: "LOGIN",
    payload: formvalues,
  });
};

export const logout = (formvalues) => (dispatch) => {
  formvalues.isLoggedIn = false;
  dispatch({
    type: "LOGOUT",
    payload: formvalues,
  });
};
