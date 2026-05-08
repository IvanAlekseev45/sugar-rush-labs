import{a as y,i as l,A as E,S,N as C,P as q}from"./assets/vendor-DAWuplZu.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const i of d.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerPolicy&&(d.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?d.credentials="include":o.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function r(o){if(o.ep)return;o.ep=!0;const d=t(o);fetch(o.href,d)}})();const v={body:document.body},R=async s=>{const e="https://deserts-store.b.goit.study/api",{data:t}=await y.get(`${e}/desserts/${s}`);return t},D=async s=>{const e=s.target.closest(".js-dessert-modal-open");if(!e)return;const t=e.dataset.id;if(!t){l.error({message:"Не вдалося визначити десерт. Спробуйте ще раз.",position:"topRight"});return}x();try{const r=await R(t);A(r)}catch(r){m(),l.error({message:"Не вдалося завантажити інформацію про десерт. Спробуйте ще раз.",position:"topRight"}),console.log(r)}},P=s=>{const e=N();s.target===e&&m()},f=s=>{s.key==="Escape"&&m()},O=()=>{m()},T=()=>{m();const s=new CustomEvent("open-order-modal");document.dispatchEvent(s)};let n=null;const j=()=>{document.addEventListener("click",D)},x=()=>{n=document.createElement("div"),n.classList.add("dessert-modal-backdrop"),n.innerHTML=`
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
  `,v.body.append(n),v.body.classList.add("no-scroll"),n.addEventListener("click",P),document.addEventListener("keydown",f),n.querySelector(".dessert-modal__close-btn").addEventListener("click",O)},m=()=>{n&&(n.remove(),n=null,v.body.classList.remove("no-scroll"),document.removeEventListener("keydown",f))},N=()=>n,A=s=>{if(!n)return;const e=n.querySelector(".dessert-modal__content"),{_id:t,name:r,price:o,rate:d,description:i,composition:u,image:B}=s,k=u||"";e.innerHTML=`
    <img
      class="dessert-modal__image"
      src="${B}"
      alt="${r}"
    />

    <div class="dessert-modal__info">

      <h2 class="dessert-modal__title">${r}</h2>

      <p class="dessert-modal__price">${o} грн</p>

      <div class="dessert-modal__rating">
        ${I(d)}
      </div>

      <p class="dessert-modal__description">
        ${i}
      </p>

      <p class="dessert-modal__ingredients">
        <b>Склад:</b> ${k}
      </p>

      <button
        class="dessert-modal__order-btn"
        type="button"
        data-dessert-id="${t}"
      >
        Перейти до замовлення
      </button>
    </div>
  `,e.querySelector(".dessert-modal__order-btn").addEventListener("click",T)},H=s=>{const e=Number(s);if(Number.isNaN(e))return 0;const t=Math.round(e*2)/2;return Math.min(Math.max(t,0),5)},I=s=>{const e=H(s),t=Math.floor(e),r=e%1!==0;return`
    <div
      class="rating medium star-svg color-default direction-ltr value-${t} ${r?"half":""}"
      aria-label="Рейтинг ${e} з 5"
    >
      <div class="star-container">
        ${Array.from({length:5},()=>`
            <div class="star">
              <svg class="star-empty">
                <use href="/img/star-rating.icons.svg#star-empty"></use>
              </svg>
              <svg class="star-half">
                <use href="/img/star-rating.icons.svg#star-half"></use>
              </svg>
              <svg class="star-filled">
                <use href="/img/star-rating.icons.svg#star-filled"></use>
              </svg>
            </div>
          `).join("")}
      </div>
    </div>
  `};j();const a={dessertList:document.querySelector(".dessert-list"),dessertCategory:document.querySelector(".dessert-category"),dessertLoadMoreBtn:document.querySelector(".dessert-load-more-btn"),dropdown:document.querySelector(".category-dropdown"),dropdownBtn:document.querySelector(".category-dropdown__btn"),dropdownText:document.querySelector(".category-dropdown__text"),dessertLoader:document.querySelector(".dessert-loader")},z=async()=>{const s="https://deserts-store.b.goit.study/api",{data:e}=await y.get(`${s}/categories`);return e},F=async()=>{try{const s=await z(),e=`
    <li class="dessert-category__item">
        <button class="dessert-category__btn active__btn" type="button" data-id="all">Всі десерти</button>
    </li>
  `,t=s.map(({_id:r,name:o})=>`
        <li class="dessert-category__item">
            <button class="dessert-category__btn" type="button" data-id="${r}">${o}</button>
        </li>
      `).join("");a.dessertCategory.insertAdjacentHTML("beforeend",e+t)}catch{l.error({message:"Виникла помилка при завантаженні категорій, спробуйте пізніше.",position:"topRight"})}},h=async(s=1,e="all")=>{const t=e==="all"?"https://deserts-store.b.goit.study/api/desserts":`https://deserts-store.b.goit.study/api/desserts?category=${e}`,{data:r}=await y.get(`${t}`,{params:{page:s,limit:8}});return r},L="/sugar-rush-labs/assets/sprite-7MDemDlu.svg",_=s=>{const e=s.map(({_id:t,name:r,description:o,price:d,category:i,image:u})=>`
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

          <img class="dessert-list__image" src="${u}" alt="${r}" />
          <p class="dessert-list__category">${i.name}</p>

          <p class="dessert-list__title">${r}</p>
          <p class="dessert-list__description">${o}</p>
        </div>
        <div class="dessert-list__wrapper__bottom">
          <p class="dessert-list__price">${d} грн</p>
          <button class="dessert-list__btn js-dessert-modal-open" type="button" data-id="${t}">
            <svg width="17" height="17" class="dessert-list__icon" aria-hidden="true">
              <use href="${L}#icon-arrow_outward"></use>
            </svg>
          </button>
        </div>
      </li>
      `).join("");a.dessertList.insertAdjacentHTML("beforeend",e),a.dessertList.querySelectorAll(".dessert-list__image").forEach(t=>{const r=t.previousElementSibling;if(t.complete){r.style.display="none",t.classList.add("img__is-loaded");return}t.addEventListener("load",()=>{r.style.display="none",t.classList.add("img__is-loaded")}),t.addEventListener("error",()=>{r.style.display="none",t.classList.add("img__is-loaded")})})},G=()=>{a.dessertLoader.style.display="block"},V=()=>{a.dessertLoader.style.display="none"},c={showLoader:G,hideLoader:V},K=async(s=1,e="all")=>{c.showLoader();try{const{desserts:t}=await h(s,e);_(t),c.hideLoader(),a.dessertLoadMoreBtn.classList.remove("dessert-button-hidden")}catch{l.error({message:"Виникла помилка при завантаженні десертів, спробуйте пізніше.",position:"topRight"})}};let p=1,b="all";const w=s=>{const e=Math.ceil(s/8);p<e?(a.dessertLoadMoreBtn.classList.remove("dessert-button-hidden"),a.dessertLoadMoreBtn.disabled=!1):(a.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),a.dessertLoadMoreBtn.disabled=!0)},U=async s=>{const e=s.target.closest(".dessert-category__btn");if(e){p=1,b=e.dataset.id,document.querySelectorAll(".dessert-category__btn").forEach(t=>t.classList.remove("active__btn")),e.classList.add("active__btn"),a.dessertList.innerHTML="",c.showLoader();try{const t=await h(p,b);_(t.desserts),w(t.totalItems)}catch{l.error({message:"Виникла помилка при зміні категорії, спробуйте пізніше.",position:"topRight"})}finally{c.hideLoader()}}},J=async()=>{a.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),a.dessertLoadMoreBtn.disabled=!0,c.showLoader(),p+=1;try{const{desserts:s,totalItems:e}=await h(p,b);_(s),w(e)}catch{l.error({message:"Виникла помилка при завантаженні десертів, спробуйте пізніше.",position:"topRight"})}finally{c.hideLoader()}},M={handleCategoryFilter:U,handleLoadMoreDesserts:J};a.dropdownBtn.addEventListener("click",()=>{a.dropdown.classList.toggle("is-open")});a.dropdown.addEventListener("click",s=>{const e=s.target.closest(".dessert-category__btn");e&&(a.dropdownText.textContent=e.textContent,a.dropdown.classList.remove("is-open"))});document.addEventListener("click",s=>{a.dropdown.contains(s.target)||a.dropdown.classList.remove("is-open")});F();K();a.dessertCategory.addEventListener("click",M.handleCategoryFilter);a.dessertLoadMoreBtn.addEventListener("click",M.handleLoadMoreDesserts);new E(".accordion-container",{showMultiple:!1,duration:300});const $={bestsellersList:document.querySelector(".bestsellers-list"),loaderBestsellers:document.querySelector(".bestsellers-loader"),leftBtn:document.querySelector(".page-left-btn"),rightBtn:document.querySelector(".page-right-btn")},Q=async()=>{const s="https://deserts-store.b.goit.study/api",{data:e}=await y.get(`${s}/desserts?type=popular&limit=18`);return e};async function W(){const s=$.loaderBestsellers;s.style.display="block";try{const{desserts:e}=await Q();X(e)}catch(e){console.error(e)}finally{s.style.display="none"}}document.addEventListener("DOMContentLoaded",W);let g=null;function X(s){const e=s.map(({image:t,category:r,description:o,name:d,price:i,_id:u})=>`<li class="bestsellers-list-item swiper-slide">
          <img class="bestsellers-image" src="${t}" alt="${d}"/>
          <p class="bestsellers-category">${r.name}</p>
          <h3 class="bestsellers-name">${d}</h3>
          <p class="bestsellers-description">${o}</p>
          <div class="bestsellers-wrapper">
            <p class="bestsellers-price">${i} грн</p>
            <button class="bestsellers-modal-btn js-dessert-modal-open" type="button" data-id="${u}">
              <svg width="24" height="24" aria-hidden="true">
                <use href="${L}#icon-arrow_outward"></use>
              </svg>
            </button>
          </div>
        </li>`).join("");$.bestsellersList.innerHTML=e,g&&(g.destroy(!0,!0),g=null),g=new S(".swiper-bestsellers",{modules:[C,q],slidesPerView:1,slidesPerGroup:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:16},1280:{slidesPerView:3,slidesPerGroup:3,spaceBetween:24}},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0},navigation:{prevEl:".page-left-btn",nextEl:".page-right-btn"}})}
//# sourceMappingURL=index.js.map
