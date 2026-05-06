import { createSwiper } from "@src/utils/baseSwiper";

export function initPortfolioSlider() {
  const portfolioSwiper = createSwiper("portfolio", {
    spaceBetween: 30,
    navigation: {
      nextEl: ".portfolio-next",
      prevEl: ".portfolio-prev",
    },
    pagination: {
      el: ".portfolio-pagination",
      clickable: true,
    },
  });

  const updateSlideView = (view: string, slide: HTMLElement) => {
    const images = slide.querySelectorAll(".image");

    images.forEach((img) => {
      if (img.classList.contains(view)) {
        img.classList.add("active");
        img.setAttribute("aria-hidden", "false");
      } else {
        img.classList.remove("active");
        img.setAttribute("aria-hidden", "true");
      }
    });
  };

  document.addEventListener("click", (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLButtonElement>(
      ".toggle-btn",
    );
    if (!btn) return;

    document.querySelector(".toggle-btn.active")?.classList.remove("active");
    btn.classList.add("active");

    const view = btn.dataset.view;
    const currentSlide = portfolioSwiper.slides[portfolioSwiper.activeIndex];
    if (currentSlide && view) updateSlideView(view, currentSlide);
  });

  portfolioSwiper.on("slideChangeTransitionStart", () => {
    const activeSlide = portfolioSwiper.slides[portfolioSwiper.activeIndex];
    if (activeSlide) updateSlideView("after", activeSlide);

    document.querySelector(".toggle-btn.active")?.classList.remove("active");
    document
      .querySelector('.toggle-btn[data-view="after"]')
      ?.classList.add("active");
  });

  return () => {
    portfolioSwiper.destroy();
  };
}
