import{a as g,i as n,A as F,S as K,N as U,P as V,K as G}from"./assets/vendor-YU0yCr7_.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(r){if(r.ep)return;r.ep=!0;const l=t(r);fetch(r.href,l)}})();const w={body:document.body},R="/sugar-rush-labs/assets/sprite-7MDemDlu.svg",L="data:image/svg+xml,%3csvg%20style='position:%20absolute;%20width:%200;%20height:%200;%20overflow:%20hidden;'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3csymbol%20id='star-empty'%20viewBox='0%200%2034%2032'%3e%3ctitle%3estar-empty%3c/title%3e%3cpath%20class='path-star-empty'%20d='M33.412%2012.395l-11.842-1.021-4.628-10.904-4.628%2010.92-11.842%201.005%208.993%207.791-2.701%2011.579%2010.179-6.144%2010.179%206.144-2.685-11.579%208.976-7.791zM16.941%2022.541l-6.193%203.739%201.647-7.049-5.468-4.744%207.214-0.626%202.8-6.638%202.816%206.654%207.214%200.626-5.468%204.744%201.647%207.049-6.209-3.755z'/%3e%3c/symbol%3e%3csymbol%20id='star-half'%20viewBox='0%200%2034%2032'%3e%3ctitle%3estar-half%3c/title%3e%3cpath%20class='path-star-half'%20d='M%2033.412,12.395%2021.57,11.374%2016.942,0.47%2012.314,11.39%200.472,12.395%209.465,20.186%206.764,31.765%2016.943,25.621%2027.122,31.765%2024.437,20.186%2033.413,12.395%20Z%20M%2016.941,22.541%20c%200,0%20-0.297971,-14.6455833%200,-15.318%20l%202.816,6.654%207.214,0.626%20-5.468,4.744%201.647,7.049%20z'/%3e%3c/symbol%3e%3csymbol%20id='star-filled'%20viewBox='0%200%2034%2032'%3e%3ctitle%3estar-filled%3c/title%3e%3cpath%20class='path-star-filled'%20d='M16.941%2025.621l10.179%206.144-2.701-11.579%208.993-7.791-11.842-1.005-4.628-10.92-4.628%2010.92-11.842%201.005%208.993%207.791-2.701%2011.579z'/%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e",Z=async s=>{const e="https://deserts-store.b.goit.study/api",{data:t}=await g.get(`${e}/desserts/${s}`);return t},J=async s=>{const e=s.target.closest(".js-dessert-modal-open");if(!e)return;const t=e.dataset.id;if(!t){n.error({message:"Не вдалося визначити десерт. Спробуйте ще раз.",position:"topRight"});return}ee();try{const o=await Z(t);te(o)}catch(o){b(),n.error({message:"Не вдалося завантажити інформацію про десерт. Спробуйте ще раз.",position:"topRight"}),console.log(o)}},Q=s=>{const e=se();s.target===e&&b()},O=s=>{s.key==="Escape"&&b()},W=()=>{b()},X=s=>{const e=s.currentTarget.dataset.dessertId;b();const t=new CustomEvent("open-order-modal",{detail:{dessertId:e}});document.dispatchEvent(t)};let c=null;const Y=()=>{document.addEventListener("click",J)},ee=()=>{c=document.createElement("div"),c.classList.add("dessert-modal-backdrop"),c.innerHTML=`
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
          <use href="${R}#icon-close"></use>
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
  `,w.body.append(c),w.body.classList.add("no-scroll"),c.addEventListener("click",Q),document.addEventListener("keydown",O),c.querySelector(".dessert-modal__close-btn").addEventListener("click",W)},b=()=>{c&&(c.remove(),c=null,w.body.classList.remove("no-scroll"),document.removeEventListener("keydown",O))},se=()=>c,te=s=>{if(!c)return;const e=c.querySelector(".dessert-modal__content"),{_id:t,name:o,price:r,rate:l,description:i,composition:u,image:S}=s,v=u||"";e.innerHTML=`
    <img
      class="dessert-modal__image"
      src="${S}"
      alt="${o}"
    />

    <div class="dessert-modal__info">

      <h2 class="dessert-modal__title">${o}</h2>

      <p class="dessert-modal__price">${r} грн</p>

      <div class="dessert-modal__rating">
        ${re(l)}
      </div>

      <p class="dessert-modal__description">
        ${i}
      </p>

      <p class="dessert-modal__ingredients">
        <b>Склад:</b> ${v}
      </p>

      <button
        class="dessert-modal__order-btn"
        type="button"
        data-dessert-id="${t}"
      >
        Перейти до замовлення
      </button>
    </div>
  `,e.querySelector(".dessert-modal__order-btn").addEventListener("click",X)},oe=s=>{const e=Number(s);if(Number.isNaN(e))return 0;const t=Math.round(e*2)/2;return Math.min(Math.max(t,0),5)},re=s=>{const e=oe(s),t=Math.floor(e),o=e%1!==0;return`
    <div
      class="rating medium star-svg color-default direction-ltr value-${t} ${o?"half":""}"
      aria-label="Рейтинг ${e} з 5"
    >
      <div class="star-container">
        ${Array.from({length:5},()=>`
            <div class="star">
              <svg class="star-empty">
               <use href="${L}#star-empty"></use>
              </svg>
              <svg class="star-half">
                 <use href="${L}#star-half"></use>
              </svg>
              <svg class="star-filled">
                <use href="${L}#star-filled"></use>
              </svg>
            </div>
          `).join("")}
      </div>
    </div>
  `};Y();const a={dessertList:document.querySelector(".dessert-list"),dessertCategory:document.querySelector(".dessert-category"),dessertLoadMoreBtn:document.querySelector(".dessert-load-more-btn"),dropdown:document.querySelector(".category-dropdown"),dropdownBtn:document.querySelector(".category-dropdown__btn"),dropdownText:document.querySelector(".category-dropdown__text"),dessertLoader:document.querySelector(".dessert-loader")},ae=async()=>{const s="https://deserts-store.b.goit.study/api",{data:e}=await g.get(`${s}/categories`);return e},le=async()=>{try{const s=await ae(),e=`
    <li class="dessert-category__item">
        <button class="dessert-category__btn active__btn" type="button" data-id="all">Всі десерти</button>
    </li>
  `,t=s.map(({_id:o,name:r})=>`
        <li class="dessert-category__item">
            <button class="dessert-category__btn" type="button" data-id="${o}">${r}</button>
        </li>
      `).join("");a.dessertCategory.insertAdjacentHTML("beforeend",e+t)}catch{n.error({message:"Виникла помилка при завантаженні категорій, спробуйте пізніше.",position:"topRight"})}},k=async(s=1,e="all")=>{const t=e==="all"?"https://deserts-store.b.goit.study/api/desserts":`https://deserts-store.b.goit.study/api/desserts?category=${e}`,{data:o}=await g.get(`${t}`,{params:{page:s,limit:8}});return o},P="/sugar-rush-labs/assets/sprite-7MDemDlu.svg",E=s=>{const e=s.map(({_id:t,name:o,description:r,price:l,category:i,image:u})=>`
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

          <img class="dessert-list__image" src="${u}" alt="${o}" loading="eager" fetchpriority="high" />
          <p class="dessert-list__category">${i.name}</p>

          <p class="dessert-list__title">${o}</p>
          <p class="dessert-list__description">${r}</p>
        </div>
        <div class="dessert-list__wrapper__bottom">
          <p class="dessert-list__price">${l} грн</p>
          <button class="dessert-list__btn js-dessert-modal-open" type="button" data-id="${t}">
            <svg width="24" height="24" class="dessert-list__icon" aria-hidden="true">
              <use href="${P}#icon-arrow_outward"></use>
            </svg>
          </button>
        </div>
      </li>
      `).join("");a.dessertList.insertAdjacentHTML("beforeend",e),a.dessertList.querySelectorAll(".dessert-list__image").forEach(t=>{const o=t.previousElementSibling;if(t.complete){o.style.display="none",t.classList.add("img__is-loaded");return}t.addEventListener("load",()=>{o.style.display="none",t.classList.add("img__is-loaded")}),t.addEventListener("error",()=>{o.style.display="none",t.classList.add("img__is-loaded")})})},ne=()=>{a.dessertLoader.style.display="block"},de=()=>{a.dessertLoader.style.display="none"},m={showLoader:ne,hideLoader:de},ie=async(s=1,e="all")=>{m.showLoader();try{const{desserts:t}=await k(s,e);E(t),m.hideLoader(),a.dessertLoadMoreBtn.classList.remove("dessert-button-hidden")}catch{n.error({message:"Виникла помилка при завантаженні десертів, спробуйте пізніше.",position:"topRight"})}};let p=1,M="all";const j=s=>{const e=Math.ceil(s/8);p<e?(a.dessertLoadMoreBtn.classList.remove("dessert-button-hidden"),a.dessertLoadMoreBtn.disabled=!1):(a.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),a.dessertLoadMoreBtn.disabled=!0)},ce=async s=>{const e=s.target.closest(".dessert-category__btn");if(e){p=1,M=e.dataset.id,document.querySelectorAll(".dessert-category__btn").forEach(t=>t.classList.remove("active__btn")),e.classList.add("active__btn"),a.dessertList.innerHTML="",m.showLoader();try{const t=await k(p,M);E(t.desserts),j(t.totalItems)}catch{n.error({message:"Виникла помилка при зміні категорії, спробуйте пізніше.",position:"topRight"})}finally{m.hideLoader()}}},ue=async()=>{a.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),a.dessertLoadMoreBtn.disabled=!0,m.showLoader(),p+=1;try{const{desserts:s,totalItems:e}=await k(p,M);E(s),j(e)}catch{n.error({message:"Виникла помилка при завантаженні десертів, спробуйте пізніше.",position:"topRight"})}finally{m.hideLoader()}},I={handleCategoryFilter:ce,handleLoadMoreDesserts:ue};a.dropdownBtn.addEventListener("click",()=>{a.dropdown.classList.toggle("is-open")});a.dropdown.addEventListener("click",s=>{const e=s.target.closest(".dessert-category__btn");e&&(a.dropdownText.textContent=e.textContent,a.dropdown.classList.remove("is-open"))});document.addEventListener("click",s=>{a.dropdown.contains(s.target)||a.dropdown.classList.remove("is-open")});le();ie();a.dessertCategory.addEventListener("click",I.handleCategoryFilter);a.dessertLoadMoreBtn.addEventListener("click",I.handleLoadMoreDesserts);new F(".accordion-container",{showMultiple:!1,duration:300});const H={bestsellersList:document.querySelector(".bestsellers-list"),loaderBestsellers:document.querySelector(".bestsellers-loader"),leftBtn:document.querySelector(".page-left-btn"),rightBtn:document.querySelector(".page-right-btn")},me=async()=>{try{const s="https://deserts-store.b.goit.study/api",{data:e}=await g.get(`${s}/desserts?type=popular&limit=18`);return e}catch{n.error({message:"Йой, здається, розробники щось нахімічили з ТОП-десертами, спробуйте пізніше.",position:"topRight",messageSize:16,messageLineHeight:26,closeOnClick:!0,progressBar:!1})}};async function pe(){const s=H.loaderBestsellers;s.style.display="block";try{const{desserts:e}=await me();ge(e)}catch{n.error({message:"Йой, здається, розробники щось нахімічили з ТОП-десертами, спробуйте пізніше.",position:"topRight",messageSize:16,messageLineHeight:26,closeOnClick:!0,progressBar:!1})}finally{s.style.display="none"}}document.addEventListener("DOMContentLoaded",pe);let y=null;function D(){const s=document.querySelectorAll(".bestsellers-list-item");s.forEach(e=>{e.style.height="auto",e.style.display="flex",e.style.flexDirection="column",e.style.justifyContent="space-between"}),requestAnimationFrame(()=>{let e=0;s.forEach(t=>{t.offsetHeight>e&&(e=t.offsetHeight)}),s.forEach(t=>t.style.height=e+"px")})}function ge(s){const e=s.map(({image:t,category:o,description:r,name:l,price:i,_id:u})=>`<li class="bestsellers-list-item swiper-slide">
            <div class="bestsellers-top">
                <img class="bestsellers-image" src="${t}" alt="${l}"/>
                <p class="bestsellers-category">${o.name}</p>
                <h3 class="bestsellers-name">${l}</h3>
                <p class="bestsellers-description">${r}</p>
            </div>
            <div class="bestsellers-wrapper">
                <p class="bestsellers-price">${i} грн</p>
                <button class="bestsellers-modal-btn js-dessert-modal-open" type="button" aria-label="Подивитись детальну інформацію" data-id="${u}">
                <svg width="24" height="24" aria-hidden="true">
                    <use href="${P}#icon-arrow_outward"></use>
                </svg>
                </button>
            </div>
        </li>`).join("");H.bestsellersList.innerHTML=e,y&&(y.destroy(!0,!0),y=null),y=new K(".swiper-bestsellers",{modules:[U,V,G],keyboard:{enabled:!0,onlyInViewport:!0},slidesPerView:1,slidesPerGroup:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:16},1440:{slidesPerView:3,slidesPerGroup:3,spaceBetween:24}},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0},navigation:{prevEl:".page-left-btn",nextEl:".page-right-btn"},on:{init(){D()},resize(){D()}}})}const $={body:document.body},be="https://deserts-store.b.goit.study/api",fe=async s=>{const{data:e}=await g.post(`${be}/orders`,s);return e},A=s=>{s.target.classList.contains("order-modal-backdrop")&&h()},T=s=>{s.key==="Escape"&&h()},z=()=>{h()},N=async s=>{var _,C,x,q;s.preventDefault();const e=s.currentTarget,t=ve();if(!t){n.error({message:"Не вдалося визначити десерт для замовлення",position:"topRight",color:"#FA5053",messageColor:"#ffffff",class:"custom-toast"});return}const o=new FormData(e),r=o.get("name").trim(),i=o.get("phone").trim().replace(/\D/g,""),u=o.get("comment").trim();if(!r){n.error({message:"Введіть ім’я",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast"});return}if(r.length<2){n.error({message:"Ім’я має містити щонайменше 2 символи",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast"});return}if(!/^380[0-9]{9}$/.test(i)){n.error({message:"Введіть телефон у форматі 380961234568",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast"});return}if(!u){n.error({message:"Введіть коментар",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast"});return}if(u.length<5){n.error({message:"Коментар має містити щонайменше 5 символів",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast"});return}const v={name:r,phone:i,dessertId:t,comment:u};try{await fe(v),n.success({message:"Замовлення успішно відправлено!",position:"topRight",color:"#24922E",messageColor:"#ffffff",class:"custom-toast"}),e.reset(),h()}catch(f){console.log("Error in order submit:",f),console.log("Server response:",(_=f.response)==null?void 0:_.data),console.log("Status:",(C=f.response)==null?void 0:C.status),n.error({message:((q=(x=f.response)==null?void 0:x.data)==null?void 0:q.message)||"Не вдалося надіслати заявку. Спробуйте ще раз.",position:"topRight",color:"#FA5053",messageColor:"#ffffff",class:"custom-toast"})}};let d=null,B=null;const ye=()=>{document.addEventListener("open-order-modal",s=>{const{dessertId:e}=s.detail||{};e&&he(e)})},he=s=>{B=s,d=document.createElement("div"),d.classList.add("order-modal-backdrop"),d.innerHTML=`
    <div
      class="order-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
    >
      <button
        class="order-modal__close-btn js-order-modal-close"
        type="button"
        aria-label="Close modal"
      >
        <svg
          class="order-modal__close-icon"
          width="24"
          height="24"
          aria-hidden="true"
        >
          <use href="${R}#icon-close"></use>
        </svg>
      </button>

      <h2 class="order-modal__title" id="order-modal-title">
        Оформлення замовлення
      </h2>

      <form class="order-form js-order-form" novalidate>
      <label class="order-form__label">
        <span class="order-form__label-text">Ім'я*</span>
        <input
          class="order-form__input"
          type="text"
          name="name"
            placeholder="Вікторія"
          />
        </label>

        <label class="order-form__label">
          <span class="order-form__label-text">Телефон*</span>
          <input
            class="order-form__input"
            type="tel"
            name="phone"
            placeholder="38 0__ ______"
          />
        </label>

        <label class="order-form__label">
          <span class="order-form__label-text">Коментар*</span>
          <textarea
            class="order-form__textarea"
            name="comment"
            placeholder="Ваш коментар"
          ></textarea>
        </label>

        <button class="order-form__submit-btn" type="submit">
          Надіслати заявку
        </button>
      </form>
    </div>
  `,$.body.append(d),$.body.classList.add("no-scroll"),d.addEventListener("click",A),document.addEventListener("keydown",T),d.querySelector(".js-order-modal-close").addEventListener("click",z),d.querySelector(".js-order-form").addEventListener("submit",N)},h=()=>{if(!d)return;const s=d.querySelector(".js-order-modal-close");s==null||s.removeEventListener("click",z);const e=d.querySelector(".js-order-form");e==null||e.removeEventListener("submit",N),d.removeEventListener("click",A),document.removeEventListener("keydown",T),d.remove(),d=null,B=null,$.body.classList.remove("no-scroll")},ve=()=>B;ye();
//# sourceMappingURL=index.js.map
