const initialState = {
  tweets: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_TWEET":
      return {
        ...state,
        tweets: [...state.tweets, action.payload]
      };
      break;

    default:
      return {
        ...state
      };
  }
}
