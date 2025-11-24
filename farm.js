const headerBackground = document.querySelector(".header-wrapper");

window.addEventListener("scroll", () => {
  window.scrollY > 50
    ? headerBackground.classList.add("scrolled")
    : headerBackground.classList.remove("scrolled");
});

const navMenu = document.querySelector(".menu");
const navLinks = document.querySelector(".mobile-navLinks");
const navClose = document.querySelector(".close");
const links = document.querySelectorAll(".mobile-navLinks a");

navMenu.addEventListener("click", () => {
  navLinks.style.display = "flex";
  navLinks.classList.remove("close");
  navLinks.classList.add("open");
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    navLinks.classList.remove("open");
    navLinks.classList.add("close");

    setTimeout(() => {
      navLinks.style.display = "none";
    }, 700);
  });
});

navClose.addEventListener("click", () => {
  navLinks.classList.remove("open");
  navLinks.classList.add("close");
});

//Hero section

const heroImage = document.querySelector(".hero-img");
const initialImage = document.getElementById("images");
const heroParagraph = document.querySelector(".hero-text");
const mainParagraph = document.querySelector(".mainText");

const images = [
  "Images/rice-img.webp",
  "Images/pumpkins-img.jpg",
  "Images/wheat-img5.jpg",
];

const heroText = [
  "We make farm crop production seemless and sales affordable.",
  "We give you crop production beyond imagination.",
  "Our products are natural and fresh. Always producing the best.",
];

let currentImageIndex = 0;
let currentTextIndex = 0;

function heroAnimation() {
  setInterval(() => {
    heroImage.classList.remove("animated");
    currentImageIndex = (currentImageIndex + 1) % images.length;
    initialImage.src = images[currentImageIndex];

    heroParagraph.classList.remove("hero-text");
    currentTextIndex = (currentTextIndex + 1) % heroText.length;
    mainParagraph.textContent = heroText[currentTextIndex];

    setTimeout(() => {
      heroImage.classList.add("animated");
      heroParagraph.classList.add("hero-text");
    }, 10);
  }, 3000);
}

heroAnimation();

//Section display

const productSections = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    },
    {
      threshold: 0.3,
    }
  );
});

productSections.forEach((section) => observer.observe(section));

// const observer = new IntersectionObserver(
//   ([entry]) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("visible");
//     }
//   },
//   {
//     threshold: 0.3,
//   }
// );
// observer.observe(productSection);

const cropProductions = document.querySelectorAll(
  ".product-container .products"
);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        cropProductions.forEach((product, i) => {
          setTimeout(() => {
            product.classList.add("sectionVisible");
          }, i * 200);
        });
        sectionObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);
sectionObserver.observe(document.querySelector(".product-container"));

const sliders = document.querySelectorAll(".slideRight, .slideLeft");

const slideObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        slideObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);
sliders.forEach((slider) => slideObserver.observe(slider));

const submitBtn = document.querySelector(".contactBtn");
const modal = document.querySelector(".modal");
const successful = document.querySelector(".success");
const sending = document.querySelector(".sending");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.innerHTML = sending.innerHTML;
  modal.classList.add("show");
  setTimeout(() => {
    modal.innerHTML = successful.innerHTML;
    setTimeout(() => {
      modal.classList.remove("show");
    }, 3000);
  }, 2000);
});
