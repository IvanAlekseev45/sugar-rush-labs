import{a as n}from"./assets/vendor-B1ZHW564.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const c={dessertList:document.querySelector(".dessert-list"),dessertCategory:document.querySelector(".dessert-category")},u=async()=>{const s="https://deserts-store.b.goit.study/api",{data:t}=await n.get(`${s}/categories`);return t},p=async()=>{try{const s=await u(),t=`
    <li class="dessert-category__item">
        <button class="dessert-category__btn active__btn" type="button" data-id="all">Всі десерти</button>
    </li>
  `,i=s.map(({_id:o,name:e})=>`
        <li class="dessert-category__item">
            <button class="dessert-category__btn" type="button" data-id="${o}">${e}</button>
        </li>
      `).join("");c.dessertCategory.insertAdjacentHTML("beforeend",t+i)}catch(s){console.log(s)}},g=async()=>{const s="https://deserts-store.b.goit.study/api",{data:t}=await n.get(`${s}/desserts`,{params:{page:1,limit:8}});return t},d=async()=>{try{const{desserts:s}=await g(),t=s.map(({id:i,name:o,description:e,price:r,category:a,image:l})=>`
        <li class="dessert-list__item">
            <div class="dessert-list__wrapper">
                <img class='dessert-list__image' src="${l}" alt="${o}" />
                <p class="dessert-list__category">${a.name}</p>
            
                <p class="dessert-list__title">${o}</p>
                <p class="dessert-list__description">${e}</p>    
            </div>
            <div class="dessert-list__wrapper__bottom">
                <p class="dessert-list__price">${r} грн</p>
                <button class="dessert-list__btn" type="button" data-id="${i}">
                    <svg width="17" height="17" class="dessert-list__icon" aria-hidden="true" >
                        <use href='/img/sprite.svg#icon-arrow_outward'></use>
                    </svg>
                </button>
            </div>
        </li>
      `).join("");c.dessertList.insertAdjacentHTML("beforeend",t)}catch(s){console.log(s)}},_=s=>{const t=s.target.closest(".dessert-category__btn");if(!t)return;const i=t.dataset.id;if(console.log(i),document.querySelectorAll(".dessert-category__btn").forEach(o=>o.classList.remove("active__btn")),t.classList.add("active__btn"),i==="all"){c.dessertList.innerHTML="",d();return}};p();d();c.dessertCategory.addEventListener("click",_);
//# sourceMappingURL=index.js.map
