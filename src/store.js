import { createStore, applyMiddleware } from "redux";
import reducers from "../src/reducers/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

// export default createStore(
//   reducers,
//   composeWithDevTools(applyMiddleware(...middleware))
// );
export default createStore(reducers, applyMiddleware(...middleware));
