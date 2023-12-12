import { closeModal, openModal, cross} from "whatochka.github.io/components/welcome.js";

const button = document.querySelector("#log");
const modal = document.querySelector("#modalLogin");

const button1 = document.querySelector('#log1')

button.addEventListener("click", () => {
  openModal(modal);
});

button1.addEventListener("click", () => {
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
