// validation.js

export function validateProductForm() {
  const id = document.getElementById("productId");
  const name = document.getElementById("productName");
  const image = document.getElementById("productImage");
  const price = document.getElementById("productPrice");
  const desc = document.getElementById("productDesc");

  let isValid = true;

  const setInvalid = (el) => {
    el.classList.add("is-invalid");
    el.classList.remove("is-valid");
    isValid = false;
  };
  
  const setValid = (el) => {
    el.classList.remove("is-invalid");
    el.classList.add("is-valid");
  };

  
  if (!id.value || Number(id.value) <= 0) {
    setInvalid(id);
  } else {
    setValid(id);
  }

  
  if (!name.value || name.value.trim().length < 3) {
    setInvalid(name);
  } else {
    setValid(name);
  }

 
  const urlPattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))/i;
  if (!urlPattern.test(image.value.trim())) {
    setInvalid(image);
  } else {
    setValid(image);
  }

 
  if (!price.value || Number(price.value) <= 0) {
    setInvalid(price);
  } else {
    setValid(price);
  }

  if (!desc.value || desc.value.trim().length < 10) {
    setInvalid(desc);
  } else {
    setValid(desc);
  }
  console.log(id.value);
  console.log(name.value);
  console.log(image.value);
  console.log(desc.value);
  console.log(price.value);
  return isValid;

}
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("#productForm input, #productForm textarea");

  inputs.forEach(input => {
    input.addEventListener("input", () => {
      validateProductForm(input);
    });
  });
});
