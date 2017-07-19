export const Credits = 'credits; open source community : react, webpack, babel, ecmascript, sails, w3c, stackoverflow ..';

export const BrowserUpgrade = ({close}) => <p className="tc w-100 ph5">
  You are using an <strong>outdated</strong> browser.
  Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.
  <span id="close-bu" role='button' onClick={() => close()}>&#10006;</span>
</p>;

export const initialState = '\
// here is a sample, you can start with it \n\n\
date = 07/13/2017 \n\
person \n\
  name = John Doe \n\
  age = 32 \n\
  contact \n\
    mobile = +21(0)800200010 \n\
    email = john.doe@emails.com \n\
  card type = master card \n\
\n\
// Example of Array \n\
service[0] // an array must start with word[0]  \n\
  product = rental car \n\
  brand = Peugeot 207 \n\
  period = 3 days \n\
  payed = true // boolean \n\n\
service[1] // [0,1,2,3..] and so forth \n\
  product = beach tent \n\
  period = 3 days \n\
  payed = true \n\
';
