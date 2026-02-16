// validation.js

export function validateProductForm() {
  const idEl = document.getElementById("productId");
  const nameEl = document.getElementById("productName");
  const imageEl = document.getElementById("productImage");
  const priceEl = document.getElementById("productPrice");
  const descEl = document.getElementById("productDesc");

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


  if (!idEl.value || Number(idEl.value) <= 0) {
    setInvalid(idEl);
  } else {
    setValid(idEl);
  }

  
  if (!nameEl.value || nameEl.value.trim().length < 3) {
    setInvalid(nameEl);
  } else {
    setValid(nameEl);
  }

 
  const urlPattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))/i;
  if (!urlPattern.test(imageEl.value.trim())) {
    setInvalid(imageEl);
  } else {
    setValid(imageEl);
  }

 
  if (!priceEl.value || Number(priceEl.value) <= 0) {
    setInvalid(priceEl);
  } else {
    setValid(priceEl);
  }

  if (!descEl.value || descEl.value.trim().length < 10) {
    setInvalid(descEl);
  } else {
    setValid(descEl);
  }

  return isValid;
}
