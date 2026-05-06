export function initFaqAccordion() {
  const container = document.getElementById("faq");
  if (!container) return;

  container.addEventListener("click", (e) => {
    const button = (e.target as HTMLElement).closest(".accordion-button");
    if (!button) return;

    const item = button.closest(".accordion-item");
    const content = item?.querySelector<HTMLElement>(".accordion-content");
    if (!item || !content) return;

    const isActive = item.classList.contains("active");

    container.querySelectorAll(".accordion-item.active").forEach((accItem) => {
      const accContent =
        accItem.querySelector<HTMLElement>(".accordion-content");
      if (!accContent) return;

      if (accItem !== item) {
        accItem.classList.remove("active");
        accContent.style.height = "0";
      }
    });

    if (!isActive) {
      item.classList.add("active");
      content.style.height = content.scrollHeight + "px";
    } else {
      item.classList.remove("active");
      content.style.height = "0";
    }
  });
}
