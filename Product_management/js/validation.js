
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

  const check = (condition, el) => {
    if (!condition) {
      setInvalid(el);
      isValid = false;
    } else {
      setValid(el);
    }
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
