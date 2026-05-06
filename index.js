import{a as l}from"./assets/vendor-B1ZHW564.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=c(e);fetch(e.href,s)}})();const a={dessertList:document.querySelector(".dessert-list")},d=async()=>{const r="https://deserts-store.b.goit.study/api",{data:t}=await l.get(`${r}/desserts`,{params:{page:1,limit:8}});return t},u=async()=>{try{const{desserts:r}=await d(),t=r.map(({id:c,name:i,description:e,price:s,category:o,image:n})=>`
        <li class="dessert-list__item">
            <div class="dessert-list__wrapper">
                <img class='dessert-list__image' src="${n}" alt="${i}" />
                <p class="dessert-list__category">${o.name}</p>
            
                <p class="dessert-list__title">${i}</p>
                <p class="dessert-list__description">${e}</p>    
            </div>
            <div class="dessert-list__wrapper__bottom">
                <p class="dessert-list__price">${s} грн</p>
                <button class="dessert-list__btn" type="button">
                    <svg width="24" height="24" class="dessert-list__icon" aria-hidden="true" >
                        <use href='/img/sprite.svg#icon-arrow_outward'></use>
                    </svg>
                </button>
            </div>
        </li>
      `).join("");a.dessertList.insertAdjacentHTML("beforeend",t)}catch(r){console.log(r)}};u();
//# sourceMappingURL=index.js.map
