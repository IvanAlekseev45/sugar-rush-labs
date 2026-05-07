import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let aboutUsSwiper = null;

const createAboutUsSwiper = () => {
  aboutUsSwiper = new Swiper('.about-us__slider', {
    modules: [Navigation, Pagination],

    slidesPerView: 2,
    spaceBetween: 16,

    navigation: {
      nextEl: '.about-us__button--next',
      prevEl: '.about-us__button--prev',
    },

    pagination: {
      el: '.about-us__pagination',
      clickable: true,
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },

      1440: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
    },
  });
};

const destroyAboutUsSwiper = () => {
  if (!aboutUsSwiper) return;

  aboutUsSwiper.destroy(true, true);
  aboutUsSwiper = null;
};

const checkAboutUsSwiper = () => {
  const isTabletOrDesktop = window.innerWidth >= 768;

  if (isTabletOrDesktop && !aboutUsSwiper) {
    createAboutUsSwiper();
  }

  if (!isTabletOrDesktop && aboutUsSwiper) {
    destroyAboutUsSwiper();
  }
};

checkAboutUsSwiper();

window.addEventListener('resize', checkAboutUsSwiper);