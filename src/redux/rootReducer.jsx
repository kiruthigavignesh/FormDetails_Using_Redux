import { combineReducers } from 'redux';
import formReducer from './reducer';

const rootReducer = combineReducers(
  {
        form: formReducer,
}
);

export default rootReducer;
