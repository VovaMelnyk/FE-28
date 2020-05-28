import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "../reducers";

const persistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(thunk);

const store = createStore(persistedReducer, composeWithDevTools(middleware));

export const persistor = persistStore(store);

export default store;
