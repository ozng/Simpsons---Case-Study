import StackNavigator from "./src/navigation/StackNavigator";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'

import character from './src/store/reducers/character';

const rootReducer = combineReducers({
  characters: character,
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
}
