import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';



export function configureStore(initialState) {
    // console.log(thunk);
    // const logger = createLogger();
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
    return store;
}

// export function configureHistory(store) {
//     const history = syncHistoryWithStore(browserHistory, store);
//     return history;
// }

