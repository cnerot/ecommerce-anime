import {
  INSCRIPTION_ETAPES,
  INSCRIPTION_EMAIL,
  INSCRIPTION_PASSWORD
} from '../actions/auth.actions';


const defaultState = {
  etape_inscription: 0,
  inscriptionType: 0,
  email_login_form: "",
  password_login_form: "",
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {

    case INSCRIPTION_ETAPES:
      return {
        ...state,
          etape_inscription: action.payload,
      };
      break;
    case INSCRIPTION_EMAIL:
    var newText = action.payload;
    return {
        ...state,
          email_login_form: newText,
    };
    break;
    case INSCRIPTION_PASSWORD:
    var newText = action.payload;
    return {
        ...state,
          password_login_form: newText,
    };
    break;
    default:
      return state;
  }
};

export default authReducer;
