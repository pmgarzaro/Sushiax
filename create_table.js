const formDataString = localStorage.getItem('formData');
const formData = JSON.parse(formDataString);

const tablesContainer = document.getElementById('tablesContainer');

for (const fieldName of Object.keys(formData)) {
  const table = document.createElement('table');
  const fieldValues = formData[fieldName].split(", ");

  let isFirstRow = true;
  for (const value of fieldValues) {
    const row = document.createElement('tr');

    if (isFirstRow) {
      const headerCell = document.createElement('th');
      headerCell.textContent = fieldName;
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

const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function clearFormData() {
  localStorage.removeItem('formData');
  window.location.href = `orders.html`;
});
