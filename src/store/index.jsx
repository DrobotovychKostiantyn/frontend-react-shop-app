import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import reducers from '../modules/reducers/rootReducer';

const middleware = applyMiddleware(ReduxThunk);

const store = createStore(reducers, composeWithDevTools(middleware));

export default store;
