export const button = document.querySelector(".welcome__button");
export const orderForm = document.getElementById("modalOrder");
export const form = document.querySelector(".modal-form");
export const body = document.querySelector(".body");
export const cross = document.querySelectorAll(".modal-cross");
export const orderButton = document.querySelector(".modal-button");

export const openModal = (modal) => {
  modal.classList.add("modal_opened");
  body.classList.add("body_hidden-scroll");
  document.addEventListener("keydown", closeByEsc);
};

export const closeModal = (modal) => {
  modal.classList.remove("modal_opened");
  body.classList.remove("body_hidden-scroll");
  document.removeEventListener("keydown", closeByEsc);
};

export const closeByEsc = (evt) => {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".modal_opened");
    closeModal(openedPopup);
  }
};
