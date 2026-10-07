'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
if (sidebarBtn) {
  sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
}

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  if (modalContainer && overlay) {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  }
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
}

// add click event to modal close button
if (modalCloseBtn) modalCloseBtn.addEventListener("click", testimonialsModalFunc);
if (overlay) overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select) {
  select.addEventListener("click", function () { elementToggleFunc(this); });
}

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    let itemCategory = filterItems[i].dataset.category.toLowerCase();
    if (selectedValue === "all" || selectedValue === itemCategory) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    if (lastClickedBtn) lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let j = 0; j < pages.length; j++) {
      if (this.innerHTML.toLowerCase().trim() === pages[j].dataset.page) {
        pages[j].classList.add("active");
        navigationLinks[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }
  });
}

// Recommendations Carousel Section
const recommendations = [
  {
    text: "It was a pleasure having Martha in my Soft Skills training sessions as part of the DEPI program. She was an enthusiastic and engaged participant, always willing to learn, participate, and develop herself. Her positive attitude and commitment were truly appreciated. I'm happy to recommend her and wish her continued success in her career. ❤️",
    name: "Eman Salem",
    role: "L&D Specialist | Soft & Life Skills Trainer | Freelancing Trainer | DEPI",
    linkedin: "https://www.linkedin.com/in/martha-eid/"
  },
  {
    text: "Martha is a skilled Full Stack Developer with strong expertise in PHP, Laravel, and modern web technologies like JavaScript and Bootstrap. Her work reflects solid problem-solving skills and attention to detail in building dynamic, functional web applications. She would be a valuable addition to any development team.",
    name: "Ahmed Zaki",
    role: "Front-End Developer",
    linkedin: "https://www.linkedin.com/in/martha-eid/"
  },
  {
    text: "Martha is easily one of the most reliable developers I've worked with. She has a really solid handle on full-stack development, especially when it comes to PHP and Laravel, and always delivers clean, working code without any hassle. Whether it's building dynamic backends or tweaking the frontend with JS and Bootstrap, she just gets things done efficiently. Super easy to collaborate with and a huge asset to any dev team",
    name: "Abdelrhman Osama",
    role: "Penetration Tester · Bug Bounty Hunter",
    linkedin: "https://www.linkedin.com/in/martha-eid/"
  }

];

let currentRecommendation = 0;

const recommendationText = document.querySelector(".recommendation-text");
const recommendationName = document.querySelector(".recommendation-name");
const recommendationRole = document.querySelector(".recommendation-role");
const recommendationLinkedin = document.querySelector(".recommendation-linkedin");
const recommendationDots = document.querySelectorAll(".recommendation-dot");

function showRecommendation(index) {
  if (!recommendationText) return;

  const recommendation = recommendations[index];

  recommendationText.textContent = recommendation.text;
  recommendationName.textContent = recommendation.name;
  recommendationRole.textContent = recommendation.role;
  if (recommendationLinkedin) recommendationLinkedin.href = recommendation.linkedin;

  recommendationDots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

const nextBtn = document.getElementById("nextBtn");
if (nextBtn) {
  nextBtn.addEventListener("click", function () {
    currentRecommendation++;
    if (currentRecommendation >= recommendations.length) {
      currentRecommendation = 0;
    }
    showRecommendation(currentRecommendation);
  });
}

const prevBtn = document.getElementById("prevBtn");
if (prevBtn) {
  prevBtn.addEventListener("click", function () {
    currentRecommendation--;
    if (currentRecommendation < 0) {
      currentRecommendation = recommendations.length - 1;
    }
    showRecommendation(currentRecommendation);
  });
}

recommendationDots.forEach((dot, index) => {
  dot.addEventListener("click", function () {
    currentRecommendation = index;
    showRecommendation(currentRecommendation);
  });
});

// تشغيل أول توصية تلقائياً عند فتح الصفحة
showRecommendation(currentRecommendation);