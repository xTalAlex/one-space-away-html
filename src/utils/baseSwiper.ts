import Swiper from "swiper";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import type { SwiperOptions } from "swiper/types";

export function createSwiper(sliderName: string, swiperConfig: SwiperOptions) {
  return new Swiper(`.${sliderName}-swiper`, {
    modules: [Navigation, Pagination, Keyboard],
    observer: true,
    observeParents: true,
    speed: 700,
    loop: true,
    autoHeight: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    ...swiperConfig,
  });
}
