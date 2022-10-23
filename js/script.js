const signIn = document.getElementById('signin');
const signUp = document.getElementById('signup');
const buttonClick = document.getElementById('btn');

function signup() {
  signIn.style.left = '-400px';
  signUp.style.left = '50px';
  buttonClick.style.left = '110px';
}
function signin() {
  signIn.style.left = '50px';
  signUp.style.left = '450px';
  buttonClick.style.left = '0px';
}
