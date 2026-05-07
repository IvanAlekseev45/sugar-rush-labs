import{a as p,A as f,S as w,N as h,P as L}from"./assets/vendor-Cds40s8X.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const r={dessertList:document.querySelector(".dessert-list"),dessertCategory:document.querySelector(".dessert-category"),dessertLoadMoreBtn:document.querySelector(".dessert-load-more-btn"),dropdown:document.querySelector(".category-dropdown"),dropdownBtn:document.querySelector(".category-dropdown__btn"),dropdownText:document.querySelector(".category-dropdown__text")},v=async()=>{const e="https://deserts-store.b.goit.study/api",{data:t}=await p.get(`${e}/categories`);return t},B=async()=>{try{const e=await v(),t=`
    <li class="dessert-category__item">
        <button class="dessert-category__btn active__btn" type="button" data-id="all">Всі десерти</button>
    </li>
  `,o=e.map(({_id:a,name:s})=>`
        <li class="dessert-category__item">
            <button class="dessert-category__btn" type="button" data-id="${a}">${s}</button>
        </li>
      `).join("");r.dessertCategory.insertAdjacentHTML("beforeend",t+o)}catch(e){console.log(e)}},g=async(e=1,t="all")=>{const o=t==="all"?"https://deserts-store.b.goit.study/api/desserts":`https://deserts-store.b.goit.study/api/desserts?category=${t}`,{data:a}=await p.get(`${o}`,{params:{page:e,limit:8}});return a},y=e=>{const t=e.map(({_id:o,name:a,description:s,price:n,category:d,image:c})=>`
      <li class="dessert-list__item">
        <div class="dessert-list__wrapper">
          <img class='dessert-list__image' src="${c}" alt="${a}" />
          <p class="dessert-list__category">${d.name}</p>

          <p class="dessert-list__title">${a}</p>
          <p class="dessert-list__description">${s}</p>
        </div>
        <div class="dessert-list__wrapper__bottom">
          <p class="dessert-list__price">${n} грн</p>
          <button class="dessert-list__btn js-dessert-modal-open" type="button" data-id="${o}" >
            <svg width="17" height="17" class="dessert-list__icon" aria-hidden="true" >
              <use href='/img/sprite.svg#icon-arrow_outward'></use>
            </svg>
          </button>
        </div>
      </li>
      `).join("");r.dessertList.insertAdjacentHTML("beforeend",t)},M=async(e=1,t="all")=>{try{const{desserts:o}=await g(e,t);y(o),r.dessertLoadMoreBtn.classList.remove("dessert-button-hidden")}catch(o){console.log(o)}};let l=1,u="all";const b=e=>{const t=Math.ceil(e/8);l<t?(r.dessertLoadMoreBtn.classList.remove("dessert-button-hidden"),r.dessertLoadMoreBtn.disabled=!1):(r.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),r.dessertLoadMoreBtn.disabled=!0)},$=async e=>{const t=e.target.closest(".dessert-category__btn");if(!t)return;l=1,u=t.dataset.id,document.querySelectorAll(".dessert-category__btn").forEach(a=>a.classList.remove("active__btn")),t.classList.add("active__btn"),r.dessertList.innerHTML="";const o=await g(l,u);y(o.desserts),b(o.totalItems)},S=async()=>{r.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),r.dessertLoadMoreBtn.disabled=!0,l+=1;try{const e=await g(l,u);y(e.desserts),b(e.totalItems)}catch(e){console.log(e)}},m={handleCategoryFilter:$,handleLoadMoreDesserts:S};r.dropdownBtn.addEventListener("click",()=>{r.dropdown.classList.toggle("is-open")});r.dropdown.addEventListener("click",e=>{const t=e.target.closest(".dessert-category__btn");t&&(r.dropdownText.textContent=t.textContent,r.dropdown.classList.remove("is-open"))});document.addEventListener("click",e=>{r.dropdown.contains(e.target)||r.dropdown.classList.remove("is-open")});B();M();r.dessertCategory.addEventListener("click",m.handleCategoryFilter);r.dessertLoadMoreBtn.addEventListener("click",m.handleLoadMoreDesserts);new f(".accordion-container",{showMultiple:!0,duration:300});const _={bestsellersList:document.querySelector(".bestsellers-list"),loaderBestsellers:document.querySelector(".bestsellers-loader"),leftBtn:document.querySelector(".page-left-btn"),rightBtn:document.querySelector(".page-right-btn")},q=async()=>{const e="https://deserts-store.b.goit.study/api",{data:t}=await p.get(`${e}/desserts?type=popular`);return t};async function C(){const e=_.loaderBestsellers;e.style.display="block";try{const{desserts:t}=await q();E(t)}catch(t){console.error(t)}finally{e.style.display="none"}}document.addEventListener("DOMContentLoaded",C);let i=null;function E(e){const t=e.map(({image:o,category:a,description:s,name:n,price:d,_id:c})=>`<li class="bestsellers-list-item swiper-slide">
          <img class="bestsellers-image" src="${o}" alt="${n}"/>
          <p class="bestsellers-category">${a.name}</p>
          <h3 class="bestsellers-name">${n}</h3>
          <p class="bestsellers-description">${s}</p>
          <div class="bestsellers-wrapper">
            <p class="bestsellers-price">${d} грн</p>
            <button class="bestsellers-modal-btn js-dessert-modal-open" type="button" data-id="${c}">
              <svg width="24" height="24" aria-hidden="true">
                <use href="/img/sprite.svg#icon-arrow_outward"></use>
              </svg>
            </button>
          </div>
        </li>`).join("");_.bestsellersList.innerHTML=t,i&&(i.destroy(!0,!0),i=null),i=new w(".swiper-bestsellers",{modules:[h,L],pagination:{el:".swiper-pagination",dynamicBullets:!0},navigation:{prevEl:".page-left-btn",nextEl:".page-right-btn"},slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1280:{slidesPerView:3,spaceBetween:24}}})}
//# sourceMappingURL=index.js.map
