//import { dispatch } from 'react-redux';
import {store} from "../index";
export  const INSCRIPTION_ETAPES = "changer_étapes";
export  const LOGIN_EMAIL = "Texte_email";
export  const LOGIN_PASSWORD = "text_password";
export  const LOGIN_ACTION  = "login";

export const inscriptionEtapeAction = etape => ({
  type: INSCRIPTION_ETAPES,
  payload: etape
});


export const loginEmailAction = (text) => ({
  type: LOGIN_EMAIL,
  payload: text
});

export const loginPasswordAction = (text) => ({
  type: LOGIN_PASSWORD,
  payload: text
});


export const loginAction = () => {
/*
il faudrait pouvoir stoquer le resultat dans la mémoire cache de l'ordi / react
un dispatch de + 

localStorage.setItem('myData', data);

    */
  return dispatch => { 
  	fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => store.dispatch(loginActionDispatcher(json)))
	}
}

export const loginActionDispatcher = (data) => {
  return {
    type: LOGIN_ACTION,
    payload: data
  }
}