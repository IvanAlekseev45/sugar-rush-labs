import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let aboutUsSwiper = null;

// Create slider for tablet and desktop
const createAboutUsSwiper = () => {
  aboutUsSwiper = new Swiper('.about-us__slider', {
    modules: [Navigation, Pagination],

    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 24,
    watchOverflow: false,

    navigation: {
      nextEl: '.about-us__button--next',
      prevEl: '.about-us__button--prev',
    },

    pagination: {
      el: '.about-us__pagination',
      clickable: true,
      bulletClass: 'about-us__pagination-bullet',
      bulletActiveClass: 'about-us__pagination-bullet--active',
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

// Remove slider on mobile
const destroyAboutUsSwiper = () => {
  if (!aboutUsSwiper) return;

  aboutUsSwiper.destroy(true, true);
  aboutUsSwiper = null;
};

// Switch slider mode by screen width
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