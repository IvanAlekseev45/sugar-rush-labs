import{a as g,i as l,A as N,S as z,N as F,P as K,K as V}from"./assets/vendor-YU0yCr7_.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const L={body:document.body},G=async s=>{const e="https://deserts-store.b.goit.study/api",{data:t}=await g.get(`${e}/desserts/${s}`);return t},U=async s=>{const e=s.target.closest(".js-dessert-modal-open");if(!e)return;const t=e.dataset.id;if(!t){l.error({message:"Не вдалося визначити десерт. Спробуйте ще раз.",position:"topRight"});return}Y();try{const r=await G(t);ee(r)}catch(r){b(),l.error({message:"Не вдалося завантажити інформацію про десерт. Спробуйте ще раз.",position:"topRight"}),console.log(r)}},J=s=>{const e=Z();s.target===e&&b()},D=s=>{s.key==="Escape"&&b()},Q=()=>{b()},W=s=>{const e=s.currentTarget.dataset.dessertId;b();const t=new CustomEvent("open-order-modal",{detail:{dessertId:e}});document.dispatchEvent(t)};let c=null;const X=()=>{document.addEventListener("click",U)},Y=()=>{c=document.createElement("div"),c.classList.add("dessert-modal-backdrop"),c.innerHTML=`
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
          <use href="/sugar-rush-labs/img/sprite.svg#icon-close"></use>
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
  `,L.body.append(c),L.body.classList.add("no-scroll"),c.addEventListener("click",J),document.addEventListener("keydown",D),c.querySelector(".dessert-modal__close-btn").addEventListener("click",Q)},b=()=>{c&&(c.remove(),c=null,L.body.classList.remove("no-scroll"),document.removeEventListener("keydown",D))},Z=()=>c,ee=s=>{if(!c)return;const e=c.querySelector(".dessert-modal__content"),{_id:t,name:r,price:o,rate:n,description:i,composition:u,image:B}=s,v=u||"";e.innerHTML=`
    <img
      class="dessert-modal__image"
      src="${B}"
      alt="${r}"
    />

    <div class="dessert-modal__info">

      <h2 class="dessert-modal__title">${r}</h2>

      <p class="dessert-modal__price">${o} грн</p>

      <div class="dessert-modal__rating">
        ${te(n)}
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
  `,e.querySelector(".dessert-modal__order-btn").addEventListener("click",W)},se=s=>{const e=Number(s);if(Number.isNaN(e))return 0;const t=Math.round(e*2)/2;return Math.min(Math.max(t,0),5)},te=s=>{const e=se(s),t=Math.floor(e),r=e%1!==0;return`
    <div
      class="rating medium star-svg color-default direction-ltr value-${t} ${r?"half":""}"
      aria-label="Рейтинг ${e} з 5"
    >
      <div class="star-container">
        ${Array.from({length:5},()=>`
            <div class="star">
              <svg class="star-empty">
                <use href="/sugar-rush-labs/img/star-rating.icons.svg#star-empty"></use>
              </svg>
              <svg class="star-half">
                <use href="/sugar-rush-labs/img/star-rating.icons.svg#star-half"></use>
              </svg>
              <svg class="star-filled">
                <use href="/sugar-rush-labs/img/star-rating.icons.svg#star-filled"></use>
              </svg>
            </div>
          `).join("")}
      </div>
    </div>
  `};X();const a={dessertList:document.querySelector(".dessert-list"),dessertCategory:document.querySelector(".dessert-category"),dessertLoadMoreBtn:document.querySelector(".dessert-load-more-btn"),dropdown:document.querySelector(".category-dropdown"),dropdownBtn:document.querySelector(".category-dropdown__btn"),dropdownText:document.querySelector(".category-dropdown__text"),dessertLoader:document.querySelector(".dessert-loader")},re=async()=>{const s="https://deserts-store.b.goit.study/api",{data:e}=await g.get(`${s}/categories`);return e},oe=async()=>{try{const s=await re(),e=`
    <li class="dessert-category__item">
        <button class="dessert-category__btn active__btn" type="button" data-id="all">Всі десерти</button>
    </li>
  `,t=s.map(({_id:r,name:o})=>`
        <li class="dessert-category__item">
            <button class="dessert-category__btn" type="button" data-id="${r}">${o}</button>
        </li>
      `).join("");a.dessertCategory.insertAdjacentHTML("beforeend",e+t)}catch{l.error({message:"Виникла помилка при завантаженні категорій, спробуйте пізніше.",position:"topRight"})}},k=async(s=1,e="all")=>{const t=e==="all"?"https://deserts-store.b.goit.study/api/desserts":`https://deserts-store.b.goit.study/api/desserts?category=${e}`,{data:r}=await g.get(`${t}`,{params:{page:s,limit:8}});return r},x="/sugar-rush-labs/assets/sprite-7MDemDlu.svg",E=s=>{const e=s.map(({_id:t,name:r,description:o,price:n,category:i,image:u})=>`
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

          <img class="dessert-list__image" src="${u}" alt="${r}" loading="eager" fetchpriority="high" />
          <p class="dessert-list__category">${i.name}</p>

          <p class="dessert-list__title">${r}</p>
          <p class="dessert-list__description">${o}</p>
        </div>
        <div class="dessert-list__wrapper__bottom">
          <p class="dessert-list__price">${n} грн</p>
          <button class="dessert-list__btn js-dessert-modal-open" type="button" data-id="${t}">
            <svg width="24" height="24" class="dessert-list__icon" aria-hidden="true">
              <use href="${x}#icon-arrow_outward"></use>
            </svg>
          </button>
        </div>
      </li>
      `).join("");a.dessertList.insertAdjacentHTML("beforeend",e),a.dessertList.querySelectorAll(".dessert-list__image").forEach(t=>{const r=t.previousElementSibling;if(t.complete){r.style.display="none",t.classList.add("img__is-loaded");return}t.addEventListener("load",()=>{r.style.display="none",t.classList.add("img__is-loaded")}),t.addEventListener("error",()=>{r.style.display="none",t.classList.add("img__is-loaded")})})},ae=()=>{a.dessertLoader.style.display="block"},ne=()=>{a.dessertLoader.style.display="none"},m={showLoader:ae,hideLoader:ne},le=async(s=1,e="all")=>{m.showLoader();try{const{desserts:t}=await k(s,e);E(t),m.hideLoader(),a.dessertLoadMoreBtn.classList.remove("dessert-button-hidden")}catch{l.error({message:"Виникла помилка при завантаженні десертів, спробуйте пізніше.",position:"topRight"})}};let p=1,w="all";const O=s=>{const e=Math.ceil(s/8);p<e?(a.dessertLoadMoreBtn.classList.remove("dessert-button-hidden"),a.dessertLoadMoreBtn.disabled=!1):(a.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),a.dessertLoadMoreBtn.disabled=!0)},de=async s=>{const e=s.target.closest(".dessert-category__btn");if(e){p=1,w=e.dataset.id,document.querySelectorAll(".dessert-category__btn").forEach(t=>t.classList.remove("active__btn")),e.classList.add("active__btn"),a.dessertList.innerHTML="",m.showLoader();try{const t=await k(p,w);E(t.desserts),O(t.totalItems)}catch{l.error({message:"Виникла помилка при зміні категорії, спробуйте пізніше.",position:"topRight"})}finally{m.hideLoader()}}},ie=async()=>{a.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),a.dessertLoadMoreBtn.disabled=!0,m.showLoader(),p+=1;try{const{desserts:s,totalItems:e}=await k(p,w);E(s),O(e)}catch{l.error({message:"Виникла помилка при завантаженні десертів, спробуйте пізніше.",position:"topRight"})}finally{m.hideLoader()}},P={handleCategoryFilter:de,handleLoadMoreDesserts:ie};a.dropdownBtn.addEventListener("click",()=>{a.dropdown.classList.toggle("is-open")});a.dropdown.addEventListener("click",s=>{const e=s.target.closest(".dessert-category__btn");e&&(a.dropdownText.textContent=e.textContent,a.dropdown.classList.remove("is-open"))});document.addEventListener("click",s=>{a.dropdown.contains(s.target)||a.dropdown.classList.remove("is-open")});oe();le();a.dessertCategory.addEventListener("click",P.handleCategoryFilter);a.dessertLoadMoreBtn.addEventListener("click",P.handleLoadMoreDesserts);new N(".accordion-container",{showMultiple:!1,duration:300});const j={bestsellersList:document.querySelector(".bestsellers-list"),loaderBestsellers:document.querySelector(".bestsellers-loader"),leftBtn:document.querySelector(".page-left-btn"),rightBtn:document.querySelector(".page-right-btn")},ce=async()=>{try{const s="https://deserts-store.b.goit.study/api",{data:e}=await g.get(`${s}/desserts?type=popular&limit=18`);return e}catch{l.error({message:"Йой, здається, розробники щось нахімічили з ТОП-десертами, спробуйте пізніше.",position:"topRight",messageSize:16,messageLineHeight:26,closeOnClick:!0,progressBar:!1})}};async function ue(){const s=j.loaderBestsellers;s.style.display="block";try{const{desserts:e}=await ce();me(e)}catch{l.error({message:"Йой, здається, розробники щось нахімічили з ТОП-десертами, спробуйте пізніше.",position:"topRight",messageSize:16,messageLineHeight:26,closeOnClick:!0,progressBar:!1})}finally{s.style.display="none"}}document.addEventListener("DOMContentLoaded",ue);let y=null;function R(){const s=document.querySelectorAll(".bestsellers-list-item");s.forEach(e=>{e.style.height="auto",e.style.display="flex",e.style.flexDirection="column",e.style.justifyContent="space-between"}),requestAnimationFrame(()=>{let e=0;s.forEach(t=>{t.offsetHeight>e&&(e=t.offsetHeight)}),s.forEach(t=>t.style.height=e+"px")})}function me(s){const e=s.map(({image:t,category:r,description:o,name:n,price:i,_id:u})=>`<li class="bestsellers-list-item swiper-slide">
            <div class="bestsellers-top">
                <img class="bestsellers-image" src="${t}" alt="${n}"/>
                <p class="bestsellers-category">${r.name}</p>
                <h3 class="bestsellers-name">${n}</h3>
                <p class="bestsellers-description">${o}</p>
            </div>
            <div class="bestsellers-wrapper">
                <p class="bestsellers-price">${i} грн</p>
                <button class="bestsellers-modal-btn js-dessert-modal-open" type="button" aria-label="Подивитись детальну інформацію" data-id="${u}">
                <svg width="24" height="24" aria-hidden="true">
                    <use href="${x}#icon-arrow_outward"></use>
                </svg>
                </button>
            </div>
        </li>`).join("");j.bestsellersList.innerHTML=e,y&&(y.destroy(!0,!0),y=null),y=new z(".swiper-bestsellers",{modules:[F,K,V],keyboard:{enabled:!0,onlyInViewport:!0},slidesPerView:1,slidesPerGroup:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:16},1440:{slidesPerView:3,slidesPerGroup:3,spaceBetween:24}},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0},navigation:{prevEl:".page-left-btn",nextEl:".page-right-btn"},on:{init(){R()},resize(){R()}}})}const $={body:document.body},pe="https://deserts-store.b.goit.study/api",ge=async s=>{const{data:e}=await g.post(`${pe}/orders`,s);return e},H=s=>{s.target.classList.contains("order-modal-backdrop")&&h()},I=s=>{s.key==="Escape"&&h()},A=()=>{h()},T=async s=>{var _,S,C,q;s.preventDefault();const e=s.currentTarget,t=ye();if(!t){l.error({message:"Не вдалося визначити десерт для замовлення",position:"topRight",color:"#FA5053",messageColor:"#ffffff",class:"custom-toast"});return}const r=new FormData(e),o=r.get("name").trim(),i=r.get("phone").trim().replace(/\D/g,""),u=r.get("comment").trim();if(!o){l.error({message:"Введіть ім’я",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast"});return}if(o.length<2){l.error({message:"Ім’я має містити щонайменше 2 символи",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast"});return}if(!/^380[0-9]{9}$/.test(i)){l.error({message:"Введіть телефон у форматі 380961234568",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast"});return}if(!u){l.error({message:"Введіть коментар",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast"});return}if(u.length<5){l.error({message:"Коментар має містити щонайменше 5 символів",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast"});return}const v={name:o,phone:i,dessertId:t,comment:u};try{await ge(v),l.success({message:"Замовлення успішно відправлено!",position:"topRight",color:"#24922E",messageColor:"#ffffff",class:"custom-toast"}),e.reset(),h()}catch(f){console.log("Error in order submit:",f),console.log("Server response:",(_=f.response)==null?void 0:_.data),console.log("Status:",(S=f.response)==null?void 0:S.status),l.error({message:((q=(C=f.response)==null?void 0:C.data)==null?void 0:q.message)||"Не вдалося надіслати заявку. Спробуйте ще раз.",position:"topRight",color:"#FA5053",messageColor:"#ffffff",class:"custom-toast"})}};let d=null,M=null;const be=()=>{document.addEventListener("open-order-modal",s=>{const{dessertId:e}=s.detail||{};e&&fe(e)})},fe=s=>{M=s,d=document.createElement("div"),d.classList.add("order-modal-backdrop"),d.innerHTML=`
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
          <use href="/sugar-rush-labs/img/sprite.svg#icon-close"></use>
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
  `,$.body.append(d),$.body.classList.add("no-scroll"),d.addEventListener("click",H),document.addEventListener("keydown",I),d.querySelector(".js-order-modal-close").addEventListener("click",A),d.querySelector(".js-order-form").addEventListener("submit",T)},h=()=>{if(!d)return;const s=d.querySelector(".js-order-modal-close");s==null||s.removeEventListener("click",A);const e=d.querySelector(".js-order-form");e==null||e.removeEventListener("submit",T),d.removeEventListener("click",H),document.removeEventListener("keydown",I),d.remove(),d=null,M=null,$.body.classList.remove("no-scroll")},ye=()=>M;be();
//# sourceMappingURL=index.js.map
