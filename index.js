import{a as u}from"./assets/vendor-B1ZHW564.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function l(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=l(s);fetch(s.href,r)}})();const c={dessertList:document.querySelector(".dessert-list"),dessertCategory:document.querySelector(".dessert-category")},b=async()=>{const t="https://deserts-store.b.goit.study/api",{data:e}=await u.get(`${t}/categories`);return e},m=async()=>{try{const t=await b(),e=`
    <li class="dessert-category__item">
        <button class="dessert-category__btn active__btn" type="button" data-id="all">Всі десерти</button>
    </li>
  `,l=t.map(({_id:o,name:s})=>`
        <li class="dessert-category__item">
            <button class="dessert-category__btn" type="button" data-id="${o}">${s}</button>
        </li>
      `).join("");c.dessertCategory.insertAdjacentHTML("beforeend",e+l)}catch(t){console.log(t)}},f=async()=>{const t="https://deserts-store.b.goit.study/api",{data:e}=await u.get(`${t}/desserts`,{params:{page:1,limit:8}});return e},g=async()=>{try{const{desserts:t}=await f(),e=t.map(({id:l,name:o,description:s,price:r,category:n,image:d})=>`
        <li class="dessert-list__item">
            <div class="dessert-list__wrapper">
                <img class='dessert-list__image' src="${d}" alt="${o}" />
                <p class="dessert-list__category">${n.name}</p>
            
                <p class="dessert-list__title">${o}</p>
                <p class="dessert-list__description">${s}</p>    
            </div>
            <div class="dessert-list__wrapper__bottom">
                <p class="dessert-list__price">${r} грн</p>
                <button class="dessert-list__btn" type="button" data-id="${l}">
                    <svg width="17" height="17" class="dessert-list__icon" aria-hidden="true" >
                        <use href='/img/sprite.svg#icon-arrow_outward'></use>
                    </svg>
                </button>
            </div>
        </li>
      `).join("");c.dessertList.insertAdjacentHTML("beforeend",e)}catch(t){console.log(t)}},_=t=>{const e=t.target.closest(".dessert-category__btn");if(!e)return;const l=e.dataset.id;if(console.log(l),document.querySelectorAll(".dessert-category__btn").forEach(o=>o.classList.remove("active__btn")),e.classList.add("active__btn"),l==="all"){c.dessertList.innerHTML="",g();return}};m();g();c.dessertCategory.addEventListener("click",_);const h=async t=>{const e="https://deserts-store.b.goit.study/api",{data:l}=await u.get(`${e}/desserts?type=popular`,{params:{page:t,limit:3}});return l},i={bestsellersList:document.querySelector(".bestsellers-list"),loaderBestsellers:document.querySelector(".bestsellers-loader"),leftBtn:document.querySelector(".page-left-btn"),rightBtn:document.querySelector(".page-right-btn")};let a=1,y=0,v=3;async function p(t){i.loaderBestsellers.style.display="block",i.bestsellersList.innerHTML="";try{const{desserts:e,totalItems:l}=await h(a);y=l,L(e)}catch(e){console.log(e)}finally{i.loaderBestsellers.style.display="none"}}function L(t){const e=t.map(({image:l,category:o,description:s,name:r,price:n,_id:d})=>`<li class="bestsellers-list-item">
    <img class="bestsellers-image" src="${l}"/>
    <p class="bestsellers-category">${o.name}</p>
    <h2 class="bestsellers-name">${r}</h2>
    <p class="bestsellers-description">${s}</p>
    <div class="bestsellers-wrapper">
        <p class="bestsellers-price">${n} грн</p>
        <button class="bestsellers-modal-btn" type="button" data-id="${d}">
        <svg class="bestsellers-button-cvg" width="13" height="13" aria-hidden="true"><use href="/img/sprite.svg#icon-arrow_outward"></use></svg>
        </button>
    </div>
    </li>`);i.bestsellersList.innerHTML=e}function $(t){a<=1||(a-=1,p())}function w(t){const e=Math.ceil(y/v);a>=e||(a+=1,p())}document.addEventListener("DOMContentLoaded",p);i.leftBtn.addEventListener("click",$);i.rightBtn.addEventListener("click",w);
//# sourceMappingURL=index.js.map
