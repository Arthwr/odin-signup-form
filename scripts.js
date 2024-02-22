const signupButton = document.getElementById("signup-btn");
const passwordInput = document.getElementById("new-password");
const confirmPasswordInput = document.getElementById("confirm-password");
const errorMsg = document.querySelector("#new-password+span");

function validatePwd(event) {
  const form = event.target.form;
  if (
    passwordInput.value &&
    confirmPasswordInput.value &&
    form.checkValidity()
  ) {
    if (passwordInput.value === confirmPasswordInput.value) {
      form.submit();
    } else {
      event.preventDefault();
      errorMsg.classList.add("error");
    }
  }
}

signupButton.addEventListener("click", validatePwd);
