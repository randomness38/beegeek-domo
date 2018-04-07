import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import reducer from './reducers'

export const history = createHistory();

const configureStore = () => {
    const middlewares = [thunk];
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    // if (process.env.NODE_ENV !== 'production') {
    //     middlewares.push(logger);
    // }

    const store = createStore(
        reducer,
        composeEnhancers(applyMiddleware(...middlewares)),
    );

    return store;
}

export default configureStore;
