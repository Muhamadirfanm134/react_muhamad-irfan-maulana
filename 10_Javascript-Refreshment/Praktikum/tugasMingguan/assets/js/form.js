const form = document.querySelector("form");
const submitBtn = document.getElementById("submit-button");

const nameInput = document.getElementById("PName");
const nameError = document.getElementById("name-error");
const nameSuccess = document.getElementById("name-success");

const categoryInput = document.getElementById("PCategory");
const categoryError = document.getElementById("category-error");
const categorySuccess = document.getElementById("category-success");

const imageInput = document.getElementById("PImage");
const imageError = document.getElementById("image-error");
const imageSuccess = document.getElementById("image-success");

const radioInput = document.querySelectorAll('input[name="flexRadioDefault"]');
const radioError = document.getElementById("radio-error");
const radioSuccess = document.getElementById("radio-success");

const descInput = document.getElementById("formDesc");
const descError = document.getElementById("desc-error");
const descSuccess = document.getElementById("desc-success");

const priceInput = document.getElementById("PPrice");
const priceError = document.getElementById("price-error");
const priceSuccess = document.getElementById("price-success");

let radioValue;

nameInput.addEventListener("input", validateName);
categoryInput.addEventListener("input", validateCategory);
imageInput.addEventListener("input", validateImage);
descInput.addEventListener("input", validateDesc);
priceInput.addEventListener("input", validatePrice);

for (let i = 0; i < radioInput.length; i++) {
  radioInput[i].addEventListener("change", function () {
    radioValue = this.value;
    validateRadio();
  });
}

form.addEventListener("change", (event) => {
  event.preventDefault();
  if (
    validateName() &&
    validateCategory() &&
    validateImage() &&
    validateDesc() &&
    validateRadio() &&
    validatePrice()
  ) {
    submitBtn.disabled = false;
  }
});

// form.addEventListener("change", (event) => {
//   event.preventDefault();
//   if (
//     validateName() &&
//     validateCategory() &&
//     validateImage() &&
//     validateDesc() &&
//     validateRadio() &&
//     validatePrice()
//   ) {
//     submitBtn.disabled = false;
//   }
// });

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (
    validateName() &&
    validateCategory() &&
    validateImage() &&
    validateDesc() &&
    validateRadio() &&
    validatePrice()
  ) {
    submitForm();
  }
});

function validateName() {
  const name = nameInput.value;

  if (name === "") {
    nameInput.classList.remove("is-valid");
    nameInput.classList.add("is-invalid");
    nameError.textContent = "Please enter a valid Product name.";
    return false;
  } else if (name.length > 25) {
    nameInput.classList.remove("is-valid");
    nameInput.classList.add("is-invalid");
    nameError.textContent = "Product Name must not exceed 25 characters.";
    return false;
  } else if (/[@#{}<>?=]/.test(name)) {
    nameInput.classList.remove("is-valid");
    nameInput.classList.add("is-invalid");
    nameError.textContent = "Name must not contain symbols.";
    return false;
  } else {
    nameInput.classList.remove("is-invalid");
    nameInput.classList.add("is-valid");
    nameSuccess.textContent = "Looks good!";
    return true;
  }
}

function validateCategory() {
  const category = categoryInput.value;

  if (category === "") {
    categoryInput.classList.remove("is-valid");
    categoryInput.classList.add("is-invalid");
    categoryError.textContent = "The category field must be filled in";
    return false;
  } else {
    categoryInput.classList.remove("is-invalid");
    categoryInput.classList.add("is-valid");
    categorySuccess.textContent = "Looks good!";
    return true;
  }
}

function validateImage() {
  const image = imageInput.value;

  if (image === "") {
    imageInput.classList.remove("is-valid");
    imageInput.classList.add("is-invalid");
    imageError.textContent = "The image field must be filled in";
    return false;
  } else {
    imageInput.classList.remove("is-invalid");
    imageInput.classList.add("is-valid");
    imageSuccess.textContent = "Looks good!";
    return true;
  }
}

function validateRadio() {
  if (radioValue !== "") {
    radioError.style.display = "none";
    radioSuccess.style.display = "block";
    radioSuccess.textContent = "Looks good!";
    return true;
  } else {
    radioSuccess.style.display = "none";
    radioError.style.display = "block";
    radioError.textContent = "The description field must be filled in";
    return false;
  }
}

function validateDesc() {
  const desc = descInput.value;

  if (desc) {
    descInput.classList.remove("is-invalid");
    descInput.classList.add("is-valid");
    descSuccess.textContent = "Looks good!";
    return true;
  } else {
    descInput.classList.remove("is-valid");
    descInput.classList.add("is-invalid");
    descError.textContent = "The description field must be filled in";
    return false;
  }
}

function validatePrice() {
  const price = priceInput.value.trim();

  if (price === "") {
    priceInput.classList.remove("is-valid");
    priceInput.classList.add("is-invalid");
    priceError.textContent = "The price field must be filled in";
    return false;
  } else if (isNaN(price) || price <= 0) {
    priceInput.classList.remove("is-valid");
    priceInput.classList.add("is-invalid");
    priceError.textContent = "Price must be a positive number.";
    return false;
  } else {
    priceInput.classList.remove("is-invalid");
    priceInput.classList.add("is-valid");
    priceSuccess.textContent = "Looks good!";
    return true;
  }
}

function submitForm() {
  const data = {
    name: nameInput.value,
    category: categoryInput.value,
    image: imageInput.value,
    freshness: radioValue,
    desc: descInput.value,
    price: Number(priceInput.value),
  };

  console.log("Submitting the following data:");

  const Message = `
    Product Name: ${data.name}
    Product Category: ${data.category}
    Product Image: ${data.image}
    Product Freshness: ${data.freshness}
    Product Description: ${data.desc}
    Product Price: ${data.price}
  `;
  alert(Message);

  form.reset();
  window.location.reload();
}
