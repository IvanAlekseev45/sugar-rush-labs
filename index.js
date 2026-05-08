import{a as g,i,A as H,S as I,N as T,P as F,K as N}from"./assets/vendor-YU0yCr7_.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const w={body:document.body},z=async s=>{const e="https://deserts-store.b.goit.study/api",{data:t}=await g.get(`${e}/desserts/${s}`);return t},V=async s=>{const e=s.target.closest(".js-dessert-modal-open");if(!e)return;const t=e.dataset.id;if(!t){i.error({message:"Не вдалося визначити десерт. Спробуйте ще раз.",position:"topRight"});return}Q();try{const r=await z(t);X(r)}catch(r){y(),i.error({message:"Не вдалося завантажити інформацію про десерт. Спробуйте ще раз.",position:"topRight"}),console.log(r)}},K=s=>{const e=W();s.target===e&&y()},C=s=>{s.key==="Escape"&&y()},G=()=>{y()},U=s=>{const e=s.currentTarget.dataset.dessertId;y();const t=new CustomEvent("open-order-modal",{detail:{dessertId:e}});document.dispatchEvent(t)};let l=null;const J=()=>{document.addEventListener("click",V)},Q=()=>{l=document.createElement("div"),l.classList.add("dessert-modal-backdrop"),l.innerHTML=`
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
  `,w.body.append(l),w.body.classList.add("no-scroll"),l.addEventListener("click",K),document.addEventListener("keydown",C),l.querySelector(".dessert-modal__close-btn").addEventListener("click",G)},y=()=>{l&&(l.remove(),l=null,w.body.classList.remove("no-scroll"),document.removeEventListener("keydown",C))},W=()=>l,X=s=>{if(!l)return;const e=l.querySelector(".dessert-modal__content"),{_id:t,name:r,price:o,rate:n,description:c,composition:u,image:f}=s,b=u||"";e.innerHTML=`
    <img
      class="dessert-modal__image"
      src="${f}"
      alt="${r}"
    />

    <div class="dessert-modal__info">

      <h2 class="dessert-modal__title">${r}</h2>

      <p class="dessert-modal__price">${o} грн</p>

      <div class="dessert-modal__rating">
        ${Z(n)}
      </div>

      <p class="dessert-modal__description">
        ${c}
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
  `,e.querySelector(".dessert-modal__order-btn").addEventListener("click",U)},Y=s=>{const e=Number(s);if(Number.isNaN(e))return 0;const t=Math.round(e*2)/2;return Math.min(Math.max(t,0),5)},Z=s=>{const e=Y(s),t=Math.floor(e),r=e%1!==0;return`
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
  `};J();const a={dessertList:document.querySelector(".dessert-list"),dessertCategory:document.querySelector(".dessert-category"),dessertLoadMoreBtn:document.querySelector(".dessert-load-more-btn"),dropdown:document.querySelector(".category-dropdown"),dropdownBtn:document.querySelector(".category-dropdown__btn"),dropdownText:document.querySelector(".category-dropdown__text"),dessertLoader:document.querySelector(".dessert-loader")},ee=async()=>{const s="https://deserts-store.b.goit.study/api",{data:e}=await g.get(`${s}/categories`);return e},se=async()=>{try{const s=await ee(),e=`
    <li class="dessert-category__item">
        <button class="dessert-category__btn active__btn" type="button" data-id="all">Всі десерти</button>
    </li>
  `,t=s.map(({_id:r,name:o})=>`
        <li class="dessert-category__item">
            <button class="dessert-category__btn" type="button" data-id="${r}">${o}</button>
        </li>
      `).join("");a.dessertCategory.insertAdjacentHTML("beforeend",e+t)}catch{i.error({message:"Виникла помилка при завантаженні категорій, спробуйте пізніше.",position:"topRight"})}},$=async(s=1,e="all")=>{const t=e==="all"?"https://deserts-store.b.goit.study/api/desserts":`https://deserts-store.b.goit.study/api/desserts?category=${e}`,{data:r}=await g.get(`${t}`,{params:{page:s,limit:8}});return r},q="/sugar-rush-labs/assets/sprite-7MDemDlu.svg",M=s=>{const e=s.map(({_id:t,name:r,description:o,price:n,category:c,image:u})=>`
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
          <p class="dessert-list__category">${c.name}</p>

          <p class="dessert-list__title">${r}</p>
          <p class="dessert-list__description">${o}</p>
        </div>
        <div class="dessert-list__wrapper__bottom">
          <p class="dessert-list__price">${n} грн</p>
          <button class="dessert-list__btn js-dessert-modal-open" type="button" data-id="${t}">
            <svg width="17" height="17" class="dessert-list__icon" aria-hidden="true">
              <use href="${q}#icon-arrow_outward"></use>
            </svg>
          </button>
        </div>
      </li>
      `).join("");a.dessertList.insertAdjacentHTML("beforeend",e),a.dessertList.querySelectorAll(".dessert-list__image").forEach(t=>{const r=t.previousElementSibling;if(t.complete){r.style.display="none",t.classList.add("img__is-loaded");return}t.addEventListener("load",()=>{r.style.display="none",t.classList.add("img__is-loaded")}),t.addEventListener("error",()=>{r.style.display="none",t.classList.add("img__is-loaded")})})},te=()=>{a.dessertLoader.style.display="block"},re=()=>{a.dessertLoader.style.display="none"},p={showLoader:te,hideLoader:re},oe=async(s=1,e="all")=>{p.showLoader();try{const{desserts:t}=await $(s,e);M(t),p.hideLoader(),a.dessertLoadMoreBtn.classList.remove("dessert-button-hidden")}catch{i.error({message:"Виникла помилка при завантаженні десертів, спробуйте пізніше.",position:"topRight"})}};let m=1,k="all";const R=s=>{const e=Math.ceil(s/8);m<e?(a.dessertLoadMoreBtn.classList.remove("dessert-button-hidden"),a.dessertLoadMoreBtn.disabled=!1):(a.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),a.dessertLoadMoreBtn.disabled=!0)},ae=async s=>{const e=s.target.closest(".dessert-category__btn");if(e){m=1,k=e.dataset.id,document.querySelectorAll(".dessert-category__btn").forEach(t=>t.classList.remove("active__btn")),e.classList.add("active__btn"),a.dessertList.innerHTML="",p.showLoader();try{const t=await $(m,k);M(t.desserts),R(t.totalItems)}catch{i.error({message:"Виникла помилка при зміні категорії, спробуйте пізніше.",position:"topRight"})}finally{p.hideLoader()}}},ne=async()=>{a.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),a.dessertLoadMoreBtn.disabled=!0,p.showLoader(),m+=1;try{const{desserts:s,totalItems:e}=await $(m,k);M(s),R(e)}catch{i.error({message:"Виникла помилка при завантаженні десертів, спробуйте пізніше.",position:"topRight"})}finally{p.hideLoader()}},D={handleCategoryFilter:ae,handleLoadMoreDesserts:ne};a.dropdownBtn.addEventListener("click",()=>{a.dropdown.classList.toggle("is-open")});a.dropdown.addEventListener("click",s=>{const e=s.target.closest(".dessert-category__btn");e&&(a.dropdownText.textContent=e.textContent,a.dropdown.classList.remove("is-open"))});document.addEventListener("click",s=>{a.dropdown.contains(s.target)||a.dropdown.classList.remove("is-open")});se();oe();a.dessertCategory.addEventListener("click",D.handleCategoryFilter);a.dessertLoadMoreBtn.addEventListener("click",D.handleLoadMoreDesserts);new H(".accordion-container",{showMultiple:!1,duration:300});const x={bestsellersList:document.querySelector(".bestsellers-list"),loaderBestsellers:document.querySelector(".bestsellers-loader"),leftBtn:document.querySelector(".page-left-btn"),rightBtn:document.querySelector(".page-right-btn")},de=async()=>{try{const s="https://deserts-store.b.goit.study/api",{data:e}=await g.get(`${s}/desserts?type=popular&limit=18`);return e}catch{i.error({message:"Йой, здається, розробники щось нахімічили з ТОП-десертами, спробуйте пізніше.",position:"topRight",messageSize:16,messageLineHeight:26,closeOnClick:!0,progressBar:!1})}};async function le(){const s=x.loaderBestsellers;s.style.display="block";try{const{desserts:e}=await de();ie(e)}catch{i.error({message:"Йой, здається, розробники щось нахімічили з ТОП-десертами, спробуйте пізніше.",position:"topRight",messageSize:16,messageLineHeight:26,closeOnClick:!0,progressBar:!1})}finally{s.style.display="none"}}document.addEventListener("DOMContentLoaded",le);let v=null;function S(){const s=document.querySelectorAll(".bestsellers-list-item");s.forEach(e=>{e.style.height="auto",e.style.display="flex",e.style.flexDirection="column",e.style.justifyContent="space-between"}),requestAnimationFrame(()=>{let e=0;s.forEach(t=>{t.offsetHeight>e&&(e=t.offsetHeight)}),s.forEach(t=>t.style.height=e+"px")})}function ie(s){const e=s.map(({image:t,category:r,description:o,name:n,price:c,_id:u})=>`<li class="bestsellers-list-item swiper-slide">
            <div class="bestsellers-top">
                <img class="bestsellers-image" src="${t}" alt="${n}"/>
                <p class="bestsellers-category">${r.name}</p>
                <h3 class="bestsellers-name">${n}</h3>
                <p class="bestsellers-description">${o}</p>
            </div>
            <div class="bestsellers-wrapper">
                <p class="bestsellers-price">${c} грн</p>
                <button class="bestsellers-modal-btn js-dessert-modal-open" type="button" aria-label="Подивитись детальну інформацію" data-id="${u}">
                <svg width="24" height="24" aria-hidden="true">
                    <use href="${q}#icon-arrow_outward"></use>
                </svg>
                </button>
            </div>
        </li>`).join("");x.bestsellersList.innerHTML=e,v&&(v.destroy(!0,!0),v=null),v=new I(".swiper-bestsellers",{modules:[T,F,N],keyboard:{enabled:!0,onlyInViewport:!0},slidesPerView:1,slidesPerGroup:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:16},1440:{slidesPerView:3,slidesPerGroup:3,spaceBetween:24}},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0},navigation:{prevEl:".page-left-btn",nextEl:".page-right-btn"},on:{init(){S()},resize(){S()}}})}const E={body:document.body},ce="https://deserts-store.b.goit.study/api",ue=async s=>{const{data:e}=await g.post(`${ce}/orders`,s);return e},O=s=>{s.target.classList.contains("order-modal-backdrop")&&_()},j=s=>{s.key==="Escape"&&_()},P=()=>{_()},A=async s=>{var u,f,b,L;s.preventDefault();const e=s.currentTarget;if(!e.checkValidity()){e.reportValidity();return}const t=ge();if(!t){i.error({message:"Не вдалося визначити десерт для замовлення",position:"topRight",color:"#FA5053",class:"custom-toast"});return}const r=new FormData(e),o=r.get("phone").trim(),n={name:r.get("name").trim(),phone:o.replace(/\D/g,""),dessertId:t,comment:r.get("comment").trim()};if(!/^380[0-9]{9}$/.test(n.phone)){i.error({message:"Введіть телефон у форматі 380961234568",position:"center",color:"#FA5053",messageColor:"#ffffff",class:"custom-toast"});return}try{await ue(n),i.success({message:"Замовлення успішно відправлено!",position:"topRight",color:"#24922E",messageColor:"#ffffff",class:"custom-toast"}),e.reset(),_()}catch(h){console.log("Error in order submit:",h),console.log("Server response:",(u=h.response)==null?void 0:u.data),console.log("Status:",(f=h.response)==null?void 0:f.status),i.error({message:((L=(b=h.response)==null?void 0:b.data)==null?void 0:L.message)||"Не вдалося надіслати заявку. Спробуйте ще раз.",position:"topRight",color:"#FA5053",messageColor:"#ffffff",class:"custom-toast"})}};let d=null,B=null;const pe=()=>{document.addEventListener("open-order-modal",s=>{const{dessertId:e}=s.detail||{};e&&me(e)})},me=s=>{B=s,d=document.createElement("div"),d.classList.add("order-modal-backdrop"),d.innerHTML=`
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
  `,E.body.append(d),E.body.classList.add("no-scroll"),d.addEventListener("click",O),document.addEventListener("keydown",j),d.querySelector(".js-order-modal-close").addEventListener("click",P),d.querySelector(".js-order-form").addEventListener("submit",A)},_=()=>{if(!d)return;const s=d.querySelector(".js-order-modal-close");s==null||s.removeEventListener("click",P);const e=d.querySelector(".js-order-form");e==null||e.removeEventListener("submit",A),d.removeEventListener("click",O),document.removeEventListener("keydown",j),d.remove(),d=null,B=null,E.body.classList.remove("no-scroll")},ge=()=>B;pe();
//# sourceMappingURL=index.js.map
