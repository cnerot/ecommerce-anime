import {
  INSCRIPTION_ETAPES,
} from '../actions/auth.actions';


// trois étapes d'inscription.
// type: 0 null - 1 structure - 2 proff - 3 eleve
const defaultState = {
  etape_inscription: 0,
  inscriptionType: 0,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {

    case INSCRIPTION_ETAPES:
      return {
        ...state,
          etape_inscription: action.payload,
      };
      break;
    default:
      return state;
  }
};

export default authReducer;
