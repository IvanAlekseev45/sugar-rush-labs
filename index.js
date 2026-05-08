import{a as g,i as d,A as N,S as z,N as F,P as K,K as V}from"./assets/vendor-YU0yCr7_.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();const L={body:document.body},G=async s=>{const e="https://deserts-store.b.goit.study/api",{data:t}=await g.get(`${e}/desserts/${s}`);return t},U=async s=>{const e=s.target.closest(".js-dessert-modal-open");if(!e)return;const t=e.dataset.id;if(!t){d.error({message:"Не вдалося визначити десерт. Спробуйте ще раз.",position:"topRight"});return}Y();try{const o=await G(t);ee(o)}catch(o){b(),d.error({message:"Не вдалося завантажити інформацію про десерт. Спробуйте ще раз.",position:"topRight"}),console.log(o)}},J=s=>{const e=Z();s.target===e&&b()},D=s=>{s.key==="Escape"&&b()},Q=()=>{b()},W=s=>{const e=s.currentTarget.dataset.dessertId;b();const t=new CustomEvent("open-order-modal",{detail:{dessertId:e}});document.dispatchEvent(t)};let c=null;const X=()=>{document.addEventListener("click",U)},Y=()=>{c=document.createElement("div"),c.classList.add("dessert-modal-backdrop"),c.innerHTML=`
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
          <use href="../img/sprite.svg#icon-close"></use>
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
  `,L.body.append(c),L.body.classList.add("no-scroll"),c.addEventListener("click",J),document.addEventListener("keydown",D),c.querySelector(".dessert-modal__close-btn").addEventListener("click",Q)},b=()=>{c&&(c.remove(),c=null,L.body.classList.remove("no-scroll"),document.removeEventListener("keydown",D))},Z=()=>c,ee=s=>{if(!c)return;const e=c.querySelector(".dessert-modal__content"),{_id:t,name:o,price:r,rate:n,description:i,composition:u,image:B}=s,h=u||"";e.innerHTML=`
    <img
      class="dessert-modal__image"
      src="${B}"
      alt="${o}"
    />

    <div class="dessert-modal__info">

      <h2 class="dessert-modal__title">${o}</h2>

      <p class="dessert-modal__price">${r} грн</p>

      <div class="dessert-modal__rating">
        ${te(n)}
      </div>

      <p class="dessert-modal__description">
        ${i}
      </p>

      <p class="dessert-modal__ingredients">
        <b>Склад:</b> ${h}
      </p>

      <button
        class="dessert-modal__order-btn"
        type="button"
        data-dessert-id="${t}"
      >
        Перейти до замовлення
      </button>
    </div>
  `,e.querySelector(".dessert-modal__order-btn").addEventListener("click",W)},se=s=>{const e=Number(s);if(Number.isNaN(e))return 0;const t=Math.round(e*2)/2;return Math.min(Math.max(t,0),5)},te=s=>{const e=se(s),t=Math.floor(e),o=e%1!==0;return`
    <div
      class="rating medium star-svg color-default direction-ltr value-${t} ${o?"half":""}"
      aria-label="Рейтинг ${e} з 5"
    >
      <div class="star-container">
        ${Array.from({length:5},()=>`
            <div class="star">
              <svg class="star-empty">
                <use href="../img/star-rating.icons.svg#star-empty"></use>
              </svg>
              <svg class="star-half">
                <use href="../img/star-rating.icons.svg#star-half"></use>
              </svg>
              <svg class="star-filled">
                <use href="../img/star-rating.icons.svg#star-filled"></use>
              </svg>
            </div>
          `).join("")}
      </div>
    </div>
  `};X();const a={dessertList:document.querySelector(".dessert-list"),dessertCategory:document.querySelector(".dessert-category"),dessertLoadMoreBtn:document.querySelector(".dessert-load-more-btn"),dropdown:document.querySelector(".category-dropdown"),dropdownBtn:document.querySelector(".category-dropdown__btn"),dropdownText:document.querySelector(".category-dropdown__text"),dessertLoader:document.querySelector(".dessert-loader")},oe=async()=>{const s="https://deserts-store.b.goit.study/api",{data:e}=await g.get(`${s}/categories`);return e},re=async()=>{try{const s=await oe(),e=`
    <li class="dessert-category__item">
        <button class="dessert-category__btn active__btn" type="button" data-id="all">Всі десерти</button>
    </li>
  `,t=s.map(({_id:o,name:r})=>`
        <li class="dessert-category__item">
            <button class="dessert-category__btn" type="button" data-id="${o}">${r}</button>
        </li>
      `).join("");a.dessertCategory.insertAdjacentHTML("beforeend",e+t)}catch{d.error({message:"Виникла помилка при завантаженні категорій, спробуйте пізніше.",position:"topRight"})}},E=async(s=1,e="all")=>{const t=e==="all"?"https://deserts-store.b.goit.study/api/desserts":`https://deserts-store.b.goit.study/api/desserts?category=${e}`,{data:o}=await g.get(`${t}`,{params:{page:s,limit:8}});return o},x="/sugar-rush-labs/assets/sprite-7MDemDlu.svg",$=s=>{const e=s.map(({_id:t,name:o,description:r,price:n,category:i,image:u})=>`
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
          <p class="dessert-list__price">${n} грн</p>
          <button class="dessert-list__btn js-dessert-modal-open" type="button" data-id="${t}">
            <svg width="24" height="24" class="dessert-list__icon" aria-hidden="true">
              <use href="${x}#icon-arrow_outward"></use>
            </svg>
          </button>
        </div>
      </li>
      `).join("");a.dessertList.insertAdjacentHTML("beforeend",e),a.dessertList.querySelectorAll(".dessert-list__image").forEach(t=>{const o=t.previousElementSibling;if(t.complete){o.style.display="none",t.classList.add("img__is-loaded");return}t.addEventListener("load",()=>{o.style.display="none",t.classList.add("img__is-loaded")}),t.addEventListener("error",()=>{o.style.display="none",t.classList.add("img__is-loaded")})})},ae=()=>{a.dessertLoader.style.display="block"},ne=()=>{a.dessertLoader.style.display="none"},m={showLoader:ae,hideLoader:ne},de=async(s=1,e="all")=>{m.showLoader();try{const{desserts:t}=await E(s,e);$(t),m.hideLoader(),a.dessertLoadMoreBtn.classList.remove("dessert-button-hidden")}catch{d.error({message:"Виникла помилка при завантаженні десертів, спробуйте пізніше.",position:"topRight"})}};let p=1,w="all";const O=s=>{const e=Math.ceil(s/8);p<e?(a.dessertLoadMoreBtn.classList.remove("dessert-button-hidden"),a.dessertLoadMoreBtn.disabled=!1):(a.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),a.dessertLoadMoreBtn.disabled=!0)},le=async s=>{const e=s.target.closest(".dessert-category__btn");if(e){p=1,w=e.dataset.id,document.querySelectorAll(".dessert-category__btn").forEach(t=>t.classList.remove("active__btn")),e.classList.add("active__btn"),a.dessertList.innerHTML="",m.showLoader();try{const t=await E(p,w);$(t.desserts),O(t.totalItems)}catch{d.error({message:"Виникла помилка при зміні категорії, спробуйте пізніше.",position:"topRight"})}finally{m.hideLoader()}}},ie=async()=>{a.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),a.dessertLoadMoreBtn.disabled=!0,m.showLoader(),p+=1;try{const{desserts:s,totalItems:e}=await E(p,w);$(s),O(e)}catch{d.error({message:"Виникла помилка при завантаженні десертів, спробуйте пізніше.",position:"topRight"})}finally{m.hideLoader()}},P={handleCategoryFilter:le,handleLoadMoreDesserts:ie};a.dropdownBtn.addEventListener("click",()=>{a.dropdown.classList.toggle("is-open")});a.dropdown.addEventListener("click",s=>{const e=s.target.closest(".dessert-category__btn");e&&(a.dropdownText.textContent=e.textContent,a.dropdown.classList.remove("is-open"))});document.addEventListener("click",s=>{a.dropdown.contains(s.target)||a.dropdown.classList.remove("is-open")});re();de();a.dessertCategory.addEventListener("click",P.handleCategoryFilter);a.dessertLoadMoreBtn.addEventListener("click",P.handleLoadMoreDesserts);new N(".accordion-container",{showMultiple:!1,duration:300});const j={bestsellersList:document.querySelector(".bestsellers-list"),loaderBestsellers:document.querySelector(".bestsellers-loader"),leftBtn:document.querySelector(".page-left-btn"),rightBtn:document.querySelector(".page-right-btn")},ce=async()=>{try{const s="https://deserts-store.b.goit.study/api",{data:e}=await g.get(`${s}/desserts?type=popular&limit=18`);return e}catch{d.error({message:"Йой, здається, розробники щось нахімічили з ТОП-десертами, спробуйте пізніше.",position:"topRight",messageSize:16,messageLineHeight:26,closeOnClick:!0,progressBar:!1})}};async function ue(){const s=j.loaderBestsellers;s.style.display="block";try{const{desserts:e}=await ce();me(e)}catch{d.error({message:"Йой, здається, розробники щось нахімічили з ТОП-десертами, спробуйте пізніше.",position:"topRight",messageSize:16,messageLineHeight:26,closeOnClick:!0,progressBar:!1})}finally{s.style.display="none"}}document.addEventListener("DOMContentLoaded",ue);let y=null;function R(){const s=document.querySelectorAll(".bestsellers-list-item");s.forEach(e=>{e.style.height="auto",e.style.display="flex",e.style.flexDirection="column",e.style.justifyContent="space-between"}),requestAnimationFrame(()=>{let e=0;s.forEach(t=>{t.offsetHeight>e&&(e=t.offsetHeight)}),s.forEach(t=>t.style.height=e+"px")})}function me(s){const e=s.map(({image:t,category:o,description:r,name:n,price:i,_id:u})=>`<li class="bestsellers-list-item swiper-slide">
            <div class="bestsellers-top">
                <img class="bestsellers-image" src="${t}" alt="${n}"/>
                <p class="bestsellers-category">${o.name}</p>
                <h3 class="bestsellers-name">${n}</h3>
                <p class="bestsellers-description">${r}</p>
            </div>
            <div class="bestsellers-wrapper">
                <p class="bestsellers-price">${i} грн</p>
                <button class="bestsellers-modal-btn js-dessert-modal-open" type="button" aria-label="Подивитись детальну інформацію" data-id="${u}">
                <svg width="24" height="24" aria-hidden="true">
                    <use href="${x}#icon-arrow_outward"></use>
                </svg>
                </button>
            </div>
        </li>`).join("");j.bestsellersList.innerHTML=e,y&&(y.destroy(!0,!0),y=null),y=new z(".swiper-bestsellers",{modules:[F,K,V],keyboard:{enabled:!0,onlyInViewport:!0},slidesPerView:1,slidesPerGroup:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:16},1440:{slidesPerView:3,slidesPerGroup:3,spaceBetween:24}},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0},navigation:{prevEl:".page-left-btn",nextEl:".page-right-btn"},on:{init(){R()},resize(){R()}}})}const k={body:document.body},pe="https://deserts-store.b.goit.study/api",ge=async s=>{const{data:e}=await g.post(`${pe}/orders`,s);return e},H=s=>{s.target.classList.contains("order-modal-backdrop")&&v()},I=s=>{s.key==="Escape"&&v()},A=()=>{v()},T=async s=>{var _,S,C,q;s.preventDefault();const e=s.currentTarget,t=ye();if(!t){d.error({message:"Не вдалося визначити десерт для замовлення",position:"topRight",color:"#FA5053",messageColor:"#ffffff",class:"custom-toast"});return}const o=new FormData(e),r=o.get("name").trim(),i=o.get("phone").trim().replace(/\D/g,""),u=o.get("comment").trim();if(!r){d.error({message:"Введіть ім’я",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast"});return}if(r.length<2){d.error({message:"Ім’я має містити щонайменше 2 символи",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast"});return}if(!/^380[0-9]{9}$/.test(i)){d.error({message:"Введіть телефон у форматі 380961234568",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast"});return}if(!u){d.error({message:"Введіть коментар",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast"});return}if(u.length<5){d.error({message:"Коментар має містити щонайменше 5 символів",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast"});return}const h={name:r,phone:i,dessertId:t,comment:u};try{await ge(h),d.success({message:"Замовлення успішно відправлено!",position:"topRight",color:"#24922E",messageColor:"#ffffff",class:"custom-toast"}),e.reset(),v()}catch(f){console.log("Error in order submit:",f),console.log("Server response:",(_=f.response)==null?void 0:_.data),console.log("Status:",(S=f.response)==null?void 0:S.status),d.error({message:((q=(C=f.response)==null?void 0:C.data)==null?void 0:q.message)||"Не вдалося надіслати заявку. Спробуйте ще раз.",position:"topRight",color:"#FA5053",messageColor:"#ffffff",class:"custom-toast"})}};let l=null,M=null;const be=()=>{document.addEventListener("open-order-modal",s=>{const{dessertId:e}=s.detail||{};e&&fe(e)})},fe=s=>{M=s,l=document.createElement("div"),l.classList.add("order-modal-backdrop"),l.innerHTML=`
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
          <use href="../img/sprite.svg#icon-close"></use>
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
  `,k.body.append(l),k.body.classList.add("no-scroll"),l.addEventListener("click",H),document.addEventListener("keydown",I),l.querySelector(".js-order-modal-close").addEventListener("click",A),l.querySelector(".js-order-form").addEventListener("submit",T)},v=()=>{if(!l)return;const s=l.querySelector(".js-order-modal-close");s==null||s.removeEventListener("click",A);const e=l.querySelector(".js-order-form");e==null||e.removeEventListener("submit",T),l.removeEventListener("click",H),document.removeEventListener("keydown",I),l.remove(),l=null,M=null,k.body.classList.remove("no-scroll")},ye=()=>M;be();
//# sourceMappingURL=index.js.map
