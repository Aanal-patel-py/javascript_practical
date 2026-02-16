import { validateProductForm } from "./validation.js";

document.getElementById("productForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const isValid = validateProductForm();

  if (!isValid) return;

  
  console.log("Form is valid — ready to save");
});
