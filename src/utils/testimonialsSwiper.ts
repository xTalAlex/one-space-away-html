import { createSwiper } from "@utils/baseSwiper";

export function initTestimonialsSlider() {
  const testimonialsSwiper = createSwiper("testimonials", {
    pagination: {
      el: ".testimonials-pagination",
      clickable: true,
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 16 },
      768: { slidesPerView: 2, spaceBetween: 96 },
      872: { slidesPerView: 2, spaceBetween: 76 },
      1200: { slidesPerView: 3, spaceBetween: 76, loop: false },
    },
    on: {
      init: function (swiper) {
        if (1200 <= window.innerWidth) {
          swiper.disable();
          swiper.el.classList.add("-non-slider");
        }
      },
      resize: function (swiper) {
        if (1200 <= window.innerWidth) {
          swiper.disable();
          swiper.el.classList.add("-non-slider");
        } else {
          swiper.enable();
          swiper.el.classList.remove("-non-slider");
        }
      },
    },
  });

  document.querySelectorAll(".testimonial-video-wrapper").forEach((wrapper) => {
    const video = wrapper.querySelector(
      ".testimonial-video",
    ) as HTMLVideoElement | null;
    const control = wrapper.querySelector(".video-control");

    if (!video || !control) return;

    const updatePlayingState = () => {
      control.classList.toggle("playing", !video.paused);
      wrapper.classList.toggle("playing", !video.paused);
    };

    const toggleVideo = () => {
      video.paused ? video.play() : video.pause();
      updatePlayingState();
    };

    control.addEventListener("click", toggleVideo);
    video.addEventListener("play", updatePlayingState);
    video.addEventListener("pause", updatePlayingState);
    video.addEventListener("ended", updatePlayingState);
  });

  return () => {
    testimonialsSwiper.destroy();
  };
}
