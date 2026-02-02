const btn = document.getElementById("nameBtn");
const panel = document.getElementById("contactPanel");

btn.addEventListener("click", () => {
  const isOpen = !panel.hasAttribute("hidden");

  if (isOpen) {
    panel.setAttribute("hidden", "");
    btn.setAttribute("aria-expanded", "false");
  } else {
    panel.removeAttribute("hidden");
    btn.setAttribute("aria-expanded", "true");
  }
});
