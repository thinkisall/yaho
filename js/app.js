const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const hidden_class = "hidden";
const userName_key = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(hidden_class);
  const userName = loginInput.value;
  localStorage.setItem(userName_key, userName);
  paintGreeting(userName);
}
loginForm.addEventListener("submit", onLoginSubmit);

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(hidden_class);
}

const saveUsername = localStorage.getItem(userName_key);

if (saveUsername === null) {
  loginForm.classList.remove(hidden_class);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(saveUsername);
}
