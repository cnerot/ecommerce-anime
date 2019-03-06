export  const INSCRIPTION_ETAPES = "changer_étapes";
export  const INSCRIPTION_EMAIL = "Texte_email";
export  const INSCRIPTION_PASSWORD = "text_password";

export const inscriptionEtapeAction = etape => ({
  type: INSCRIPTION_ETAPES,
  payload: etape
});


export const inscriptionEmail = (text) => ({
  type: INSCRIPTION_EMAIL,
  payload: text
});

export const inscriptionPassword = (text) => ({
  type: INSCRIPTION_PASSWORD,
  payload: text
});