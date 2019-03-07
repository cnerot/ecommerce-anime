import {
  INSCRIPTION_ETAPES,
  LOGIN_EMAIL,
  LOGIN_PASSWORD,
  LOGIN_ACTION
} from '../actions/auth.actions';


const defaultState = {
  etape_auth: 0,
  inscriptionType: 0,
  email_login_form: "",
  password_login_form: "",
  userID: null,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {

    case INSCRIPTION_ETAPES:
      return {
        ...state,
          etape_inscription: action.payload,
      };
      break;
    case LOGIN_EMAIL:
    var newText = action.payload;
    return {
        ...state,
          email_login_form: newText,
    };
    break;
    case LOGIN_PASSWORD:
    var newText = action.payload;
    return {
        ...state,
          password_login_form: newText,
    };
    break;
    case LOGIN_ACTION:
    console.log(action.payload);

    return {
      ...state,
      userID: action.payload.userId,
      etape_auth: 1,
    }
    break;
    default:
      return state;
  }
};

export default authReducer;
