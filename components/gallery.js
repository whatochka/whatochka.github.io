const elementTemplate = document.querySelector("#element").content;
const galleryList = document.querySelector(".gallery__list");



const createContainer = (text, img) => {
  const element = elementTemplate.querySelector(".gallery__element-container").cloneNode(true);
  const elementText = element.querySelector(".gallery__element-text");
  const elementImg = element.querySelector(".gallery__image");

  elementText.textContent = text;
  elementImg.src = img;
  return element;
};

export { galleryList, createContainer };
