
const imageUrlPattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))/i;
const numericPattern = /^[0-9]*$/;


function setInvalid(el) {
  el.classList.add("is-invalid");
  el.classList.remove("is-valid");
}

function setValid(el) {
  el.classList.remove("is-invalid");
  el.classList.add("is-valid");
}

function clearValidation(el) {
  el.classList.remove("is-invalid", "is-valid");
}


export function allowOnlyNumbers(inputEl) {
  inputEl.addEventListener("input", () => {
    inputEl.value = inputEl.value.replace(/[^0-9]/g, "");
  });
}

export function validateNameLive(inputEl) {
  inputEl.addEventListener("input", () => {
    const value = inputEl.value.trim();

    if (!value) {
      clearValidation(inputEl);
      return;
    }

    if (value.length < 3) setInvalid(inputEl);
    else setValid(inputEl);
  });
}

export function validateImageLive(inputEl) {
  inputEl.addEventListener("input", () => {
    const value = inputEl.value.trim();

    if (!value) {
      clearValidation(inputEl);
      return;
    }

    if (!imageUrlPattern.test(value)) setInvalid(inputEl);
    else setValid(inputEl);
  });
}

export function validatePriceLive(inputEl) {
  inputEl.addEventListener("input", () => {
    const value = Number(inputEl.value);

    if (!inputEl.value) {
      clearValidation(inputEl);
      return;
    }

    if (value <= 0) setInvalid(inputEl);
    else setValid(inputEl);
  });
}

export function validateDescLive(inputEl) {
  inputEl.addEventListener("input", () => {
    const value = inputEl.value.trim();

    if (!value) {
      clearValidation(inputEl);
      return;
    }

    if (value.length < 10) setInvalid(inputEl);
    else setValid(inputEl);
  });
}

export function validateProductForm() {
  const idEl = document.getElementById("productId");
  const nameEl = document.getElementById("productName");
  const imageEl = document.getElementById("productImage");
  const priceEl = document.getElementById("productPrice");
  const descEl = document.getElementById("productDesc");

  let isValid = true;

  const check = (condition, el) => {
    if (!condition) {
      setInvalid(el);
      isValid = false;
    } else {
      setValid(el);
    }
  };

  check(Number(idEl.value) > 0, idEl);
  check(nameEl.value.trim().length >= 3, nameEl);
  check(imageUrlPattern.test(imageEl.value.trim()), imageEl);
  check(Number(priceEl.value) > 0, priceEl);
  check(descEl.value.trim().length >= 10, descEl);

  return isValid;
}


export function initLiveValidation() {
  const idEl = document.getElementById("productId");
  const nameEl = document.getElementById("productName");
  const imageEl = document.getElementById("productImage");
  const priceEl = document.getElementById("productPrice");
  const descEl = document.getElementById("productDesc");


  allowOnlyNumbers(idEl);
  allowOnlyNumbers(priceEl);

  validateNameLive(nameEl);
  validateImageLive(imageEl);
  validatePriceLive(priceEl);
  validateDescLive(descEl);
}

