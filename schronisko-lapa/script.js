// --- FADER ---

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2,
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);
faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

// --- Adoption section ---
const answearBtn = document.querySelectorAll(".answears-adoption-btn");
const hiddenAnswear = document.querySelectorAll(".hidden-answear");

answearBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const el = hiddenAnswear[index];

    if (el.classList.contains("visible")) {
      el.style.height = el.scrollHeight + "px";
      setTimeout(() => {
        el.style.height = "0";
      }, 1);

      el.classList.remove("visible");
    } else {
      el.style.height = el.scrollHeight + "px";

      el.classList.add("visible");
      el.addEventListener(
        "transitionend",
        () => {
          el.style.height = "auto";
        },
        { once: true }
      );
    }
  });
});

// --- Newsletter  ---

const newsletterBtn = document.querySelector(".newsletter-order-btn");
const inputEmail = document.querySelector(".input-email");

newsletterBtn.addEventListener("click", () => {
  if (
    inputEmail.value.trim() !== "" &&
    inputEmail.value.includes("@") &&
    inputEmail.value.includes(".")
  ) {
    showToast("Dziękujemy za zapis do newslettera! 🎉", "success");
    inputEmail.value = "";
  } else {
    showToast("Wprowadź poprawny adres email", "error");
  }
});

function showToast(message, type) {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 100);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// --- COOKIES ---

const CookieBanner = document.getElementById("cookies-banner");
const acceptBtn = document.getElementById("accept-cookies");

if (!localStorage.getItem("cookiesAccepted")) {
  CookieBanner.style.display = "flex";
}

acceptBtn.addEventListener("click", () => {
  CookieBanner.style.display = "none";
  localStorage.setItem("cookiesAccepted", "true");
});
