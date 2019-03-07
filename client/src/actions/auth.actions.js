//import { dispatch } from 'react-redux';
import {store} from "../index";
import {qs} from 'qs';
import history from '../history' 
export  const INSCRIPTION_ETAPES = "changer_étapes";
export  const LOGIN_EMAIL = "Texte_email";
export  const LOGIN_PASSWORD = "text_password";
export  const LOGIN_ACTION  = "login";
export  const DECONNEXION_ACTION = "deconnexion";
export const INSCRIPTION_EMAIL = "inscription email";
export const INSCRIPTION_PASSWORD = "inscription password";
export const INSCRIPTION_COPIE_PASSWORD = "inscription password copie";
export const INSCRIPTION = 'inscription';
export const ALERT_MESSAGE  = "alert message";
export const REMOVE_ALERT  = "retirer les alertes";
export const REDIRECT_OK ='redirect'; 
export const TOKEN_OK ='token ok'; 

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





export const inscriptionEmailAction = (text) => ({
  type: INSCRIPTION_EMAIL,
  payload: text
});

export const inscriptionPasswordAction = (text) => ({

  type: INSCRIPTION_PASSWORD,
  payload: text
});

export const inscriptionCopiePasswordAction = (text) => ({
  type: INSCRIPTION_COPIE_PASSWORD,
  payload: text
});



export const inscriptionAction = (email, password) => {
  //console.log(email+ '--' + password);
  var details = {
      'email': email,
      'password': password,
  };

  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  return dispatch => { 
    fetch('http://0.0.0.0:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody
    })
    .then(response => response.json())
    .then(json => {
      if(json.success == true){
        store.dispatch(setAlertMessage("vous ete bien inscrit"))
        
      }else if(json.success == false)
        store.dispatch(setAlertMessage('Les informations fournies contiennent des erreurs'))

    })
    .catch((e) => store.dispatch(setAlertMessage("Une erreur du serveur c'est produite. ")));
  }
}

export const inscriptionActionDispatcher = (data) => {
  return {
    type: INSCRIPTION,
    payload: data
  }
}

export const setAlertMessage = (texte) => {
 return {
    type: ALERT_MESSAGE,
    payload: texte
  }
}

export const loginAction = (email, password) => {
/*
il faudrait pouvoir stoquer le resultat dans la mémoire cache de l'ordi / react
un dispatch de + 

localStorage.setItem('myData', data);

    */
var details = {
      'email': email,
      'password': password,
  };

  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  return dispatch => { 
    fetch('http://R:3000/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody
    })
    .then(response => response.json())
    .then(json => {
      if(json.success == true){

        localStorage.setItem('token', json.token);
        store.dispatch(loginActionDispatcher(1, json.token));
        
      }else if(json.msg == "auth incorect"){
        store.dispatch(setAlertMessage('auth incorect'));
      }
    else if(json.message == "Authentication failed. User not found.")
        store.dispatch(setAlertMessage('Authentication failed. User not found.'))

    }
    ).catch((e) => {console.log('La requete a generer une erreur.')});
  }
}
export const saveToken = (token) => {
  console.log(token);
}

export const loginActionDispatcher = (data, token) => {

  return {
    type: LOGIN_ACTION,
    payload: data
  }
}

export const deconnexionActionDispatcher = (data) => {
  return {
    type: DECONNEXION_ACTION,
    payload: data
  }
}



export const removeAlert = () => {

  //setTimeout(function() { this.props.removeAlert() }, 1000);

    return dispatch => {
      setTimeout(function() { store.dispatch(removeAlertDispatch(removeAlertDispatch)) }, 2000)
    }

}

export const removeAlertDispatch = () => {
  return {
    type: REMOVE_ALERT,
    payload: true
  }
}


export const setRedirectOK = () => {
    return {
    type: REDIRECT_OK,
    payload: true
  }
}

export const tokenExistAction = (token) => {
  return {
    type: TOKEN_OK,
    payload: token
  }
}