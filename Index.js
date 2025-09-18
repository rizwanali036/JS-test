document.querySelector(".btn").addEventListener("click", function () {
    alert("Redirecting to client login...");
});

document.querySelector(".btn2").addEventListener("click", function (e) {
    e.preventDefault();
    alert("Launching video tour...");
});

document.querySelector(".demo-btn").addEventListener("click", function () {
    alert("Your demo request has been received!");
});

document.getElementById("footer-btn").addEventListener("click", function () {
    alert("Redirecting to client login...");
});

document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("demo-btn");
  btn.addEventListener("click", function() {
    btn.style.color = "white";
    btn.style.backgroundColor = "green"; 
    btn.innerText = ("Clicked");
  });
});

const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
  link.addEventListener("click", function() {
    navLinks.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});

document.querySelectorAll(".card1, .card2, .card3").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 8px 20px rgba(104, 225, 255, 1)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 4px 12px rgba(148, 148, 148, 1)";
  });
});

const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
