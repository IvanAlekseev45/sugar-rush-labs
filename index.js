import{a as u}from"./assets/vendor-B1ZHW564.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const n={dessertList:document.querySelector(".dessert-list"),dessertCategory:document.querySelector(".dessert-category")},m=async()=>{const t="https://deserts-store.b.goit.study/api",{data:e}=await u.get(`${t}/categories`);return e},b=async()=>{try{const t=await m(),e=`
    <li class="dessert-category__item">
        <button class="dessert-category__btn active__btn" type="button" data-id="all">Всі десерти</button>
    </li>
  `,r=t.map(({_id:l,name:s})=>`
        <li class="dessert-category__item">
            <button class="dessert-category__btn" type="button" data-id="${l}">${s}</button>
        </li>
      `).join("");n.dessertCategory.insertAdjacentHTML("beforeend",e+r)}catch(t){console.log(t)}},f=async()=>{const t="https://deserts-store.b.goit.study/api",{data:e}=await u.get(`${t}/desserts`,{params:{page:1,limit:8}});return e},g=async()=>{try{const{desserts:t}=await f(),e=t.map(({_id:r,name:l,description:s,price:i,category:a,image:c})=>`
      <li class="dessert-list__item">
        <div class="dessert-list__wrapper">
          <img class='dessert-list__image' src="${c}" alt="${l}" />
          <p class="dessert-list__category">${a.name}</p>

          <p class="dessert-list__title">${l}</p>
          <p class="dessert-list__description">${s}</p>
        </div>
        <div class="dessert-list__wrapper__bottom">
          <p class="dessert-list__price">${i} грн</p>
          <button class="dessert-list__btn" type="button" data-id="${r}" >
            <svg width="17" height="17" class="dessert-list__icon" aria-hidden="true" >
              <use href='/img/sprite.svg#icon-arrow_outward' />
            </svg>
          </button>
        </div>
      </li>
      `).join("");n.dessertList.insertAdjacentHTML("beforeend",e)}catch(t){console.log(t)}},h=async t=>{const e="https://deserts-store.b.goit.study/api",{data:r}=await u.get(`${e}/desserts?category=${t}`,{params:{page:1,limit:8}});return r},v=async t=>{try{const{desserts:e}=await h(t),r=e.map(({_id:l,name:s,description:i,price:a,category:c,image:_})=>`
        <li class="dessert-list__item">
            <div class="dessert-list__wrapper">
                <img class='dessert-list__image' src="${_}" alt="${s}" />
                <p class="dessert-list__category">${c.name}</p>
            
                <p class="dessert-list__title">${s}</p>
                <p class="dessert-list__description">${i}</p>    
            </div>
            <div class="dessert-list__wrapper__bottom">
                <p class="dessert-list__price">${a} грн</p>
                <button class="dessert-list__btn" type="button" data-id="${l}">
                    <svg width="17" height="17" class="dessert-list__icon" aria-hidden="true" >
                        <use href='/img/sprite.svg#icon-arrow_outward'></use>
                    </svg>
                </button>
            </div>
        </li>
      `).join("");n.dessertList.insertAdjacentHTML("beforeend",r)}catch(e){console.log(e)}},L=async t=>{const e=t.target.closest(".dessert-category__btn");if(!e)return;const r=e.dataset.id;if(document.querySelectorAll(".dessert-category__btn").forEach(l=>l.classList.remove("active__btn")),e.classList.add("active__btn"),r==="all"){n.dessertList.innerHTML="",g();return}n.dessertList.innerHTML="",v(r)};b();g();n.dessertCategory.addEventListener("click",L);const $=async t=>{const e="https://deserts-store.b.goit.study/api",{data:r}=await u.get(`${e}/desserts?type=popular`,{params:{page:t,limit:3}});return r},o={bestsellersList:document.querySelector(".bestsellers-list"),loaderBestsellers:document.querySelector(".bestsellers-loader"),leftBtn:document.querySelector(".page-left-btn"),rightBtn:document.querySelector(".page-right-btn")};let d=1,y=0,w=3;async function p(t){o.loaderBestsellers.style.display="block",o.bestsellersList.innerHTML="";try{const{desserts:e,totalItems:r}=await $(d);y=r,B(e)}catch(e){console.log(e)}finally{o.loaderBestsellers.style.display="none"}}function B(t){const e=t.map(({image:r,category:l,description:s,name:i,price:a,_id:c})=>`<li class="bestsellers-list-item">
    <img class="bestsellers-image" src="${r}"/>
    <p class="bestsellers-category">${l.name}</p>
    <h2 class="bestsellers-name">${i}</h2>
    <p class="bestsellers-description">${s}</p>
    <div class="bestsellers-wrapper">
        <p class="bestsellers-price">${a} грн</p>
        <button class="bestsellers-modal-btn" type="button" data-id="${c}">
        <svg class="bestsellers-button-cvg" width="13" height="13" aria-hidden="true"><use href="/img/sprite.svg#icon-arrow_outward"></use></svg>
        </button>
    </div>
    </li>`);o.bestsellersList.innerHTML=e}function M(t){d<=1||(d-=1,p())}function C(t){const e=Math.ceil(y/w);d>=e||(d+=1,p())}document.addEventListener("DOMContentLoaded",p);o.leftBtn.addEventListener("click",M);o.rightBtn.addEventListener("click",C);
//# sourceMappingURL=index.js.map
