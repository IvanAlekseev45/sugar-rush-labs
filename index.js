import{a as g,i as h,A as E,S,N as C,P as q}from"./assets/vendor-DAWuplZu.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();const y={body:document.body},D=async e=>{const s="https://deserts-store.b.goit.study/api",{data:t}=await g.get(`${s}/desserts/${e}`);return t},P=async e=>{const s=e.target.closest(".js-dessert-modal-open");if(!s)return;const t=s.dataset.id;if(!t){h.error({message:"Не вдалося визначити десерт. Спробуйте ще раз.",position:"topRight"});return}x();try{const r=await D(t);A(r)}catch(r){p(),h.error({message:"Не вдалося завантажити інформацію про десерт. Спробуйте ще раз.",position:"topRight"}),console.log(r)}},R=e=>{const s=N();e.target===s&&p()},f=e=>{e.key==="Escape"&&p()},O=()=>{p()},T=()=>{p();const e=new CustomEvent("open-order-modal");document.dispatchEvent(e)};let n=null;const j=()=>{document.addEventListener("click",P)},x=()=>{n=document.createElement("div"),n.classList.add("dessert-modal-backdrop"),n.innerHTML=`
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
  `,y.body.append(n),y.body.classList.add("no-scroll"),n.addEventListener("click",R),document.addEventListener("keydown",f),n.querySelector(".dessert-modal__close-btn").addEventListener("click",O)},p=()=>{n&&(n.remove(),n=null,y.body.classList.remove("no-scroll"),document.removeEventListener("keydown",f))},N=()=>n,A=e=>{if(!n)return;const s=n.querySelector(".dessert-modal__content"),{_id:t,name:r,price:o,rate:a,description:l,composition:c,image:B}=e,k=c||"";s.innerHTML=`
    <img
      class="dessert-modal__image"
      src="${B}"
      alt="${r}"
    />

    <div class="dessert-modal__info">

      <h2 class="dessert-modal__title">${r}</h2>

      <p class="dessert-modal__price">${o} грн</p>

      <div class="dessert-modal__rating">
        ${I(a)}
      </div>

      <p class="dessert-modal__description">
        ${l}
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
  `,s.querySelector(".dessert-modal__order-btn").addEventListener("click",T)},H=e=>{const s=Number(e);if(Number.isNaN(s))return 0;const t=Math.round(s*2)/2;return Math.min(Math.max(t,0),5)},I=e=>{const s=H(e),t=Math.floor(s),r=s%1!==0;return`
    <div
      class="rating medium star-svg color-default direction-ltr value-${t} ${r?"half":""}"
      aria-label="Рейтинг ${s} з 5"
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
  `};j();const d={dessertList:document.querySelector(".dessert-list"),dessertCategory:document.querySelector(".dessert-category"),dessertLoadMoreBtn:document.querySelector(".dessert-load-more-btn"),dropdown:document.querySelector(".category-dropdown"),dropdownBtn:document.querySelector(".category-dropdown__btn"),dropdownText:document.querySelector(".category-dropdown__text"),dessertLoader:document.querySelector(".dessert-loader")},z=async()=>{const e="https://deserts-store.b.goit.study/api",{data:s}=await g.get(`${e}/categories`);return s},F=async()=>{try{const e=await z(),s=`
    <li class="dessert-category__item">
        <button class="dessert-category__btn active__btn" type="button" data-id="all">Всі десерти</button>
    </li>
  `,t=e.map(({_id:r,name:o})=>`
        <li class="dessert-category__item">
            <button class="dessert-category__btn" type="button" data-id="${r}">${o}</button>
        </li>
      `).join("");d.dessertCategory.insertAdjacentHTML("beforeend",s+t)}catch(e){console.log(e)}},b=async(e=1,s="all")=>{const t=s==="all"?"https://deserts-store.b.goit.study/api/desserts":`https://deserts-store.b.goit.study/api/desserts?category=${s}`,{data:r}=await g.get(`${t}`,{params:{page:e,limit:8}});return r},L="/sugar-rush-labs/assets/sprite-7MDemDlu.svg",_=e=>{const s=e.map(({_id:t,name:r,description:o,price:a,category:l,image:c})=>`
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

          <img class="dessert-list__image" src="${c}" alt="${r}" />
          <p class="dessert-list__category">${l.name}</p>

          <p class="dessert-list__title">${r}</p>
          <p class="dessert-list__description">${o}</p>
        </div>
        <div class="dessert-list__wrapper__bottom">
          <p class="dessert-list__price">${a} грн</p>
          <button class="dessert-list__btn js-dessert-modal-open" type="button" data-id="${t}">
            <svg width="17" height="17" class="dessert-list__icon" aria-hidden="true">
              <use href="${L}#icon-arrow_outward"></use>
            </svg>
          </button>
        </div>
      </li>
      `).join("");d.dessertList.insertAdjacentHTML("beforeend",s),d.dessertList.querySelectorAll(".dessert-list__image").forEach(t=>{const r=t.previousElementSibling;if(t.complete){r.style.display="none",t.classList.add("img__is-loaded");return}t.addEventListener("load",()=>{r.style.display="none",t.classList.add("img__is-loaded")}),t.addEventListener("error",()=>{r.style.display="none",t.classList.add("img__is-loaded")})})},G=()=>{d.dessertLoader.style.display="block"},V=()=>{d.dessertLoader.style.display="none"},i={showLoader:G,hideLoader:V},K=async(e=1,s="all")=>{i.showLoader();try{const{desserts:t}=await b(e,s);_(t),i.hideLoader(),d.dessertLoadMoreBtn.classList.remove("dessert-button-hidden")}catch(t){console.log(t)}};let u=1,v="all";const w=e=>{const s=Math.ceil(e/8);u<s?(d.dessertLoadMoreBtn.classList.remove("dessert-button-hidden"),d.dessertLoadMoreBtn.disabled=!1):(d.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),d.dessertLoadMoreBtn.disabled=!0)},U=async e=>{const s=e.target.closest(".dessert-category__btn");if(s){u=1,v=s.dataset.id,document.querySelectorAll(".dessert-category__btn").forEach(t=>t.classList.remove("active__btn")),s.classList.add("active__btn"),d.dessertList.innerHTML="",i.showLoader();try{const t=await b(u,v);_(t.desserts),w(t.totalItems)}catch(t){console.log(t)}finally{i.hideLoader()}}},J=async()=>{d.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),d.dessertLoadMoreBtn.disabled=!0,i.showLoader(),u+=1;try{const e=await b(u,v);_(e.desserts),w(e.totalItems)}catch(e){console.log(e)}finally{i.hideLoader()}},M={handleCategoryFilter:U,handleLoadMoreDesserts:J};d.dropdownBtn.addEventListener("click",()=>{d.dropdown.classList.toggle("is-open")});d.dropdown.addEventListener("click",e=>{const s=e.target.closest(".dessert-category__btn");s&&(d.dropdownText.textContent=s.textContent,d.dropdown.classList.remove("is-open"))});document.addEventListener("click",e=>{d.dropdown.contains(e.target)||d.dropdown.classList.remove("is-open")});F();K();d.dessertCategory.addEventListener("click",M.handleCategoryFilter);d.dessertLoadMoreBtn.addEventListener("click",M.handleLoadMoreDesserts);new E(".accordion-container",{showMultiple:!1,duration:300});const $={bestsellersList:document.querySelector(".bestsellers-list"),loaderBestsellers:document.querySelector(".bestsellers-loader"),leftBtn:document.querySelector(".page-left-btn"),rightBtn:document.querySelector(".page-right-btn")},Q=async()=>{const e="https://deserts-store.b.goit.study/api",{data:s}=await g.get(`${e}/desserts?type=popular&limit=18`);return s};async function W(){const e=$.loaderBestsellers;e.style.display="block";try{const{desserts:s}=await Q();X(s)}catch(s){console.error(s)}finally{e.style.display="none"}}document.addEventListener("DOMContentLoaded",W);let m=null;function X(e){const s=e.map(({image:t,category:r,description:o,name:a,price:l,_id:c})=>`<li class="bestsellers-list-item swiper-slide">
          <img class="bestsellers-image" src="${t}" alt="${a}"/>
          <p class="bestsellers-category">${r.name}</p>
          <h3 class="bestsellers-name">${a}</h3>
          <p class="bestsellers-description">${o}</p>
          <div class="bestsellers-wrapper">
            <p class="bestsellers-price">${l} грн</p>
            <button class="bestsellers-modal-btn js-dessert-modal-open" type="button" data-id="${c}">
              <svg width="24" height="24" aria-hidden="true">
                <use href="${L}#icon-arrow_outward"></use>
              </svg>
            </button>
          </div>
        </li>`).join("");$.bestsellersList.innerHTML=s,m&&(m.destroy(!0,!0),m=null),m=new S(".swiper-bestsellers",{modules:[C,q],slidesPerView:1,slidesPerGroup:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:16},1280:{slidesPerView:3,slidesPerGroup:3,spaceBetween:24}},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0},navigation:{prevEl:".page-left-btn",nextEl:".page-right-btn"}})}
//# sourceMappingURL=index.js.map
