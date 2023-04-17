const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const formData = new FormData(registerForm);
  const name = formData.get('name');
  const order = formData.get('order');
  const formObject = JSON.parse(localStorage.getItem('formData')) || {};
  formObject[name] = (formObject[name] || '') + ', ' + order;
  localStorage.setItem('formData', JSON.stringify(formObject));
  window.location.href = "index.html";
});