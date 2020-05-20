import { createStore, applyMiddleware } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { composeWithDevTools } from "redux-devtools-extension"; // with middlewares
import { logger } from "../middlewares/logger";
import thunk from "redux-thunk";
// import logger from "redux-logger";
import rootReducer from "../reducers";

const globalState = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default globalState;
