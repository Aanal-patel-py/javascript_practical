import { validateProductForm, initLiveValidation } from "./validation.js";
import { addProduct, getProducts,deleteProduct, updateProduct,productIdExists } from "./storage.js";


let editMode = false;
//run this function when the page is fully loaded, to ensure all DOM elements are available
document.addEventListener("DOMContentLoaded", () => {
  loadProductOnPage(); 
  initLiveValidation(); 

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
    if (!editMode && productIdExists(newProduct.id)) {
      alert("Product ID already exists");
      return;
    }

    if (editMode) {
      updateProduct(newProduct);
      loadProductOnPage();
      editMode = false;

      const modal = bootstrap.Modal.getInstance(document.getElementById("productModal"));
      modal?.hide();

      document.getElementById("productId").disabled = false;
      this.reset();
      return;
    }

    addProduct(newProduct);
    appendProductToTable(newProduct);

    console.log("Form is valid — ready to save");
    this.reset();
  });
});


function loadProductOnPage() {
  const products = getProducts();
  const tbody = document.getElementById("productTable");
  tbody.innerHTML = "";
  products.forEach((product) => {
    appendProductToTable(product);
  });
}





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

//event listener for delete function
document.getElementById("productTable").addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-danger")) {
    const row = e.target.closest("tr");
    const id = Number(row.cells[0].innerText);
    deleteProduct(id);
    row.remove();
  }
});

//event listener for update function
document.getElementById("productTable").addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-warning")) {
    const row = e.target.closest("tr");
    const id = Number(row.cells[0].innerText);
    const products = getProducts();
    const product = products.find(p => p.id === id);
    if (!product) return;

    document.getElementById("productId").value = product.id;
    document.getElementById("productId").disabled = true; // prevent changing ID during update
    document.getElementById("productName").value = product.name;
    document.getElementById("productImage").value = product.image;
    document.getElementById("productPrice").value = product.price;
    document.getElementById("productDesc").value = product.description;
    editMode = true;

    const modal = new bootstrap.Modal(document.getElementById("productModal"));
    modal.show();
  }
});


document.getElementById("applyFilter").addEventListener("click", function () {
  const value = document.getElementById("filterId").value.trim();
  const products = getProducts();
  const tbody = document.getElementById("productTable");

  tbody.innerHTML = "";

  if (!value) {
    products.forEach(p => appendProductToTable(p));
    return;
  }

  const filtered = products.filter(p => String(p.id).includes(value));
  filtered.forEach(p => appendProductToTable(p));
});

document.getElementById("sortBy").addEventListener("change", function () {
  const sortValue = this.value;
  const products = getProducts();
  const tbody = document.getElementById("productTable");

  let sorted = [...products];

  if (sortValue === "id") {
    sorted.sort((a, b) => a.id - b.id);
  } else if (sortValue === "name") {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortValue === "price") {
    sorted.sort((a, b) => a.price - b.price);
  }

  tbody.innerHTML = "";
  sorted.forEach(p => appendProductToTable(p));
});

