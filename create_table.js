const dataString = localStorage.getItem('formData');
const data = JSON.parse(dataString);

// Crée une div table pour chaque clef du tableau
const tablesContainer = document.getElementById('tablesContainer');

for (const key of Object.keys(data)) {
  const table = document.createElement('table');
  const values = data[key].split(", ");

  let isFirstRow = true;
  for (const value of values) {
    const row = document.createElement('tr');

    if (isFirstRow) {
      const headerCell = document.createElement('th');
      headerCell.textContent = key;
      row.appendChild(headerCell);
      isFirstRow = false;
    }

    const valueCell = document.createElement('td');
    valueCell.textContent = value.trim();
    row.appendChild(valueCell);

    table.appendChild(row);
  }

  tablesContainer.appendChild(table);
}

// Ajoute un gestionnaire d'événements pour effacer les données stockées
const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function() {
  localStorage.removeItem('formData');
  window.location.href = "orders.html";
});