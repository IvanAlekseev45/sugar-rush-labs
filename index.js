import{a as g,i as h,A as k,S as E,N as S,P as C}from"./assets/vendor-DwCZRSuH.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const y={body:document.body},q=async e=>{const s="https://deserts-store.b.goit.study/api",{data:t}=await g.get(`${s}/desserts/${e}`);return t},D=async e=>{const s=e.target.closest(".js-dessert-modal-open");if(!s)return;const t=s.dataset.id;if(!t){h.error({message:"Не вдалося визначити десерт. Спробуйте ще раз.",position:"topRight"});return}j();try{const o=await q(t);N(o)}catch(o){u(),h.error({message:"Не вдалося завантажити інформацію про десерт. Спробуйте ще раз.",position:"topRight"}),console.log(o)}},O=e=>{const s=x();e.target===s&&u()},L=e=>{e.key==="Escape"&&u()},P=()=>{u()},R=()=>{u();const e=new CustomEvent("open-order-modal");document.dispatchEvent(e)};let n=null;const T=()=>{document.addEventListener("click",D)},j=()=>{n=document.createElement("div"),n.classList.add("dessert-modal-backdrop"),n.innerHTML=`
    <div class="dessert-modal" role="dialog" aria-modal="true">
      <button
        class="dessert-modal__close-btn"
        type="button"
        aria-label="Close modal"
      >
        <svg
          class="dessert-modal__close-icon"
          width="24"
          height="24"
          aria-hidden="true"
        >
          <use href="/img/sprite.svg#icon-close"></use>
        </svg>
      </button>

      <div class="dessert-modal__content">
        <div class="loader">
          <div class="cup">
            <div class="cup-handle"></div>
            <div class="smoke one"></div>
            <div class="smoke two"></div>
            <div class="smoke three"></div>
          </div>
          <div class="load">Loading...</div>
        </div>
      </div>
    </div>
  `,y.body.append(n),y.body.classList.add("no-scroll"),n.addEventListener("click",O),document.addEventListener("keydown",L),n.querySelector(".dessert-modal__close-btn").addEventListener("click",P)},u=()=>{n&&(n.remove(),n=null,y.body.classList.remove("no-scroll"),document.removeEventListener("keydown",L))},x=()=>n,N=e=>{const s=n.querySelector(".dessert-modal__content"),{_id:t,name:o,price:r,rate:a,description:l,composition:c,image:M}=e,$=c||"";s.innerHTML=`
    <img
      class="dessert-modal__image"
      src="${M}"
      alt="${o}"
    />

    <div class="dessert-modal__info">

      <h2 class="dessert-modal__title">${o}</h2>

      <p class="dessert-modal__price">${r} грн</p>

      <div class="dessert-modal__rating">
        ${I(a)}
      </div>

      <p class="dessert-modal__description">
        ${l}
      </p>

      <p class="dessert-modal__ingredients">
        <b>Склад:</b> ${$}
      </p>

      <button
        class="dessert-modal__order-btn"
        type="button"
        data-dessert-id="${t}"
      >
        Перейти до замовлення
      </button>
    </div>
  `,s.querySelector(".dessert-modal__order-btn").addEventListener("click",R)},A=e=>{const s=Number(e);return Number.isNaN(s)?0:Math.round(s*2)/2},I=e=>{const s=A(e);return`
    <div class="dessert-rating" aria-label="Рейтинг ${s} з 5">
      ${[1,2,3,4,5].map(t=>s>=t?'<span class="dessert-rating__star dessert-rating__star--filled">★</span>':s===t-.5?'<span class="dessert-rating__star dessert-rating__star--half">★</span>':'<span class="dessert-rating__star">☆</span>').join("")}
    </div>
  `};T();const d={dessertList:document.querySelector(".dessert-list"),dessertCategory:document.querySelector(".dessert-category"),dessertLoadMoreBtn:document.querySelector(".dessert-load-more-btn"),dropdown:document.querySelector(".category-dropdown"),dropdownBtn:document.querySelector(".category-dropdown__btn"),dropdownText:document.querySelector(".category-dropdown__text"),dessertLoader:document.querySelector(".dessert-loader")},H=async()=>{const e="https://deserts-store.b.goit.study/api",{data:s}=await g.get(`${e}/categories`);return s},z=async()=>{try{const e=await H(),s=`
    <li class="dessert-category__item">
        <button class="dessert-category__btn active__btn" type="button" data-id="all">Всі десерти</button>
    </li>
  `,t=e.map(({_id:o,name:r})=>`
        <li class="dessert-category__item">
            <button class="dessert-category__btn" type="button" data-id="${o}">${r}</button>
        </li>
      `).join("");d.dessertCategory.insertAdjacentHTML("beforeend",s+t)}catch(e){console.log(e)}},v=async(e=1,s="all")=>{const t=s==="all"?"https://deserts-store.b.goit.study/api/desserts":`https://deserts-store.b.goit.study/api/desserts?category=${s}`,{data:o}=await g.get(`${t}`,{params:{page:e,limit:8}});return o},F="/sugar-rush-labs/assets/sprite-7MDemDlu.svg",b=e=>{const s=e.map(({_id:t,name:o,description:r,price:a,category:l,image:c})=>`
      <li class="dessert-list__item">
        <div class="dessert-list__wrapper">

          <div class='loader-sizes-skeleton'>
            <div class="loader dessert-loader">
              <div class="cup">
                <div class="cup-handle"></div>
                <div class="smoke one"></div>
                <div class="smoke two"></div>
                <div class="smoke three"></div>
              </div>
              <div class="load">..........................</div>
            </div>
          </div>

          <img class="dessert-list__image" src="${c}" alt="${o}" />
          <p class="dessert-list__category">${l.name}</p>

          <p class="dessert-list__title">${o}</p>
          <p class="dessert-list__description">${r}</p>
        </div>
        <div class="dessert-list__wrapper__bottom">
          <p class="dessert-list__price">${a} грн</p>
          <button class="dessert-list__btn js-dessert-modal-open" type="button" data-id="${t}">
            <svg width="17" height="17" class="dessert-list__icon" aria-hidden="true">
              <use href="${F}#icon-arrow_outward"></use>
            </svg>
          </button>
        </div>
      </li>
      `).join("");d.dessertList.insertAdjacentHTML("beforeend",s),d.dessertList.querySelectorAll(".dessert-list__image").forEach(t=>{const o=t.previousElementSibling;if(t.complete){o.style.display="none",t.classList.add("img__is-loaded");return}t.addEventListener("load",()=>{o.style.display="none",t.classList.add("img__is-loaded")}),t.addEventListener("error",()=>{o.style.display="none",t.classList.add("img__is-loaded")})})},V=()=>{d.dessertLoader.style.display="block"},K=()=>{d.dessertLoader.style.display="none"},i={showLoader:V,hideLoader:K},U=async(e=1,s="all")=>{i.showLoader();try{const{desserts:t}=await v(e,s);b(t),i.hideLoader(),d.dessertLoadMoreBtn.classList.remove("dessert-button-hidden")}catch(t){console.log(t)}};let p=1,_="all";const f=e=>{const s=Math.ceil(e/8);p<s?(d.dessertLoadMoreBtn.classList.remove("dessert-button-hidden"),d.dessertLoadMoreBtn.disabled=!1):(d.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),d.dessertLoadMoreBtn.disabled=!0)},G=async e=>{const s=e.target.closest(".dessert-category__btn");if(s){p=1,_=s.dataset.id,document.querySelectorAll(".dessert-category__btn").forEach(t=>t.classList.remove("active__btn")),s.classList.add("active__btn"),d.dessertList.innerHTML="",i.showLoader();try{const t=await v(p,_);b(t.desserts),f(t.totalItems)}catch(t){console.log(t)}finally{i.hideLoader()}}},J=async()=>{d.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),d.dessertLoadMoreBtn.disabled=!0,i.showLoader(),p+=1;try{const e=await v(p,_);b(e.desserts),f(e.totalItems)}catch(e){console.log(e)}finally{i.hideLoader()}},w={handleCategoryFilter:G,handleLoadMoreDesserts:J};d.dropdownBtn.addEventListener("click",()=>{d.dropdown.classList.toggle("is-open")});d.dropdown.addEventListener("click",e=>{const s=e.target.closest(".dessert-category__btn");s&&(d.dropdownText.textContent=s.textContent,d.dropdown.classList.remove("is-open"))});document.addEventListener("click",e=>{d.dropdown.contains(e.target)||d.dropdown.classList.remove("is-open")});z();U();d.dessertCategory.addEventListener("click",w.handleCategoryFilter);d.dessertLoadMoreBtn.addEventListener("click",w.handleLoadMoreDesserts);new k(".accordion-container",{showMultiple:!0,duration:300});const B={bestsellersList:document.querySelector(".bestsellers-list"),loaderBestsellers:document.querySelector(".bestsellers-loader"),leftBtn:document.querySelector(".page-left-btn"),rightBtn:document.querySelector(".page-right-btn")},Q=async()=>{const e="https://deserts-store.b.goit.study/api",{data:s}=await g.get(`${e}/desserts?type=popular`);return s};async function W(){const e=B.loaderBestsellers;e.style.display="block";try{const{desserts:s}=await Q();X(s)}catch(s){console.error(s)}finally{e.style.display="none"}}document.addEventListener("DOMContentLoaded",W);let m=null;function X(e){const s=e.map(({image:t,category:o,description:r,name:a,price:l,_id:c})=>`<li class="bestsellers-list-item swiper-slide">
          <img class="bestsellers-image" src="${t}" alt="${a}"/>
          <p class="bestsellers-category">${o.name}</p>
          <h3 class="bestsellers-name">${a}</h3>
          <p class="bestsellers-description">${r}</p>
          <div class="bestsellers-wrapper">
            <p class="bestsellers-price">${l} грн</p>
            <button class="bestsellers-modal-btn js-dessert-modal-open" type="button" data-id="${c}">
              <svg width="24" height="24" aria-hidden="true">
                <use href="/img/sprite.svg#icon-arrow_outward"></use>
              </svg>
            </button>
          </div>
        </li>`).join("");B.bestsellersList.innerHTML=s,m&&(m.destroy(!0,!0),m=null),m=new E(".swiper-bestsellers",{modules:[S,C],pagination:{el:".swiper-pagination",dynamicBullets:!0},navigation:{prevEl:".page-left-btn",nextEl:".page-right-btn"},slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1280:{slidesPerView:3,spaceBetween:24}}})}
//# sourceMappingURL=index.js.map
