import {Platform} from "react-native";
import {applyMiddleware, compose, createStore} from "redux";
import devTools from "remote-redux-devtools";
import promise from "redux-promise";
import thunk from "redux-thunk";
import logger from "redux-logger";

import RootReducer from "./Reducers";

const middleware = applyMiddleware(thunk, promise, logger);

const store = createStore(RootReducer, compose(middleware,
    devTools({
        name: Platform.OS,
        hostname: "localhost",
        port: 5678
    })));

export default store;