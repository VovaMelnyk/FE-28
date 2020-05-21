import { createStore, applyMiddleware } from "redux";
import {
  devToolsEnhancer,
  composeWithDevTools,
} from "redux-devtools-extension";
import logger from "redux-logger";
import { ownLogger } from "../middlewares/logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const middleware = [thunk];

const compose = composeWithDevTools(applyMiddleware(...middleware));

const globalState = createStore(rootReducer, compose);

export default globalState;
