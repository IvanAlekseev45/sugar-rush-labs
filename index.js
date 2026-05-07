import{a as y,A as w,S as _,N as f,P as v}from"./assets/vendor-Cds40s8X.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const n of d.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerPolicy&&(d.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?d.credentials="include":o.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(o){if(o.ep)return;o.ep=!0;const d=t(o);fetch(o.href,d)}})();const r={dessertList:document.querySelector(".dessert-list"),dessertCategory:document.querySelector(".dessert-category"),dessertLoadMoreBtn:document.querySelector(".dessert-load-more-btn"),dropdown:document.querySelector(".category-dropdown"),dropdownBtn:document.querySelector(".category-dropdown__btn"),dropdownText:document.querySelector(".category-dropdown__text"),dessertLoader:document.querySelector(".dessert-loader")},B=async()=>{const e="https://deserts-store.b.goit.study/api",{data:s}=await y.get(`${e}/categories`);return s},M=async()=>{try{const e=await B(),s=`
    <li class="dessert-category__item">
        <button class="dessert-category__btn active__btn" type="button" data-id="all">Всі десерти</button>
    </li>
  `,t=e.map(({_id:a,name:o})=>`
        <li class="dessert-category__item">
            <button class="dessert-category__btn" type="button" data-id="${a}">${o}</button>
        </li>
      `).join("");r.dessertCategory.insertAdjacentHTML("beforeend",s+t)}catch(e){console.log(e)}},g=async(e=1,s="all")=>{const t=s==="all"?"https://deserts-store.b.goit.study/api/desserts":`https://deserts-store.b.goit.study/api/desserts?category=${s}`,{data:a}=await y.get(`${t}`,{params:{page:e,limit:8}});return a},$="/sugar-rush-labs/assets/sprite-7MDemDlu.svg",m=e=>{const s=e.map(({_id:t,name:a,description:o,price:d,category:n,image:u})=>`
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

          <img class="dessert-list__image" src="${u}" alt="${a}" />
          <p class="dessert-list__category">${n.name}</p>

          <p class="dessert-list__title">${a}</p>
          <p class="dessert-list__description">${o}</p>
        </div>
        <div class="dessert-list__wrapper__bottom">
          <p class="dessert-list__price">${d} грн</p>
          <button class="dessert-list__btn js-dessert-modal-open" type="button" data-id="${t}">
            <svg width="17" height="17" class="dessert-list__icon" aria-hidden="true">
              <use href="${$}#icon-arrow_outward"></use>
            </svg>
          </button>
        </div>
      </li>
      `).join("");r.dessertList.insertAdjacentHTML("beforeend",s),r.dessertList.querySelectorAll(".dessert-list__image").forEach(t=>{const a=t.previousElementSibling;if(t.complete){a.style.display="none",t.classList.add("img__is-loaded");return}t.addEventListener("load",()=>{a.style.display="none",t.classList.add("img__is-loaded")}),t.addEventListener("error",()=>{a.style.display="none",t.classList.add("img__is-loaded")})})},S=()=>{r.dessertLoader.style.display="block"},q=()=>{r.dessertLoader.style.display="none"},l={showLoader:S,hideLoader:q},E=async(e=1,s="all")=>{l.showLoader();try{const{desserts:t}=await g(e,s);m(t),l.hideLoader(),r.dessertLoadMoreBtn.classList.remove("dessert-button-hidden")}catch(t){console.log(t)}};let i=1,p="all";const b=e=>{const s=Math.ceil(e/8);i<s?(r.dessertLoadMoreBtn.classList.remove("dessert-button-hidden"),r.dessertLoadMoreBtn.disabled=!1):(r.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),r.dessertLoadMoreBtn.disabled=!0)},k=async e=>{const s=e.target.closest(".dessert-category__btn");if(s){i=1,p=s.dataset.id,r.dessertList.innerHTML="",l.showLoader(),await new Promise(t=>requestAnimationFrame(t));try{const t=await g(i,p);m(t.desserts),b(t.totalItems)}catch(t){console.log(t)}finally{l.hideLoader()}}},P=async()=>{r.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),r.dessertLoadMoreBtn.disabled=!0,l.showLoader(),i+=1;try{const e=await g(i,p);m(e.desserts),b(e.totalItems)}catch(e){console.log(e)}finally{l.hideLoader()}},L={handleCategoryFilter:k,handleLoadMoreDesserts:P};r.dropdownBtn.addEventListener("click",()=>{r.dropdown.classList.toggle("is-open")});r.dropdown.addEventListener("click",e=>{const s=e.target.closest(".dessert-category__btn");s&&(r.dropdownText.textContent=s.textContent,r.dropdown.classList.remove("is-open"))});document.addEventListener("click",e=>{r.dropdown.contains(e.target)||r.dropdown.classList.remove("is-open")});M();E();r.dessertCategory.addEventListener("click",L.handleCategoryFilter);r.dessertLoadMoreBtn.addEventListener("click",L.handleLoadMoreDesserts);new w(".accordion-container",{showMultiple:!0,duration:300});const h={bestsellersList:document.querySelector(".bestsellers-list"),loaderBestsellers:document.querySelector(".bestsellers-loader"),leftBtn:document.querySelector(".page-left-btn"),rightBtn:document.querySelector(".page-right-btn")},C=async()=>{const e="https://deserts-store.b.goit.study/api",{data:s}=await y.get(`${e}/desserts?type=popular`);return s};async function j(){const e=h.loaderBestsellers;e.style.display="block";try{const{desserts:s}=await C();x(s)}catch(s){console.error(s)}finally{e.style.display="none"}}document.addEventListener("DOMContentLoaded",j);let c=null;function x(e){const s=e.map(({image:t,category:a,description:o,name:d,price:n,_id:u})=>`<li class="bestsellers-list-item swiper-slide">
          <img class="bestsellers-image" src="${t}" alt="${d}"/>
          <p class="bestsellers-category">${a.name}</p>
          <h3 class="bestsellers-name">${d}</h3>
          <p class="bestsellers-description">${o}</p>
          <div class="bestsellers-wrapper">
            <p class="bestsellers-price">${n} грн</p>
            <button class="bestsellers-modal-btn js-dessert-modal-open" type="button" data-id="${u}">
              <svg width="24" height="24" aria-hidden="true">
                <use href="/img/sprite.svg#icon-arrow_outward"></use>
              </svg>
            </button>
          </div>
        </li>`).join("");h.bestsellersList.innerHTML=s,c&&(c.destroy(!0,!0),c=null),c=new _(".swiper-bestsellers",{modules:[f,v],pagination:{el:".swiper-pagination",dynamicBullets:!0},navigation:{prevEl:".page-left-btn",nextEl:".page-right-btn"},slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1280:{slidesPerView:3,spaceBetween:24}}})}
//# sourceMappingURL=index.js.map
