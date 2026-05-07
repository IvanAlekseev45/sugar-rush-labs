import{a as u}from"./assets/vendor-B1ZHW564.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const l={dessertList:document.querySelector(".dessert-list"),dessertCategory:document.querySelector(".dessert-category"),dessertLoadMoreBtn:document.querySelector(".dessert-load-more-btn")},B=async()=>{const t="https://deserts-store.b.goit.study/api",{data:e}=await u.get(`${t}/categories`);return e},w=async()=>{try{const t=await B(),e=`
    <li class="dessert-category__item">
        <button class="dessert-category__btn active__btn" type="button" data-id="all">Всі десерти</button>
    </li>
  `,r=t.map(({_id:o,name:s})=>`
        <li class="dessert-category__item">
            <button class="dessert-category__btn" type="button" data-id="${o}">${s}</button>
        </li>
      `).join("");l.dessertCategory.insertAdjacentHTML("beforeend",e+r)}catch(t){console.log(t)}},m=async(t=1,e="all")=>{u.defaults.baseURL="https://deserts-store.b.goit.study/api";const r=e==="all"?"/desserts":`/desserts?category=${e}`,{data:o}=await u.get(`${r}`,{params:{page:t,limit:8}});return o},f=t=>{const e=t.map(({_id:r,name:o,description:s,price:n,category:a,image:y})=>`
      <li class="dessert-list__item">
        <div class="dessert-list__wrapper">
          <img class='dessert-list__image' src="${y}" alt="${o}" />
          <p class="dessert-list__category">${a.name}</p>

          <p class="dessert-list__title">${o}</p>
          <p class="dessert-list__description">${s}</p>
        </div>
        <div class="dessert-list__wrapper__bottom">
          <p class="dessert-list__price">${n} грн</p>
          <button class="dessert-list__btn js-dessert-modal-open" type="button" data-id="${r}" >
            <svg width="17" height="17" class="dessert-list__icon" aria-hidden="true" >
              <use href='/img/sprite.svg#icon-arrow_outward'></use>
            </svg>
          </button>
        </div>
      </li>
      `).join("");l.dessertList.insertAdjacentHTML("beforeend",e)},M=async(t=1,e="all")=>{try{const{desserts:r}=await m(t,e);f(r),l.dessertLoadMoreBtn.classList.remove("dessert-button-hidden")}catch(r){console.log(r)}};let i=1,b="all";const h=t=>{const e=Math.ceil(t/8);i<e?(l.dessertLoadMoreBtn.classList.remove("dessert-button-hidden"),l.dessertLoadMoreBtn.disabled=!1):(l.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),l.dessertLoadMoreBtn.disabled=!0)},$=async t=>{const e=t.target.closest(".dessert-category__btn");if(!e)return;i=1,b=e.dataset.id,document.querySelectorAll(".dessert-category__btn").forEach(o=>o.classList.remove("active__btn")),e.classList.add("active__btn"),l.dessertList.innerHTML="";const r=await m(i,b);f(r.desserts),h(r.totalItems)},S=async()=>{l.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),l.dessertLoadMoreBtn.disabled=!0,i+=1;try{const t=await m(i,b);f(t.desserts),h(t.totalItems)}catch(t){console.log(t)}},L={handleCategoryFilter:$,handleLoadMoreDesserts:S};w();M();l.dessertCategory.addEventListener("click",L.handleCategoryFilter);l.dessertLoadMoreBtn.addEventListener("click",L.handleLoadMoreDesserts);const q=async(t,e)=>{const r="https://deserts-store.b.goit.study/api",{data:o}=await u.get(`${r}/desserts?type=popular`,{params:{page:t,limit:e}});return o},d={bestsellersList:document.querySelector(".bestsellers-list"),loaderBestsellers:document.querySelector(".bestsellers-loader"),leftBtn:document.querySelector(".page-left-btn"),rightBtn:document.querySelector(".page-right-btn")},C=t=>{let e=v();p!==e&&(p=e,g())};let c=1,_=0,p=v();function v(){const t=window.innerWidth;return t>=1440?3:t>=768?2:1}async function g(t){const e=d.bestsellersList,r=d.loaderBestsellers,o=document.querySelector(".bestseller-loader-wrapper"),s=o.offsetHeight;o.style.height=`${s}px`,r.style.display="block",e.style.visibility="hidden",e.innerHTML="";try{const{desserts:n,totalItems:a}=await q(c,p);_=a,E(n)}catch(n){console.log(n)}finally{r.style.display="none",e.style.visibility="",o.style.height="auto"}}function E(t){const e=t.map(({image:r,category:o,description:s,name:n,price:a,_id:y})=>`<li class="bestsellers-list-item">
    <img class="bestsellers-image" src="${r}"/>
    <p class="bestsellers-category">${o.name}</p>
    <h3 class="bestsellers-name">${n}</h3>
    <p class="bestsellers-description">${s}</p>
    <div class="bestsellers-wrapper">
        <p class="bestsellers-price">${a} грн</p>
        <button class="bestsellers-modal-btn js-dessert-modal-open" type="button" data-id="${y}">
        <svg class="bestsellers-button-svg" width="24" height="24" aria-hidden="true"><use href="/img/sprite.svg#icon-arrow_outward"></use></svg>
        </button>
    </div>
    </li>`).join("");d.bestsellersList.innerHTML=e}function j(t){c<=1||(c-=1,g())}function H(t){const e=Math.ceil(_/p);c>=e||(c+=1,g())}document.addEventListener("DOMContentLoaded",g);window.addEventListener("resize",C);d.leftBtn.addEventListener("click",j);d.rightBtn.addEventListener("click",H);
//# sourceMappingURL=index.js.map
