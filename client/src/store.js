import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const enhancers = [];

const isDevelopment = process.env.NODE_ENV === "developement";
if (
	isDevelopment &&
	typeof window !== "undefined" &&
	window.devToolsExtension
) {
	enhancers.push(window.devToolsExtension());
}

const store = createStore(
	rootReducer,
	initialState,
	compose(
		applyMiddleware(...middleware),
		...enhancers
	)
);

/*** Use in development enviroment to access Redux dev tools ***

const store = createStore(
	rootReducer,
	initialState,
	compose(
		applyMiddleware(...middleware),
		(window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__())
	)
);
*/

export default store;
