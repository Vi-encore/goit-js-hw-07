const form = document.querySelector(".login-form");
const btn = document.querySelector('.login-form > button')
btn.classList.add('btn-ok')

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.elements.email;
  const password = e.target.elements.password;

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("All form fields must be filled in");
    return;
  }

  const user = {
    [email.name]: email.value.trim(),
    [password.name]: password.value.trim(),
  };

  console.log(user);
  e.currentTarget.reset();
});
