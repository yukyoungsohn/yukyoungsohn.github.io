const btn = document.getElementById("nameBtn");
const panel = document.getElementById("contactPanel");

btn.addEventListener("click", () => {
  const isOpen = panel.classList.contains("is-open");
  panel.classList.toggle("is-open");

  btn.setAttribute("aria-expanded", String(!isOpen));
  panel.setAttribute("aria-hidden", String(isOpen));
});
