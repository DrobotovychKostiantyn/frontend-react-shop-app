import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import reducers from './../modules/reducers';
import ReduxThunk from 'redux-thunk';

const middleware = applyMiddleware(ReduxThunk);

const store = createStore(state => state, composeWithDevTools(middleware));

export default store;
