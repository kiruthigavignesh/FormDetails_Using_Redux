
import { combineReducers } from 'redux';

const initialState = {
  formData: {
    firstName: '',
    phone: '',
    email: '',
  },
};

const formDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FORM_DATA':
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.name]: action.payload.value,
        },
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  formData: formDataReducer,
});

export default rootReducer;
