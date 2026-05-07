import{a as u}from"./assets/vendor-B1ZHW564.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const l={dessertList:document.querySelector(".dessert-list"),dessertCategory:document.querySelector(".dessert-category"),dessertLoadMoreBtn:document.querySelector(".dessert-load-more-btn")},_=async()=>{const t="https://deserts-store.b.goit.study/api",{data:e}=await u.get(`${t}/categories`);return e},v=async()=>{try{const t=await _(),e=`
    <li class="dessert-category__item">
        <button class="dessert-category__btn active__btn" type="button" data-id="all">Всі десерти</button>
    </li>
  `,r=t.map(({_id:a,name:s})=>`
        <li class="dessert-category__item">
            <button class="dessert-category__btn" type="button" data-id="${a}">${s}</button>
        </li>
      `).join("");l.dessertCategory.insertAdjacentHTML("beforeend",e+r)}catch(t){console.log(t)}},y=async(t=1,e="all")=>{u.defaults.baseURL="https://deserts-store.b.goit.study/api";const r=e==="all"?"/desserts":`/desserts?category=${e}`,{data:a}=await u.get(`${r}`,{params:{page:t,limit:8}});return a},b=t=>{const e=t.map(({_id:r,name:a,description:s,price:o,category:n,image:p})=>`
      <li class="dessert-list__item">
        <div class="dessert-list__wrapper">
          <img class='dessert-list__image' src="${p}" alt="${a}" />
          <p class="dessert-list__category">${n.name}</p>

          <p class="dessert-list__title">${a}</p>
          <p class="dessert-list__description">${s}</p>
        </div>
        <div class="dessert-list__wrapper__bottom">
          <p class="dessert-list__price">${o} грн</p>
          <button class="dessert-list__btn js-dessert-modal-open" type="button" data-id="${r}" >
            <svg width="17" height="17" class="dessert-list__icon" aria-hidden="true" >
              <use href='/img/sprite.svg#icon-arrow_outward'></use>
            </svg>
          </button>
        </div>
      </li>
      `).join("");l.dessertList.insertAdjacentHTML("beforeend",e)},B=async(t=1,e="all")=>{try{const{desserts:r}=await y(t,e);b(r),l.dessertLoadMoreBtn.classList.remove("dessert-button-hidden")}catch(r){console.log(r)}};let i=1,g="all";const f=t=>{const e=Math.ceil(t/8);i<e?(l.dessertLoadMoreBtn.classList.remove("dessert-button-hidden"),l.dessertLoadMoreBtn.disabled=!1):(l.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),l.dessertLoadMoreBtn.disabled=!0)},M=async t=>{const e=t.target.closest(".dessert-category__btn");if(!e)return;i=1,g=e.dataset.id,document.querySelectorAll(".dessert-category__btn").forEach(a=>a.classList.remove("active__btn")),e.classList.add("active__btn"),l.dessertList.innerHTML="";const r=await y(i,g);b(r.desserts),f(r.totalItems)},$=async()=>{l.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),l.dessertLoadMoreBtn.disabled=!0,i+=1;try{const t=await y(i,g);b(t.desserts),f(t.totalItems)}catch(t){console.log(t)}},h={handleCategoryFilter:M,handleLoadMoreDesserts:$};v();B();l.dessertCategory.addEventListener("click",h.handleCategoryFilter);l.dessertLoadMoreBtn.addEventListener("click",h.handleLoadMoreDesserts);const w=async t=>{const e="https://deserts-store.b.goit.study/api",{data:r}=await u.get(`${e}/desserts?type=popular`,{params:{page:t,limit:3}});return r},d={bestsellersList:document.querySelector(".bestsellers-list"),loaderBestsellers:document.querySelector(".bestsellers-loader"),leftBtn:document.querySelector(".page-left-btn"),rightBtn:document.querySelector(".page-right-btn")};let c=1,L=0,C=3;async function m(t){d.loaderBestsellers.style.display="block",d.bestsellersList.innerHTML="";try{const{desserts:e,totalItems:r}=await w(c);L=r,q(e)}catch(e){console.log(e)}finally{d.loaderBestsellers.style.display="none"}}function q(t){const e=t.map(({image:r,category:a,description:s,name:o,price:n,_id:p})=>`<li class="bestsellers-list-item">
    <img class="bestsellers-image" src="${r}"/>
    <p class="bestsellers-category">${a.name}</p>
    <h2 class="bestsellers-name">${o}</h2>
    <p class="bestsellers-description">${s}</p>
    <div class="bestsellers-wrapper">
        <p class="bestsellers-price">${n} грн</p>
        <button class="bestsellers-modal-btn" type="button" data-id="${p}">
        <svg class="bestsellers-button-cvg" width="13" height="13" aria-hidden="true"><use href="/img/sprite.svg#icon-arrow_outward"></use></svg>
        </button>
    </div>
    </li>`);d.bestsellersList.innerHTML=e}function S(t){c<=1||(c-=1,m())}function E(t){const e=Math.ceil(L/C);c>=e||(c+=1,m())}document.addEventListener("DOMContentLoaded",m);d.leftBtn.addEventListener("click",S);d.rightBtn.addEventListener("click",E);
//# sourceMappingURL=index.js.map
