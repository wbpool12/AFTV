// Mobile nav
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (toggle && nav) {
toggle.addEventListener("click", () => {
const open = nav.classList.toggle("open");
toggle.setAttribute("aria-expanded", open ? "true" : "false");
});
}

// Gallery filter + lightbox
const filters = document.querySelectorAll(".filter");
const photos = document.querySelectorAll(".photo");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const lightboxClose = document.querySelector(".lightbox-close");

filters.forEach(btn => {
btn.addEventListener("click", () => {
filters.forEach(b => b.classList.remove("active"));
btn.classList.add("active");

const f = btn.dataset.filter;
photos.forEach(p => {
const cat = p.dataset.cat;
const show = (f === "all" || cat === f);
p.style.display = show ? "" : "none";
});
});
});

photos.forEach(p => {
p.addEventListener("click", (e) => {
if (!lightbox) return;
e.preventDefault();
const href = p.getAttribute("href");
const img = p.querySelector("img");
if (lightboxImg) {
lightboxImg.src = href;
lightboxImg.alt = img?.alt || "Photo";
}
lightbox.classList.add("open");
lightbox.setAttribute("aria-hidden", "false");
});
});

function closeLightbox() {
if (!lightbox) return;
lightbox.classList.remove("open");
lightbox.setAttribute("aria-hidden", "true");
if (lightboxImg) lightboxImg.src = "";
}

if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
if (lightbox) lightbox.addEventListener("click", (e) => {
if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
if (e.key === "Escape") closeLightbox();
});
