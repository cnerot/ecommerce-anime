import {
  INSCRIPTION_ETAPES,
  LOGIN_EMAIL,
  LOGIN_PASSWORD,
  LOGIN_ACTION,
  DECONNEXION_ACTION,
  INSCRIPTION_EMAIL,
  INSCRIPTION_PASSWORD,
  INSCRIPTION_COPIE_PASSWORD,
  ALERT_MESSAGE,
  REMOVE_ALERT
} from '../actions/auth.actions';


const defaultState = {
  etape_auth: 0,
  inscriptionType: 0,
  email_login_form: "",
  password_login_form: "",
  email_inscription_form: "",
  password_inscription_form: "",
  passwordCopie_inscription_form: "",
  userID: null,
  alert_message: "",
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

    return {
      ...state,
      userID: action.payload.userId,
      etape_auth: 1,
    }
    break;
    case DECONNEXION_ACTION:

    return {
      ...state,
      etape_auth: 0,
    }
    break;
    case INSCRIPTION_EMAIL:
    console.log('yoyo');
    return {
        ...state,
          email_inscription_form: action.payload,
    };
    break;

    case INSCRIPTION_PASSWORD:
    return {
        ...state,
          password_inscription_form: action.payload,
    };
    break;
    case INSCRIPTION_COPIE_PASSWORD:
    return {
        ...state,
          passwordCopie_inscription_form: action.payload,
    };
    break;
    case ALERT_MESSAGE: 
    return {
        ...state,
          alert_message: action.payload,
    };
    break;
    case REMOVE_ALERT: 
    return {
        ...state,
          alert_message: "",
    };  
    break;
    default:
      return state;
  }
};

export default authReducer;
