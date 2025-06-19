const menuIcon = document.querySelector("header .menu-icon");
const navLinks = document.querySelector("header .container ul");
menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 400) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const galleryImgs = document.querySelectorAll(".imgs-container img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const thumbnailsContainer = document.getElementById("thumbnails");

let currentIndex = 0;
let images = [];

galleryImgs.forEach((img, index) => {
  images.push(img.src);
  img.addEventListener("click", () => openLightbox(index));
});

function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  lightbox.style.display = "flex";
}

function updateLightbox() {
  lightboxImg.src = images[currentIndex];
  updateThumbnails();
}

function updateThumbnails() {
  thumbnailsContainer.innerHTML = "";
  images.forEach((src, i) => {
    const thumb = document.createElement("img");
    thumb.src = src;
    thumb.classList.toggle("active", i === currentIndex);
    thumb.addEventListener("click", () => {
      currentIndex = i;
      updateLightbox();
    });
    thumbnailsContainer.appendChild(thumb);
  });
}

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateLightbox();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateLightbox();
});

document.addEventListener("keydown", (e) => {
  if (lightbox.style.display === "flex") {
    if (e.key === "ArrowRight") nextBtn.click();
    else if (e.key === "ArrowLeft") prevBtn.click();
    else if (e.key === "Escape") closeBtn.click();
  }
});

const galleryImages = document.querySelectorAll(".imgs-container .img");
const showMoreBtn = document.getElementById("showMoreBtn");

galleryImages.forEach((img, index) => {
  if (index >= 8) {
    img.style.display = "none";
  }
});

showMoreBtn.addEventListener("click", () => {
  galleryImages.forEach((img) => {
    img.style.display = "block";
  });
  showMoreBtn.style.display = "none";
});
