const btn_container = document.querySelector(".navigation-list");
const buttons = btn_container.querySelectorAll("button");
const btn_data = {
  main_btn: ".main",
  works_btn: ".gallery",
};

// scroll по кнопке
buttons.forEach((button) => {
  const btnId = button.id;
  if (btnId in btn_data) {
    const btn = document.getElementById(button.id);
    const scroll_to = document.querySelector(btn_data[btnId]);
    btn.addEventListener("click", function () {
      scroll_to.scrollIntoView({ behavior: "smooth" });
    });
  }
});

// scroll по ссылке
document.addEventListener("DOMContentLoaded", function () {
  const scrollLinks = document.querySelectorAll(".scroll-link");
  scrollLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

// переход на страницу отзывов
function redirectToReviews() {
  window.location.href = "../reviews.html";
}

// переход на главную страницу
function redirectToIndex() {
  window.location.href = "../index.html";
}

// переход на страницу отзывов
function redirectToReviews() {
  window.location.href = "../reviews.html";
}

// переход на страницу отзывов
function redirectToContacts() {
  window.location.href = "../contacts.html";
}

const redirectToAdvice = () => {
  window.location.href = '../advice.html'
}