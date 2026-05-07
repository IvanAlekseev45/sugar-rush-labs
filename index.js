import{a as m}from"./assets/vendor-B1ZHW564.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const d={dessertList:document.querySelector(".dessert-list"),dessertCategory:document.querySelector(".dessert-category"),dessertLoadMoreBtn:document.querySelector(".dessert-load-more-btn"),dropdown:document.querySelector(".category-dropdown"),dropdownBtn:document.querySelector(".category-dropdown__btn"),dropdownText:document.querySelector(".category-dropdown__text")},v=async()=>{const e="https://deserts-store.b.goit.study/api",{data:t}=await m.get(`${e}/categories`);return t},B=async()=>{try{const e=await v(),t=`
    <li class="dessert-category__item">
        <button class="dessert-category__btn active__btn" type="button" data-id="all">Всі десерти</button>
    </li>
  `,r=e.map(({_id:o,name:s})=>`
        <li class="dessert-category__item">
            <button class="dessert-category__btn" type="button" data-id="${o}">${s}</button>
        </li>
      `).join("");d.dessertCategory.insertAdjacentHTML("beforeend",t+r)}catch(e){console.log(e)}},b=async(e=1,t="all")=>{const r=t==="all"?"https://deserts-store.b.goit.study/api/desserts":`https://deserts-store.b.goit.study/api/desserts?category=${t}`,{data:o}=await m.get(`${r}`,{params:{page:e,limit:8}});return o},f=e=>{const t=e.map(({_id:r,name:o,description:s,price:n,category:l,image:g})=>`
      <li class="dessert-list__item">
        <div class="dessert-list__wrapper">
          <img class='dessert-list__image' src="${g}" alt="${o}" />
          <p class="dessert-list__category">${l.name}</p>

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
      `).join("");d.dessertList.insertAdjacentHTML("beforeend",t)},M=async(e=1,t="all")=>{try{const{desserts:r}=await b(e,t);f(r),d.dessertLoadMoreBtn.classList.remove("dessert-button-hidden")}catch(r){console.log(r)}};let a=1,y="all";const h=e=>{const t=Math.ceil(e/8);a<t?(d.dessertLoadMoreBtn.classList.remove("dessert-button-hidden"),d.dessertLoadMoreBtn.disabled=!1):(d.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),d.dessertLoadMoreBtn.disabled=!0)},$=async e=>{const t=e.target.closest(".dessert-category__btn");if(!t)return;a=1,y=t.dataset.id,document.querySelectorAll(".dessert-category__btn").forEach(o=>o.classList.remove("active__btn")),t.classList.add("active__btn"),d.dessertList.innerHTML="";const r=await b(a,y);f(r.desserts),h(r.totalItems)},S=async()=>{d.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),d.dessertLoadMoreBtn.disabled=!0,a+=1;try{const e=await b(a,y);f(e.desserts),h(e.totalItems)}catch(e){console.log(e)}},L={handleCategoryFilter:$,handleLoadMoreDesserts:S};d.dropdownBtn.addEventListener("click",()=>{d.dropdown.classList.toggle("is-open")});d.dropdown.addEventListener("click",e=>{const t=e.target.closest(".dessert-category__btn");t&&(d.dropdownText.textContent=t.textContent,d.dropdown.classList.remove("is-open"))});document.addEventListener("click",e=>{d.dropdown.contains(e.target)||d.dropdown.classList.remove("is-open")});B();M();d.dessertCategory.addEventListener("click",L.handleCategoryFilter);d.dessertLoadMoreBtn.addEventListener("click",L.handleLoadMoreDesserts);const q=async(e,t)=>{const r="https://deserts-store.b.goit.study/api",{data:o}=await m.get(`${r}/desserts?type=popular`,{params:{page:e,limit:t}});return o},i={bestsellersList:document.querySelector(".bestsellers-list"),loaderBestsellers:document.querySelector(".bestsellers-loader"),leftBtn:document.querySelector(".page-left-btn"),rightBtn:document.querySelector(".page-right-btn")},C=e=>{let t=w();u!==t&&(u=t,p())};let c=1,_=0,u=w();function w(){const e=window.innerWidth;return e>=1440?3:e>=768?2:1}async function p(e){const t=i.bestsellersList,r=i.loaderBestsellers,o=document.querySelector(".bestseller-loader-wrapper"),s=o.offsetHeight;o.style.height=`${s}px`,r.style.display="block",t.style.visibility="hidden",t.innerHTML="";try{const{desserts:n,totalItems:l}=await q(c,u);_=l,E(n)}catch(n){console.log(n)}finally{r.style.display="none",t.style.visibility="",o.style.height="auto"}}function E(e){const t=e.map(({image:r,category:o,description:s,name:n,price:l,_id:g})=>`<li class="bestsellers-list-item">
    <img class="bestsellers-image" src="${r}"/>
    <p class="bestsellers-category">${o.name}</p>
    <h3 class="bestsellers-name">${n}</h3>
    <p class="bestsellers-description">${s}</p>
    <div class="bestsellers-wrapper">
        <p class="bestsellers-price">${l} грн</p>
        <button class="bestsellers-modal-btn js-dessert-modal-open" type="button" data-id="${g}">
        <svg class="bestsellers-button-svg" width="24" height="24" aria-hidden="true"><use href="/img/sprite.svg#icon-arrow_outward"></use></svg>
        </button>
    </div>
    </li>`).join("");i.bestsellersList.innerHTML=t}function k(e){c<=1||(c-=1,p())}function j(e){const t=Math.ceil(_/u);c>=t||(c+=1,p())}document.addEventListener("DOMContentLoaded",p);window.addEventListener("resize",C);i.leftBtn.addEventListener("click",k);i.rightBtn.addEventListener("click",j);
//# sourceMappingURL=index.js.map
