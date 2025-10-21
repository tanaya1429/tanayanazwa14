// Efek Mengetik Otomatis
const text = "Halo, Saya Tanaya Nazwa";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
window.onload = typeWriter;

// Scroll ke Bagian
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Animasi Scroll Reveal
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 40) {
      el.classList.add("show");
    }
  });
});
