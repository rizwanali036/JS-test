const desktopBtn = document.querySelector(".desktop-login");
if (desktopBtn) {
  desktopBtn.addEventListener("click", function () {
    alert("Redirecting to client login (Desktop)...");
  });
}

const mobileBtn = document.querySelector(".mobile-login .btn");
if (mobileBtn) {
  mobileBtn.addEventListener("click", function () {
    alert("Redirecting to client login (Mobile)...");
  });
}


const btn2 = document.querySelector(".btn2");
if (btn2) {
  btn2.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Launching video tour...");
  });
}

const demoBtn = document.querySelector(".demo-btn");
if (demoBtn) {
  demoBtn.addEventListener("click", function () {
    alert("Your demo request has been received!");
  });
}

const footerBtn = document.getElementById("footer-btn");
if (footerBtn) {
  footerBtn.addEventListener("click", function () {
    alert("Redirecting to client login...");
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const demoMainBtn = document.getElementById("demo-btn");
  if (demoMainBtn) {
    demoMainBtn.addEventListener("click", function() {
      demoMainBtn.style.color = "white";
      demoMainBtn.style.backgroundColor = "green"; 
      demoMainBtn.innerText = ("Clicked");
    });
  }
});

const navLinks = document.querySelectorAll(".nav-links a");
if (navLinks.length > 0) {
  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      navLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

document.querySelectorAll(".card1, .card2, .card3").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 8px 20px rgba(104, 225, 255, 1)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 4px 12px rgba(148, 148, 148, 1)";
  });
});

const scrollBtn = document.getElementById("scrollTopBtn");
if (scrollBtn) {
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
});
