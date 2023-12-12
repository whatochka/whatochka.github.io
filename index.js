import { button, cross, orderForm, form, orderButton, openModal, closeModal } from "whatochka.github.io/components/welcome.js";
import { logInButton, loginForm } from "whatochka.github.io/components/logIn.js";
import { createContainer, galleryList } from "whatochka.github.io/components/gallery.js";
import { initialElements } from "whatochka.github.io/utils/constants.js";

const forms = [orderForm, loginForm];
const log = document.querySelector("#log");

// Работа модального окна
button.addEventListener("click", () => {
  openModal(orderForm);
});

log.addEventListener("click", () => {
  openModal(loginForm);
});

logInButton.addEventListener("click", () => {
  openModal(loginForm);
});

cross.forEach((cross) => {
  cross.addEventListener("click", () => {
    closeModal(orderForm);
    closeModal(loginForm);
  });
});

forms.forEach((form) => {
  form.addEventListener("click", (evt) => {
    if (evt.currentTarget === evt.target) {
      closeModal(form);
    }
  });
});

// Отключение стандартного поведения формы
form.addEventListener("click", (e) => {
  e.preventDefault();
});

orderButton.addEventListener("click", (e) => {
  e.preventDefault();
});

initialElements.map((el) => {
  galleryList.append(createContainer(el.name, el.link));
});
