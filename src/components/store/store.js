import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { authReducer } from "../reducers/authReducer";
import { uiReducer } from "../reducers/uiReducer";



// con esto podemos usar REDUX_DECTOOLS y tambien middlewares como el thunk
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; // sacado de github redux-devtools-extension

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
)
