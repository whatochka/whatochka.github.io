import { closeModal, openModal, cross} from "whatochka.github.io/components/welcome.js";

const button = document.querySelector("#log");
const modal = document.querySelector("#modalLogin");

button.addEventListener("click", () => {
  openModal(modal);
});

cross.forEach((el) => {
  el.addEventListener('click', () => {
    closeModal(modal)
  })
})

modal.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closeModal(modal);
  }
});
