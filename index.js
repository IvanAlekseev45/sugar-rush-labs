import{a as g,i as c,A as I,S as T,N as H,P as F}from"./assets/vendor-DAWuplZu.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const w={body:document.body},N=async s=>{const e="https://deserts-store.b.goit.study/api",{data:t}=await g.get(`${e}/desserts/${s}`);return t},z=async s=>{const e=s.target.closest(".js-dessert-modal-open");if(!e)return;const t=e.dataset.id;if(!t){c.error({message:"Не вдалося визначити десерт. Спробуйте ще раз.",position:"topRight"});return}J();try{const r=await N(t);W(r)}catch(r){y(),c.error({message:"Не вдалося завантажити інформацію про десерт. Спробуйте ще раз.",position:"topRight"}),console.log(r)}},V=s=>{const e=Q();s.target===e&&y()},q=s=>{s.key==="Escape"&&y()},G=()=>{y()},K=s=>{const e=s.currentTarget.dataset.dessertId;y();const t=new CustomEvent("open-order-modal",{detail:{dessertId:e}});document.dispatchEvent(t)};let l=null;const U=()=>{document.addEventListener("click",z)},J=()=>{l=document.createElement("div"),l.classList.add("dessert-modal-backdrop"),l.innerHTML=`
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
          <use href="/img/sprite.svg#icon-close"></use>
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
  `,w.body.append(l),w.body.classList.add("no-scroll"),l.addEventListener("click",V),document.addEventListener("keydown",q),l.querySelector(".dessert-modal__close-btn").addEventListener("click",G)},y=()=>{l&&(l.remove(),l=null,w.body.classList.remove("no-scroll"),document.removeEventListener("keydown",q))},Q=()=>l,W=s=>{if(!l)return;const e=l.querySelector(".dessert-modal__content"),{_id:t,name:r,price:o,rate:n,description:i,composition:u,image:f}=s,b=u||"";e.innerHTML=`
    <img
      class="dessert-modal__image"
      src="${f}"
      alt="${r}"
    />

    <div class="dessert-modal__info">

      <h2 class="dessert-modal__title">${r}</h2>

      <p class="dessert-modal__price">${o} грн</p>

      <div class="dessert-modal__rating">
        ${Y(n)}
      </div>

      <p class="dessert-modal__description">
        ${i}
      </p>

      <p class="dessert-modal__ingredients">
        <b>Склад:</b> ${b}
      </p>

      <button
        class="dessert-modal__order-btn"
        type="button"
        data-dessert-id="${t}"
      >
        Перейти до замовлення
      </button>
    </div>
  `,e.querySelector(".dessert-modal__order-btn").addEventListener("click",K)},X=s=>{const e=Number(s);if(Number.isNaN(e))return 0;const t=Math.round(e*2)/2;return Math.min(Math.max(t,0),5)},Y=s=>{const e=X(s),t=Math.floor(e),r=e%1!==0;return`
    <div
      class="rating medium star-svg color-default direction-ltr value-${t} ${r?"half":""}"
      aria-label="Рейтинг ${e} з 5"
    >
      <div class="star-container">
        ${Array.from({length:5},()=>`
            <div class="star">
              <svg class="star-empty">
                <use href="/img/star-rating.icons.svg#star-empty"></use>
              </svg>
              <svg class="star-half">
                <use href="/img/star-rating.icons.svg#star-half"></use>
              </svg>
              <svg class="star-filled">
                <use href="/img/star-rating.icons.svg#star-filled"></use>
              </svg>
            </div>
          `).join("")}
      </div>
    </div>
  `};U();const a={dessertList:document.querySelector(".dessert-list"),dessertCategory:document.querySelector(".dessert-category"),dessertLoadMoreBtn:document.querySelector(".dessert-load-more-btn"),dropdown:document.querySelector(".category-dropdown"),dropdownBtn:document.querySelector(".category-dropdown__btn"),dropdownText:document.querySelector(".category-dropdown__text"),dessertLoader:document.querySelector(".dessert-loader")},Z=async()=>{const s="https://deserts-store.b.goit.study/api",{data:e}=await g.get(`${s}/categories`);return e},ee=async()=>{try{const s=await Z(),e=`
    <li class="dessert-category__item">
        <button class="dessert-category__btn active__btn" type="button" data-id="all">Всі десерти</button>
    </li>
  `,t=s.map(({_id:r,name:o})=>`
        <li class="dessert-category__item">
            <button class="dessert-category__btn" type="button" data-id="${r}">${o}</button>
        </li>
      `).join("");a.dessertCategory.insertAdjacentHTML("beforeend",e+t)}catch{c.error({message:"Виникла помилка при завантаженні категорій, спробуйте пізніше.",position:"topRight"})}},k=async(s=1,e="all")=>{const t=e==="all"?"https://deserts-store.b.goit.study/api/desserts":`https://deserts-store.b.goit.study/api/desserts?category=${e}`,{data:r}=await g.get(`${t}`,{params:{page:s,limit:8}});return r},C="/sugar-rush-labs/assets/sprite-7MDemDlu.svg",M=s=>{const e=s.map(({_id:t,name:r,description:o,price:n,category:i,image:u})=>`
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

          <img class="dessert-list__image" src="${u}" alt="${r}" />
          <p class="dessert-list__category">${i.name}</p>

          <p class="dessert-list__title">${r}</p>
          <p class="dessert-list__description">${o}</p>
        </div>
        <div class="dessert-list__wrapper__bottom">
          <p class="dessert-list__price">${n} грн</p>
          <button class="dessert-list__btn js-dessert-modal-open" type="button" data-id="${t}">
            <svg width="17" height="17" class="dessert-list__icon" aria-hidden="true">
              <use href="${C}#icon-arrow_outward"></use>
            </svg>
          </button>
        </div>
      </li>
      `).join("");a.dessertList.insertAdjacentHTML("beforeend",e),a.dessertList.querySelectorAll(".dessert-list__image").forEach(t=>{const r=t.previousElementSibling;if(t.complete){r.style.display="none",t.classList.add("img__is-loaded");return}t.addEventListener("load",()=>{r.style.display="none",t.classList.add("img__is-loaded")}),t.addEventListener("error",()=>{r.style.display="none",t.classList.add("img__is-loaded")})})},se=()=>{a.dessertLoader.style.display="block"},te=()=>{a.dessertLoader.style.display="none"},p={showLoader:se,hideLoader:te},re=async(s=1,e="all")=>{p.showLoader();try{const{desserts:t}=await k(s,e);M(t),p.hideLoader(),a.dessertLoadMoreBtn.classList.remove("dessert-button-hidden")}catch{c.error({message:"Виникла помилка при завантаженні десертів, спробуйте пізніше.",position:"topRight"})}};let m=1,E="all";const D=s=>{const e=Math.ceil(s/8);m<e?(a.dessertLoadMoreBtn.classList.remove("dessert-button-hidden"),a.dessertLoadMoreBtn.disabled=!1):(a.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),a.dessertLoadMoreBtn.disabled=!0)},oe=async s=>{const e=s.target.closest(".dessert-category__btn");if(e){m=1,E=e.dataset.id,document.querySelectorAll(".dessert-category__btn").forEach(t=>t.classList.remove("active__btn")),e.classList.add("active__btn"),a.dessertList.innerHTML="",p.showLoader();try{const t=await k(m,E);M(t.desserts),D(t.totalItems)}catch{c.error({message:"Виникла помилка при зміні категорії, спробуйте пізніше.",position:"topRight"})}finally{p.hideLoader()}}},ae=async()=>{a.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),a.dessertLoadMoreBtn.disabled=!0,p.showLoader(),m+=1;try{const{desserts:s,totalItems:e}=await k(m,E);M(s),D(e)}catch{c.error({message:"Виникла помилка при завантаженні десертів, спробуйте пізніше.",position:"topRight"})}finally{p.hideLoader()}},x={handleCategoryFilter:oe,handleLoadMoreDesserts:ae};a.dropdownBtn.addEventListener("click",()=>{a.dropdown.classList.toggle("is-open")});a.dropdown.addEventListener("click",s=>{const e=s.target.closest(".dessert-category__btn");e&&(a.dropdownText.textContent=e.textContent,a.dropdown.classList.remove("is-open"))});document.addEventListener("click",s=>{a.dropdown.contains(s.target)||a.dropdown.classList.remove("is-open")});ee();re();a.dessertCategory.addEventListener("click",x.handleCategoryFilter);a.dessertLoadMoreBtn.addEventListener("click",x.handleLoadMoreDesserts);new I(".accordion-container",{showMultiple:!1,duration:300});const R={bestsellersList:document.querySelector(".bestsellers-list"),loaderBestsellers:document.querySelector(".bestsellers-loader"),leftBtn:document.querySelector(".page-left-btn"),rightBtn:document.querySelector(".page-right-btn")},ne=async()=>{const s="https://deserts-store.b.goit.study/api",{data:e}=await g.get(`${s}/desserts?type=popular&limit=18`);return e};async function de(){const s=R.loaderBestsellers;s.style.display="block";try{const{desserts:e}=await ne();le(e)}catch(e){console.error(e)}finally{s.style.display="none"}}document.addEventListener("DOMContentLoaded",de);let h=null;function S(){const s=document.querySelectorAll(".bestsellers-list-item");s.forEach(e=>{e.style.height="auto",e.style.display="flex",e.style.flexDirection="column",e.style.justifyContent="space-between"}),requestAnimationFrame(()=>{let e=0;s.forEach(t=>{t.offsetHeight>e&&(e=t.offsetHeight)}),s.forEach(t=>t.style.height=e+"px")})}function le(s){const e=s.map(({image:t,category:r,description:o,name:n,price:i,_id:u})=>`<li class="bestsellers-list-item swiper-slide">
            <div class="bestsellers-top">
                <img class="bestsellers-image" src="${t}" alt="${n}"/>
                <p class="bestsellers-category">${r.name}</p>
                <h3 class="bestsellers-name">${n}</h3>
                <p class="bestsellers-description">${o}</p>
            </div>
            <div class="bestsellers-wrapper">
                <p class="bestsellers-price">${i} грн</p>
                <button class="bestsellers-modal-btn js-dessert-modal-open" type="button" data-id="${u}">
                <svg width="24" height="24" aria-hidden="true">
                    <use href="${C}#icon-arrow_outward"></use>
                </svg>
                </button>
            </div>
        </li>`).join("");R.bestsellersList.innerHTML=e,h&&(h.destroy(!0,!0),h=null),h=new T(".swiper-bestsellers",{modules:[H,F],slidesPerView:1,slidesPerGroup:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:16},1440:{slidesPerView:3,slidesPerGroup:3,spaceBetween:24}},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0},navigation:{prevEl:".page-left-btn",nextEl:".page-right-btn"},on:{init(){S()},resize(){S()}}})}const $={body:document.body},ie="https://deserts-store.b.goit.study/api",ce=async s=>{const{data:e}=await g.post(`${ie}/orders`,s);return e},j=s=>{s.target.classList.contains("order-modal-backdrop")&&_()},P=s=>{s.key==="Escape"&&_()},O=()=>{_()},A=async s=>{var u,f,b,L;s.preventDefault();const e=s.currentTarget;if(!e.checkValidity()){e.reportValidity();return}const t=me();if(!t){c.error({message:"Не вдалося визначити десерт для замовлення",position:"topRight",color:"#FA5053",class:"custom-toast"});return}const r=new FormData(e),o=r.get("phone").trim(),n={name:r.get("name").trim(),phone:o.replace(/\D/g,""),dessertId:t,comment:r.get("comment").trim()};if(!/^380[0-9]{9}$/.test(n.phone)){c.error({message:"Введіть телефон у форматі 380961234568",position:"center",color:"#FA5053",messageColor:"#ffffff",class:"custom-toast"});return}try{await ce(n),c.success({message:"Замовлення успішно відправлено!",position:"topRight",color:"#24922E",messageColor:"#ffffff",class:"custom-toast"}),e.reset(),_()}catch(v){console.log("Error in order submit:",v),console.log("Server response:",(u=v.response)==null?void 0:u.data),console.log("Status:",(f=v.response)==null?void 0:f.status),c.error({message:((L=(b=v.response)==null?void 0:b.data)==null?void 0:L.message)||"Не вдалося надіслати заявку. Спробуйте ще раз.",position:"topRight",color:"#FA5053",messageColor:"#ffffff",class:"custom-toast"})}};let d=null,B=null;const ue=()=>{document.addEventListener("open-order-modal",s=>{const{dessertId:e}=s.detail||{};e&&pe(e)})},pe=s=>{B=s,d=document.createElement("div"),d.classList.add("order-modal-backdrop"),d.innerHTML=`
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
          <use href="/img/sprite.svg#icon-close"></use>
        </svg>
      </button>

      <h2 class="order-modal__title" id="order-modal-title">
        Оформлення замовлення
      </h2>

      <form class="order-form js-order-form">
        <label class="order-form__label">
          <span class="order-form__label-text">Ім'я*</span>
          <input
            class="order-form__input"
            type="text"
            name="name"
            placeholder="Вікторія"
            required
            minlength="2"
          />
        </label>

        <label class="order-form__label">
          <span class="order-form__label-text">Телефон*</span>
          <input
            class="order-form__input"
            type="tel"
            name="phone"
            placeholder="38 0__ ______"
            required
          />
        </label>

        <label class="order-form__label">
          <span class="order-form__label-text">Коментар*</span>
          <textarea
            class="order-form__textarea"
            name="comment"
            placeholder="Ваш коментар"
            required
            minlength="5"
          ></textarea>
        </label>

        <button class="order-form__submit-btn" type="submit">
          Надіслати заявку
        </button>
      </form>
    </div>
  `,$.body.append(d),$.body.classList.add("no-scroll"),d.addEventListener("click",j),document.addEventListener("keydown",P),d.querySelector(".js-order-modal-close").addEventListener("click",O),d.querySelector(".js-order-form").addEventListener("submit",A)},_=()=>{if(!d)return;const s=d.querySelector(".js-order-modal-close");s==null||s.removeEventListener("click",O);const e=d.querySelector(".js-order-form");e==null||e.removeEventListener("submit",A),d.removeEventListener("click",j),document.removeEventListener("keydown",P),d.remove(),d=null,B=null,$.body.classList.remove("no-scroll")},me=()=>B;ue();
//# sourceMappingURL=index.js.map
