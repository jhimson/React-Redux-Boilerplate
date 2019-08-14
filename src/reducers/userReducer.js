const initialState = {
  users: { name: "jim" },
  fetching: false,
  fetched: false,
  error: null,
  test: "test"
};
export default function(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        users: { ...state.users, name: action.payload }
      };
      break;

    case "CHANGE_TEST":
      return {
        ...state,
        test: action.payload
      };
      break;

    default:
      return {
        ...state
      };
  }
}
