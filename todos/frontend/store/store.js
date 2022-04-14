import {createStore} from "redux";
import rootReducer from "../reducers/root_reducer";
import { applyMiddleware } from "redux";
import myThunk from "../middleware/thunk";
import logger from "redux-logger";

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState, applyMiddleware(myThunk, logger));
}

export default configureStore;