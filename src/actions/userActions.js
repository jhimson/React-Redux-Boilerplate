export const CHANGE_NAME = name => dispatch => {
  dispatch({ type: "CHANGE_NAME", payload: name });
};

export const CHANGE_TEST = test => dispatch => {
  dispatch({ type: "CHANGE_TEST", payload: test });
};
