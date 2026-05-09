import{a as g,i as l,A as Z,S as M,N as A,P as H,K as J}from"./assets/vendor-BRBGmNfy.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const B={body:document.body},j="/sugar-rush-labs/assets/sprite-CbHn4Fkf.svg",k="data:image/svg+xml,%3csvg%20style='position:%20absolute;%20width:%200;%20height:%200;%20overflow:%20hidden;'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3csymbol%20id='star-empty'%20viewBox='0%200%2034%2032'%3e%3ctitle%3estar-empty%3c/title%3e%3cpath%20class='path-star-empty'%20d='M33.412%2012.395l-11.842-1.021-4.628-10.904-4.628%2010.92-11.842%201.005%208.993%207.791-2.701%2011.579%2010.179-6.144%2010.179%206.144-2.685-11.579%208.976-7.791zM16.941%2022.541l-6.193%203.739%201.647-7.049-5.468-4.744%207.214-0.626%202.8-6.638%202.816%206.654%207.214%200.626-5.468%204.744%201.647%207.049-6.209-3.755z'/%3e%3c/symbol%3e%3csymbol%20id='star-half'%20viewBox='0%200%2034%2032'%3e%3ctitle%3estar-half%3c/title%3e%3cpath%20class='path-star-half'%20d='M%2033.412,12.395%2021.57,11.374%2016.942,0.47%2012.314,11.39%200.472,12.395%209.465,20.186%206.764,31.765%2016.943,25.621%2027.122,31.765%2024.437,20.186%2033.413,12.395%20Z%20M%2016.941,22.541%20c%200,0%20-0.297971,-14.6455833%200,-15.318%20l%202.816,6.654%207.214,0.626%20-5.468,4.744%201.647,7.049%20z'/%3e%3c/symbol%3e%3csymbol%20id='star-filled'%20viewBox='0%200%2034%2032'%3e%3ctitle%3estar-filled%3c/title%3e%3cpath%20class='path-star-filled'%20d='M16.941%2025.621l10.179%206.144-2.701-11.579%208.993-7.791-11.842-1.005-4.628-10.92-4.628%2010.92-11.842%201.005%208.993%207.791-2.701%2011.579z'/%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e",Q=async s=>{const e="https://deserts-store.b.goit.study/api",{data:t}=await g.get(`${e}/desserts/${s}`);return t},X=async s=>{const e=s.target.closest(".js-dessert-modal-open");if(!e)return;const t=e.dataset.id;if(!t){l.error({message:"Не вдалося визначити десерт. Спробуйте ще раз.",position:"topRight"});return}re();try{const r=await Q(t);ae(r)}catch(r){f(),l.error({message:"Не вдалося завантажити інформацію про десерт. Спробуйте ще раз.",position:"topRight"}),console.log(r)}},Y=s=>{const e=oe();s.target===e&&f()},I=s=>{s.key==="Escape"&&f()},ee=()=>{f()},se=s=>{const e=s.currentTarget.dataset.dessertId;f();const t=new CustomEvent("open-order-modal",{detail:{dessertId:e}});document.dispatchEvent(t)};let c=null;const te=()=>{document.addEventListener("click",X)},re=()=>{c=document.createElement("div"),c.classList.add("dessert-modal-backdrop"),c.innerHTML=`
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
          <use href="${j}#icon-close"></use>
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
  `,B.body.append(c),B.body.classList.add("no-scroll"),c.addEventListener("click",Y),document.addEventListener("keydown",I),c.querySelector(".dessert-modal__close-btn").addEventListener("click",ee)},f=()=>{c&&(c.remove(),c=null,B.body.classList.remove("no-scroll"),document.removeEventListener("keydown",I))},oe=()=>c,ae=s=>{if(!c)return;const e=c.querySelector(".dessert-modal__content"),{_id:t,name:r,price:o,rate:n,description:d,composition:u,image:P}=s,w=u||"";e.innerHTML=`
    <img
      class="dessert-modal__image"
      src="${P}"
      alt="${r}"
    />

    <div class="dessert-modal__info">

      <h2 class="dessert-modal__title">${r}</h2>

      <p class="dessert-modal__price">${o} грн</p>

      <div class="dessert-modal__rating">
        ${le(n)}
      </div>

      <p class="dessert-modal__description">
        ${d}
      </p>

      <p class="dessert-modal__ingredients">
        <b>Склад:</b> ${w}
      </p>

      <button
        class="dessert-modal__order-btn"
        type="button"
        data-dessert-id="${t}"
      >
        Перейти до замовлення
      </button>
    </div>
  `,e.querySelector(".dessert-modal__order-btn").addEventListener("click",se)},ne=s=>{const e=Number(s);if(Number.isNaN(e))return 0;const t=Math.round(e*2)/2;return Math.min(Math.max(t,0),5)},le=s=>{const e=ne(s),t=Math.floor(e),r=e%1!==0;return`
    <div
      class="rating medium star-svg color-default direction-ltr value-${t} ${r?"half":""}"
      aria-label="Рейтинг ${e} з 5"
    >
      <div class="star-container">
        ${Array.from({length:5},()=>`
            <div class="star">
              <svg class="star-empty">
               <use href="${k}#star-empty"></use>
              </svg>
              <svg class="star-half">
                 <use href="${k}#star-half"></use>
              </svg>
              <svg class="star-filled">
                <use href="${k}#star-filled"></use>
              </svg>
            </div>
          `).join("")}
      </div>
    </div>
  `};te();const a={dessertList:document.querySelector(".dessert-list"),dessertCategory:document.querySelector(".dessert-category"),dessertLoadMoreBtn:document.querySelector(".dessert-load-more-btn"),dropdown:document.querySelector(".category-dropdown"),dropdownBtn:document.querySelector(".category-dropdown__btn"),dropdownText:document.querySelector(".category-dropdown__text"),dessertLoader:document.querySelector(".dessert-loader")},ie=async()=>{const s="https://deserts-store.b.goit.study/api",{data:e}=await g.get(`${s}/categories`);return e},de=async()=>{try{const s=await ie(),e=`
    <li class="dessert-category__item">
        <button class="dessert-category__btn active__btn" type="button" data-id="all">Всі десерти</button>
    </li>
  `,t=s.map(({_id:r,name:o})=>`
        <li class="dessert-category__item">
            <button class="dessert-category__btn" type="button" data-id="${r}">${o}</button>
        </li>
      `).join("");a.dessertCategory.insertAdjacentHTML("beforeend",e+t)}catch{l.error({message:"Виникла помилка при завантаженні категорій, спробуйте пізніше.",position:"topRight"})}},S=async(s=1,e="all")=>{const t=e==="all"?"https://deserts-store.b.goit.study/api/desserts":`https://deserts-store.b.goit.study/api/desserts?category=${e}`,{data:r}=await g.get(`${t}`,{params:{page:s,limit:8}});return r},T="/sugar-rush-labs/assets/sprite-CbHn4Fkf.svg",C=s=>{const e=s.map(({_id:t,name:r,description:o,price:n,category:d,image:u})=>`
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
          <p class="dessert-list__category">${d.name}</p>

          <p class="dessert-list__title">${r}</p>
          <p class="dessert-list__description">${o}</p>
        </div>
        <div class="dessert-list__wrapper__bottom">
          <p class="dessert-list__price">${n} грн</p>
          <button class="dessert-list__btn js-dessert-modal-open" type="button" data-id="${t}">
            <svg width="24" height="24" class="dessert-list__icon" aria-hidden="true">
              <use href="${T}#icon-arrow_outward"></use>
            </svg>
          </button>
        </div>
      </li>
      `).join("");a.dessertList.insertAdjacentHTML("beforeend",e),a.dessertList.querySelectorAll(".dessert-list__image").forEach(t=>{const r=t.previousElementSibling;if(t.complete){r.style.display="none",t.classList.add("img__is-loaded");return}t.addEventListener("load",()=>{r.style.display="none",t.classList.add("img__is-loaded")}),t.addEventListener("error",()=>{r.style.display="none",t.classList.add("img__is-loaded")})})},ce=()=>{a.dessertLoader.style.display="block"},ue=()=>{a.dessertLoader.style.display="none"},m={showLoader:ce,hideLoader:ue},pe=async(s=1,e="all")=>{m.showLoader();try{const{desserts:t}=await S(s,e);C(t),m.hideLoader(),a.dessertLoadMoreBtn.classList.remove("dessert-button-hidden")}catch{l.error({message:"Виникла помилка при завантаженні десертів, спробуйте пізніше.",position:"topRight"})}};let b=1,$="all";const z=s=>{const e=Math.ceil(s/8);b<e?(a.dessertLoadMoreBtn.classList.remove("dessert-button-hidden"),a.dessertLoadMoreBtn.disabled=!1):(a.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),a.dessertLoadMoreBtn.disabled=!0)},me=async s=>{const e=s.target.closest(".dessert-category__btn");if(e){b=1,$=e.dataset.id,document.querySelectorAll(".dessert-category__btn").forEach(t=>t.classList.remove("active__btn")),e.classList.add("active__btn"),a.dessertList.innerHTML="",m.showLoader();try{const t=await S(b,$);C(t.desserts),z(t.totalItems)}catch{l.error({message:"Виникла помилка при зміні категорії, спробуйте пізніше.",position:"topRight"})}finally{m.hideLoader()}}},ge=async()=>{a.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),a.dessertLoadMoreBtn.disabled=!0,m.showLoader(),b+=1;try{const{desserts:s,totalItems:e}=await S(b,$);C(s),z(e)}catch{l.error({message:"Виникла помилка при завантаженні десертів, спробуйте пізніше.",position:"topRight"})}finally{m.hideLoader()}},F={handleCategoryFilter:me,handleLoadMoreDesserts:ge};a.dropdownBtn.addEventListener("click",()=>{a.dropdown.classList.toggle("is-open")});a.dropdown.addEventListener("click",s=>{const e=s.target.closest(".dessert-category__btn");e&&(a.dropdownText.textContent=e.textContent,a.dropdown.classList.remove("is-open"))});document.addEventListener("click",s=>{a.dropdown.contains(s.target)||a.dropdown.classList.remove("is-open")});de();pe();a.dessertCategory.addEventListener("click",F.handleCategoryFilter);a.dessertLoadMoreBtn.addEventListener("click",F.handleLoadMoreDesserts);new Z(".accordion-container",{showMultiple:!1,duration:300});const h={reviewsList:document.querySelector("#feedback-list"),loader:document.querySelector(".loader-backdrop")};console.log(h.reviewsList);const be=()=>{new M(".feedback-swiper",{loop:!0,speed:600,slidesPerView:1,centeredSlides:!0,spaceBetween:24,observer:!0,observeParents:!0,watchSlidesProgress:!0,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:2},navigation:{nextEl:".button-next",prevEl:".button-prev"},breakpoints:{768:{slidesPerView:3,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24,centeredSlides:!1}}})},fe=s=>{const e=Math.floor(s.rate),t=s.rate%1!==0?"half":"";return`
    <li class="swiper-slide feedback-item">
      <div class="rating star-svg value-${e} ${t} color-default">
        <div class="star-container">
          ${Array(5).fill(0).map(()=>`
            <div class="star">
              <svg class="star-empty"><use href="./img/star-rating.icons.svg#star-empty"></use></svg>
              <svg class="star-half"><use href="./img/star-rating.icons.svg#star-half"></use></svg>
              <svg class="star-filled"><use href="./img/star-rating.icons.svg#star-filled"></use></svg>
            </div>
          `).join("")}
        </div>
      </div>
      <p class="feedback-text">${s.description}</p>
      <p class="feedback-user-name">${s.author}</p>
    </li>
  `},ve=async s=>{try{const{data:e}=await g.get("https://deserts-store.b.goit.study/api/feedbacks");return e.feedbacks}catch{l.error({message:"Йой, здається, розробники щось нахімічили з відгуками, спробуйте пізніше.",position:"topRight",messageSize:16,messageLineHeight:26,closeOnClick:!0,progressBar:!1})}},ye=async()=>{h.loader.classList.remove("is-hidden");try{const e=(await ve()).map(t=>fe(t)).join("");h.reviewsList.innerHTML=e,requestAnimationFrame(()=>{be()})}catch{l.error({message:"Йой, щось пішло не так, спробуйте пізніше.",position:"topRight",messageSize:16,closeOnClick:!0,progressBar:!1})}finally{h.loader.classList.add("is-hidden")}};document.addEventListener("DOMContentLoaded",ye);const V={bestsellersList:document.querySelector(".bestsellers-list"),loaderBestsellers:document.querySelector(".bestsellers-loader"),leftBtn:document.querySelector(".page-left-btn"),rightBtn:document.querySelector(".page-right-btn")},he=async()=>{try{const s="https://deserts-store.b.goit.study/api",{data:e}=await g.get(`${s}/desserts?type=popular&limit=18`);return e}catch{l.error({message:"Йой, здається, розробники щось нахімічили з ТОП-десертами, спробуйте пізніше.",position:"topRight",messageSize:16,messageLineHeight:26,closeOnClick:!0,progressBar:!1})}};async function _e(){const s=V.loaderBestsellers;s.style.display="block";try{const{desserts:e}=await he();we(e)}catch{l.error({message:"Йой, здається, розробники щось нахімічили з ТОП-десертами, спробуйте пізніше.",position:"topRight",messageSize:16,messageLineHeight:26,closeOnClick:!0,progressBar:!1})}finally{s.style.display="none"}}document.addEventListener("DOMContentLoaded",_e);let y=null;function D(){const s=document.querySelectorAll(".bestsellers-list-item");s.forEach(e=>{e.style.height="auto",e.style.display="flex",e.style.flexDirection="column",e.style.justifyContent="space-between"}),requestAnimationFrame(()=>{let e=0;s.forEach(t=>{t.offsetHeight>e&&(e=t.offsetHeight)}),s.forEach(t=>t.style.height=e+"px")})}function we(s){const e=s.map(({image:t,category:r,description:o,name:n,price:d,_id:u})=>`<li class="bestsellers-list-item swiper-slide">
            <div class="bestsellers-top">
                <img class="bestsellers-image" src="${t}" alt="${n}"/>
                <p class="bestsellers-category">${r.name}</p>
                <h3 class="bestsellers-name">${n}</h3>
                <p class="bestsellers-description">${o}</p>
            </div>
            <div class="bestsellers-wrapper">
                <p class="bestsellers-price">${d} грн</p>
                <button class="bestsellers-modal-btn js-dessert-modal-open" type="button" aria-label="Подивитись детальну інформацію" data-id="${u}">
                <svg width="24" height="24" aria-hidden="true">
                    <use href="${T}#icon-arrow_outward"></use>
                </svg>
                </button>
            </div>
        </li>`).join("");V.bestsellersList.innerHTML=e,y&&(y.destroy(!0,!0),y=null),y=new M(".swiper-bestsellers",{modules:[A,H,J],keyboard:{enabled:!0,onlyInViewport:!0},slidesPerView:1,slidesPerGroup:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:16},1440:{slidesPerView:3,slidesPerGroup:3,spaceBetween:24}},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0},navigation:{prevEl:".page-left-btn",nextEl:".page-right-btn"},on:{init(){D()},resize(){D()}}})}const E={body:document.body},Le="https://deserts-store.b.goit.study/api",ke=async s=>{const{data:e}=await g.post(`${Le}/orders`,s);return e},N=s=>{s.target.classList.contains("order-modal-backdrop")&&_()},U=s=>{s.key==="Escape"&&_()},K=()=>{_()},G=async s=>{var L,q,R,O;s.preventDefault();const e=s.currentTarget,t=Ee();if(!t){l.error({message:"Не вдалося визначити десерт для замовлення",position:"topRight",color:"#FA5053",messageColor:"#ffffff",class:"custom-toast"});return}const r=new FormData(e),o=r.get("name").trim(),d=r.get("phone").trim().replace(/\D/g,""),u=r.get("comment").trim();if(!o){l.error({message:"Введіть ім’я",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast"});return}if(o.length<2){l.error({message:"Ім’я має містити щонайменше 2 символи",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast"});return}if(!/^380[0-9]{9}$/.test(d)){l.error({message:"Введіть телефон у форматі 380961234568",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast"});return}if(!u){l.error({message:"Введіть коментар",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast"});return}if(u.length<5){l.error({message:"Коментар має містити щонайменше 5 символів",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast"});return}const w={name:o,phone:d,dessertId:t,comment:u};try{await ke(w),l.success({message:"Замовлення успішно відправлено!",position:"topRight",color:"#24922E",messageColor:"#ffffff",class:"custom-toast"}),e.reset(),_()}catch(v){console.log("Error in order submit:",v),console.log("Server response:",(L=v.response)==null?void 0:L.data),console.log("Status:",(q=v.response)==null?void 0:q.status),l.error({message:((O=(R=v.response)==null?void 0:R.data)==null?void 0:O.message)||"Не вдалося надіслати заявку. Спробуйте ще раз.",position:"topRight",color:"#FA5053",messageColor:"#ffffff",class:"custom-toast"})}};let i=null,x=null;const Be=()=>{document.addEventListener("open-order-modal",s=>{const{dessertId:e}=s.detail||{};e&&$e(e)})},$e=s=>{x=s,i=document.createElement("div"),i.classList.add("order-modal-backdrop"),i.innerHTML=`
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
          <use href="${j}#icon-close"></use>
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
  `,E.body.append(i),E.body.classList.add("no-scroll"),i.addEventListener("click",N),document.addEventListener("keydown",U),i.querySelector(".js-order-modal-close").addEventListener("click",K),i.querySelector(".js-order-form").addEventListener("submit",G)},_=()=>{if(!i)return;const s=i.querySelector(".js-order-modal-close");s==null||s.removeEventListener("click",K);const e=i.querySelector(".js-order-form");e==null||e.removeEventListener("submit",G),i.removeEventListener("click",N),document.removeEventListener("keydown",U),i.remove(),i=null,x=null,E.body.classList.remove("no-scroll")},Ee=()=>x;Be();let p=null;const Me=()=>{p=new M(".about-us__viewport",{modules:[A,H],slidesPerView:2,slidesPerGroup:1,spaceBetween:24,watchOverflow:!1,navigation:{nextEl:".about-us__button--next",prevEl:".about-us__button--prev"},pagination:{el:".about-us__pagination",clickable:!0,bulletClass:"about-us__pagination-bullet",bulletActiveClass:"about-us__pagination-bullet--active"},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:2,spaceBetween:32}}})},Se=()=>{p&&(p.destroy(!0,!0),p=null)},W=()=>{const s=window.innerWidth>=768;s&&!p&&Me(),!s&&p&&Se()};W();window.addEventListener("resize",W);
//# sourceMappingURL=index.js.map
