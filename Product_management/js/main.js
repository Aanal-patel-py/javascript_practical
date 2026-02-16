import { validateProductForm, initLiveValidation } from "./validation.js";

//run this function when the page is fully loaded, to ensure all DOM elements are available
document.addEventListener("DOMContentLoaded", () => {
  renderTable();
  initLiveValidation(); // ⭐ this activates live validation
});


document.getElementById("productForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const isValid = validateProductForm();

  if (!isValid) return;

  
  console.log("Form is valid — ready to save");
});
