const buttons = document.querySelectorAll(".acc__btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling;
    const isOpen = panel.classList.contains("is-open");

    // 하나만 열고 싶으면 이 블록 유지
    document.querySelectorAll(".acc__panel").forEach(p => {
      p.classList.remove("is-open");
      p.setAttribute("aria-hidden", "true");
    });
    document.querySelectorAll(".acc__btn").forEach(b => {
      b.setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      panel.classList.add("is-open");
      panel.setAttribute("aria-hidden", "false");
      btn.setAttribute("aria-expanded", "true");
    }
  });
});
