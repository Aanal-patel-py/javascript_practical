import { validateProductForm, initLiveValidation } from "./validation.js";
import { addProduct, getProducts } from "./storage.js";

function loadProductOnPage() {
  const products = getProducts();
  const tbody = document.getElementById("productTable");
  tbody.innerHTML = "";
  products.forEach((product) => {
    appendProductToTable(product);
  });
}

//run this function when the page is fully loaded, to ensure all DOM elements are available
document.addEventListener("DOMContentLoaded", () => {
  loadProductOnPage(); 
  initLiveValidation(); 
});

document.getElementById("productForm").addEventListener("submit", function (e) {
  e.preventDefault();
  if (!validateProductForm()) return;

  const newProduct = {
    id: Number(document.getElementById("productId").value),
    name: document.getElementById("productName").value.trim(),
    image: document.getElementById("productImage").value.trim(),
    price: Number(document.getElementById("productPrice").value),
    description: document.getElementById("productDesc").value.trim(),
  };

  addProduct(newProduct);
  appendProductToTable(newProduct);

  console.log("Form is valid — ready to save");
  this.reset(); //clear form after submission
});

function appendProductToTable(product) {
  const tbody = document.getElementById("productTable");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${product.id}</td>
    <td>${product.name}</td>
    <td><img src="${product.image}" alt="${product.name}" width="50" height="50" style="object-fit:cover;border-radius:6px;"></td>
    <td>${product.price.toFixed(2)} &#8377;</td>
    <td>${product.description}</td>
     <td>
      <button class="btn btn-sm btn-warning me-2">Update</button>
      <button class="btn btn-sm btn-danger">Delete</button>
    </td>
  `;
  tbody.appendChild(row);
}
