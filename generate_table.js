const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", function(event) {
  // Empêche le comportement par défaut d'envoi du formulaire
  event.preventDefault();
  // Récupère les données du formulaire
  const formData = new FormData(registerForm);
  // Récupère l'objet de données du formulaire stocké dans le stockage local
  let formObject = JSON.parse(localStorage.getItem('formData')) || {};
  // Met à jour l'objet de données en ajoutant la nouvelle valeur à la clé existante
  formObject[formData.get('name')] = (formObject[formData.get('name')] || '') + ', ' + formData.get('order');
  // Stocke l'objet de données mis à jour dans le stockage local
  localStorage.setItem('formData', JSON.stringify(formObject));
  window.location.href = "index.html";
});