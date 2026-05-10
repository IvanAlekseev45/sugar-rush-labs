import{a as g,i as l,A as J,S as M,N as O,P as D,K as X}from"./assets/vendor-BRBGmNfy.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const _={body:document.body},A="/sugar-rush-labs/assets/sprite-CbHn4Fkf.svg",T=`<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>

        <symbol id="star-empty" viewBox="0 0 34 32">
            <title>star-empty</title>
            <path class="path-star-empty"
                  d="M33.412 12.395l-11.842-1.021-4.628-10.904-4.628 10.92-11.842 1.005 8.993 7.791-2.701 11.579 10.179-6.144 10.179 6.144-2.685-11.579 8.976-7.791zM16.941 22.541l-6.193 3.739 1.647-7.049-5.468-4.744 7.214-0.626 2.8-6.638 2.816 6.654 7.214 0.626-5.468 4.744 1.647 7.049-6.209-3.755z"/>
        </symbol>

        <symbol id="star-half" viewBox="0 0 34 32">
            <title>star-half</title>
            <path class="path-star-half"
                  d="M 33.412,12.395 21.57,11.374 16.942,0.47 12.314,11.39 0.472,12.395 9.465,20.186 6.764,31.765 16.943,25.621 27.122,31.765 24.437,20.186 33.413,12.395 Z M 16.941,22.541 c 0,0 -0.297971,-14.6455833 0,-15.318 l 2.816,6.654 7.214,0.626 -5.468,4.744 1.647,7.049 z"/>
            </symbol>

        <symbol id="star-filled" viewBox="0 0 34 32">
            <title>star-filled</title>
            <path class="path-star-filled"
                  d="M16.941 25.621l10.179 6.144-2.701-11.579 8.993-7.791-11.842-1.005-4.628-10.92-4.628 10.92-11.842 1.005 8.993 7.791-2.701 11.579z"/>
        </symbol>

    </defs>
</svg>
`,Y=async e=>{const s="https://deserts-store.b.goit.study/api",{data:t}=await g.get(`${s}/desserts/${e}`);return t},ee=async e=>{const s=e.target.closest(".js-dessert-modal-open");if(!s)return;const t=s.dataset.id;if(!t){l.error({message:"Не вдалося визначити десерт. Спробуйте ще раз.",position:"topRight",color:"#F5B6B6",messageColor:"#000000",class:"custom-toast"});return}ue();try{const r=await Y(t);me(r)}catch(r){f(),l.error({message:"Не вдалося завантажити інформацію про десерт. Спробуйте ще раз.",position:"topRight",color:"#FFC9C9",messageColor:"#000000",class:"custom-toast"}),console.log(r)}},se=e=>{const s=pe();e.target===s&&f()},F=e=>{e.key==="Escape"&&f()},te=()=>{f()},re=e=>{const s=e.currentTarget.dataset.dessertId;f();const t=new CustomEvent("open-order-modal",{detail:{dessertId:s}});document.dispatchEvent(t)},B={body:document.body},oe="https://deserts-store.b.goit.study/api",ae=async e=>{const{data:s}=await g.post(`${oe}/orders`,e);return s},I=e=>{e.target.classList.contains("order-modal-backdrop")&&w()},z=e=>{e.key==="Escape"&&w()},V=()=>{w()},N=async e=>{var k,P,R,j;e.preventDefault();const s=e.currentTarget,t=de();if(!t){l.error({message:"Не вдалося визначити десерт для замовлення",position:"topRight",color:"#FFC9C9",messageColor:"#000000",class:"custom-toast"});return}const r=new FormData(s),o=r.get("name").trim(),i=r.get("phone").trim().replace(/\D/g,""),u=r.get("comment").trim();if(!o){l.error({message:"Введіть ім’я",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast"});return}if(o.length<2){l.error({message:"Ім’я має містити щонайменше 2 символи",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast"});return}if(!/^380[0-9]{9}$/.test(i)){l.error({message:"Введіть телефон у форматі 380961234568",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast"});return}if(!u){l.error({message:"Введіть коментар",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast"});return}if(u.length<5){l.error({message:"Коментар має містити щонайменше 5 символів",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast"});return}const L={name:o,phone:i,dessertId:t,comment:u};try{await ae(L),l.success({message:"Замовлення успішно відправлено!",position:"topRight",color:"#aefcd2",messageColor:"#000000",class:"custom-toast"}),s.reset(),w()}catch(h){console.log("Error in order submit:",h),console.log("Server response:",(k=h.response)==null?void 0:k.data),console.log("Status:",(P=h.response)==null?void 0:P.status),l.error({message:((j=(R=h.response)==null?void 0:R.data)==null?void 0:j.message)||"Не вдалося надіслати заявку. Спробуйте ще раз.",position:"topRight",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast"})}};let d=null,$=null;const ne=()=>{document.addEventListener("open-order-modal",e=>{const{dessertId:s}=e.detail||{};s&&le(s)})},le=e=>{$=e,d=document.createElement("div"),d.classList.add("order-modal-backdrop"),d.innerHTML=`
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
          <use href="${A}#icon-close"></use>
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
  `,B.body.append(d),B.body.classList.add("no-scroll"),d.addEventListener("click",I),document.addEventListener("keydown",z),d.querySelector(".js-order-modal-close").addEventListener("click",V),d.querySelector(".js-order-form").addEventListener("submit",N)},w=()=>{if(!d)return;const e=d.querySelector(".js-order-modal-close");e==null||e.removeEventListener("click",V);const s=d.querySelector(".js-order-form");s==null||s.removeEventListener("submit",N),d.removeEventListener("click",I),document.removeEventListener("keydown",z),d.remove(),d=null,$=null,B.body.classList.remove("no-scroll")},de=()=>$;ne();let c=null;const ie=()=>{if(document.querySelector(".js-rating-icons-sprite"))return;const e=document.createElement("div");e.classList.add("js-rating-icons-sprite"),e.style.display="none",e.innerHTML=T,_.body.prepend(e)},ce=()=>{ie(),document.addEventListener("click",ee)},ue=()=>{c=document.createElement("div"),c.classList.add("dessert-modal-backdrop"),c.innerHTML=`
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
          <use href="${A}#icon-close"></use>
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
  `,_.body.append(c),_.body.classList.add("no-scroll"),c.addEventListener("click",se),document.addEventListener("keydown",F),c.querySelector(".dessert-modal__close-btn").addEventListener("click",te)},f=()=>{c&&(c.remove(),c=null,_.body.classList.remove("no-scroll"),document.removeEventListener("keydown",F))},pe=()=>c,me=e=>{if(!c)return;const s=c.querySelector(".dessert-modal__content"),{_id:t,name:r,price:o,rate:n,description:i,composition:u,image:q}=e,L=u||"";s.innerHTML=`
    <img
      class="dessert-modal__image"
      src="${q}"
      alt="${r}"
    />

    <div class="dessert-modal__info">

      <h2 class="dessert-modal__title">${r}</h2>

      <p class="dessert-modal__price">${o} грн</p>

      <div class="dessert-modal__rating">
        ${ge(n)}
      </div>

      <p class="dessert-modal__description">
        ${i}
      </p>

      <p class="dessert-modal__ingredients">
        <b>Склад:</b> ${L}
      </p>

      <button
        class="dessert-modal__order-btn"
        type="button"
        data-dessert-id="${t}"
      >
        Перейти до замовлення
      </button>
    </div>
  `,s.querySelector(".dessert-modal__order-btn").addEventListener("click",re)},be=e=>{const s=Number(e);if(Number.isNaN(s))return 0;const t=Math.round(s*2)/2;return Math.min(Math.max(t,0),5)},ge=e=>{const s=be(e),t=Math.floor(s),r=s%1!==0;return`
    <div
      class="rating medium star-svg color-default direction-ltr value-${t} ${r?"half":""}"
      aria-label="Рейтинг ${s} з 5"
    >
      <div class="star-container">
        ${Array.from({length:5},()=>`
            <div class="star">
              <svg class="star-empty">
                <use href="#star-empty"></use>
              </svg>
              <svg class="star-half">
                <use href="#star-half"></use>
              </svg>
              <svg class="star-filled">
                <use href="#star-filled"></use>
              </svg>
            </div>
          `).join("")}
      </div>
    </div>
  `};ce();const a={dessertList:document.querySelector(".dessert-list"),dessertCategory:document.querySelector(".dessert-category"),dessertLoadMoreBtn:document.querySelector(".dessert-load-more-btn"),dropdown:document.querySelector(".category-dropdown"),dropdownBtn:document.querySelector(".category-dropdown__btn"),dropdownText:document.querySelector(".category-dropdown__text"),dessertLoader:document.querySelector(".dessert-loader")},ye=async()=>{const e="https://deserts-store.b.goit.study/api",{data:s}=await g.get(`${e}/categories`);return s},ve=async()=>{try{const e=await ye(),s=`
    <li class="dessert-category__item">
        <button class="dessert-category__btn active__btn" type="button" data-id="all" aria-label="Перейти до всіх категорій">Всі десерти</button>
    </li>
  `,t=e.map(({_id:r,name:o})=>`
        <li class="dessert-category__item">
            <button class="dessert-category__btn" type="button" data-id="${r}" aria-label="Перейти до категорії ${o}">${o}</button>
        </li>
      `).join("");a.dessertCategory.insertAdjacentHTML("beforeend",s+t)}catch{l.error({message:"Виникла помилка при завантаженні категорій, спробуйте пізніше.",position:"topRight"})}},C=async(e=1,s="all")=>{const t=s==="all"?"https://deserts-store.b.goit.study/api/desserts":`https://deserts-store.b.goit.study/api/desserts?category=${s}`,{data:r}=await g.get(`${t}`,{params:{page:e,limit:8}});return r},U="/sugar-rush-labs/assets/sprite-CbHn4Fkf.svg",x=e=>{const s=e.map(({_id:t,name:r,description:o,price:n,category:i,image:u})=>`
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
          <button class="dessert-list__btn js-dessert-modal-open" type="button" data-id="${t} aria-label="Подивитись детальну інформацію">
            <svg width="24" height="24" class="dessert-list__icon" aria-hidden="true">
              <use href="${U}#icon-arrow_outward"></use>
            </svg>
          </button>
        </div>
      </li>
      `).join("");a.dessertList.insertAdjacentHTML("beforeend",s),a.dessertList.querySelectorAll(".dessert-list__image").forEach(t=>{const r=t.previousElementSibling;if(t.complete){r.style.display="none",t.classList.add("img__is-loaded");return}t.addEventListener("load",()=>{r.style.display="none",t.classList.add("img__is-loaded")}),t.addEventListener("error",()=>{r.style.display="none",t.classList.add("img__is-loaded")})})},fe=()=>{a.dessertLoader.style.display="block"},he=()=>{a.dessertLoader.style.display="none"},b={showLoader:fe,hideLoader:he},_e=async(e=1,s="all")=>{b.showLoader();try{const{desserts:t}=await C(e,s);x(t),b.hideLoader(),a.dessertLoadMoreBtn.classList.remove("dessert-button-hidden")}catch{l.error({message:"Виникла помилка при завантаженні десертів, спробуйте пізніше.",position:"topRight"})}};let y=1,S="all";const K=e=>{const s=Math.ceil(e/8);y<s?(a.dessertLoadMoreBtn.classList.remove("dessert-button-hidden"),a.dessertLoadMoreBtn.disabled=!1):(a.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),a.dessertLoadMoreBtn.disabled=!0)},we=async e=>{const s=e.target.closest(".dessert-category__btn");if(s){y=1,S=s.dataset.id,document.querySelectorAll(".dessert-category__btn").forEach(t=>t.classList.remove("active__btn")),s.classList.add("active__btn"),a.dessertList.innerHTML="",b.showLoader();try{const t=await C(y,S);x(t.desserts),K(t.totalItems)}catch{l.error({message:"Виникла помилка при зміні категорії, спробуйте пізніше.",position:"topRight"})}finally{b.hideLoader()}}},Le=async()=>{a.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),a.dessertLoadMoreBtn.disabled=!0,b.showLoader(),y+=1;try{const{desserts:e,totalItems:s}=await C(y,S);x(e),K(s)}catch{l.error({message:"Виникла помилка при завантаженні десертів, спробуйте пізніше.",position:"topRight"})}finally{b.hideLoader()}},W={handleCategoryFilter:we,handleLoadMoreDesserts:Le};a.dropdownBtn.addEventListener("click",()=>{a.dropdown.classList.toggle("is-open")});a.dropdown.addEventListener("click",e=>{const s=e.target.closest(".dessert-category__btn");s&&(a.dropdownText.textContent=s.textContent,a.dropdown.classList.remove("is-open"))});document.addEventListener("click",e=>{a.dropdown.contains(e.target)||a.dropdown.classList.remove("is-open")});ve();_e();a.dessertCategory.addEventListener("click",W.handleCategoryFilter);a.dessertLoadMoreBtn.addEventListener("click",W.handleLoadMoreDesserts);new J(".accordion-container",{showMultiple:!1,duration:300});const E={reviewsList:document.querySelector("#feedback-list"),loader:document.querySelector(".loader-backdrop")},ke=()=>{new M(".feedback-swiper",{loop:!0,speed:600,slidesPerView:1,centeredSlides:!0,spaceBetween:24,observer:!0,observeParents:!0,watchSlidesProgress:!0,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:1},keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".button-next",prevEl:".button-prev"},breakpoints:{768:{slidesPerView:3,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24,centeredSlides:!1}}})},Ee=e=>{const s=Math.floor(e.rate),t=e.rate%1!==0?"half":"";return`
    <li class="swiper-slide feedback-item">
      <div class="rating star-svg value-${s} ${t} color-default">
        <div class="star-container">
          ${Array(5).fill(0).map(()=>`
            <div class="star">
              <svg class="star-empty"><use href="#star-empty"></use></svg>
              <svg class="star-half"><use href="#star-half"></use></svg>
              <svg class="star-filled"><use href="#star-filled"></use></svg>
            </div>
          `).join("")}
        </div>
      </div>
      <p class="feedback-text">${e.description}</p>
      <p class="feedback-user-name">${e.author}</p>
    </li>
  `},Be=async e=>{try{const{data:s}=await g.get("https://deserts-store.b.goit.study/api/feedbacks");return s.feedbacks}catch{l.error({message:"Йой, здається, розробники щось нахімічили з відгуками, спробуйте пізніше.",position:"topRight",messageSize:16,messageLineHeight:26,closeOnClick:!0,progressBar:!1})}},Se=async()=>{document.querySelector("#stars-sprite")||document.body.insertAdjacentHTML("beforeend",`<div id="stars-sprite" style="display:none">${T}</div>`),E.loader.classList.remove("is-hidden");try{const s=(await Be()).map(t=>Ee(t)).join("");E.reviewsList.innerHTML=s,ke()}catch{l.error({message:"Йой, щось пішло не так, спробуйте пізніше.",position:"topRight",messageSize:16,closeOnClick:!0,progressBar:!1})}finally{E.loader.classList.add("is-hidden")}};document.addEventListener("DOMContentLoaded",Se);const G=window.matchMedia("(min-width: 768px)");function Q(e){const s=document.querySelector(".feedback-button-wrapper"),t=document.querySelector(".nav-paginations-feedbacks"),r=document.querySelector(".feedback-slider-container");e?r.appendChild(s):t.appendChild(s)}Q(G.matches);G.addEventListener("change",e=>Q(e.matches));const v={bestsellersList:document.querySelector(".bestsellers-list"),loaderBestsellers:document.querySelector(".bestsellers-loader"),buttonWrapper:document.querySelector(".bestsellers-nav-btn")},Me=async()=>{try{const e="https://deserts-store.b.goit.study/api",{data:s}=await g.get(`${e}/desserts?type=popular&limit=18`);return s}catch{l.error({message:"Йой, здається, розробники щось нахімічили з ТОП-десертами, спробуйте пізніше.",position:"topRight",messageSize:16,messageLineHeight:26,closeOnClick:!0,progressBar:!1})}};async function $e(){const e=v.loaderBestsellers;e.style.display="block";try{const{desserts:s}=await Me();xe(s)}catch{l.error({message:"Йой, здається, розробники щось нахімічили з ТОП-десертами, спробуйте пізніше.",position:"topRight",messageSize:16,messageLineHeight:26,closeOnClick:!0,progressBar:!1})}finally{e.style.display="none"}}document.addEventListener("DOMContentLoaded",$e);v.buttonWrapper.style.display="none";let p=null;function H(){const e=document.querySelectorAll(".bestsellers-list-item");e.forEach(s=>{s.style.height="auto",s.style.display="flex",s.style.flexDirection="column",s.style.justifyContent="space-between"}),requestAnimationFrame(()=>{let s=0;e.forEach(t=>{t.offsetHeight>s&&(s=t.offsetHeight)}),e.forEach(t=>t.style.height=s+"px"),p&&p.update()})}function Ce(){v.bestsellersList.querySelectorAll(".bestsellers-image").forEach(e=>{if(e.complete&&e.naturalWidth!==0){e.style.display="block";return}const s=document.createElement("div");s.className="bestsellers-image-loader-dynamic",s.setAttribute("aria-hidden","true"),s.innerHTML=`
        <div class='loader'>
          <div class="cup">
            <div class="cup-handle"></div>
            <div class="smoke one"></div>
            <div class="smoke two"></div>
            <div class="smoke three"></div>
          </div>
          <div class="load">..........................</div>
        </div>
      `,e.closest(".bestsellers-list-item").insertAdjacentElement("afterbegin",s);const t=()=>{s.remove(),e.style.display="block"};e.addEventListener("load",t,{once:!0}),e.addEventListener("error",t,{once:!0})})}function xe(e){const s=e.map(({image:t,category:r,description:o,name:n,price:i,_id:u})=>`<li class="bestsellers-list-item swiper-slide">
          <div class="bestsellers-top">
            <img class="bestsellers-image" src="${t}" alt="${n}"  style="display:none"/>
            <p class="bestsellers-category">${r.name}</p>
            <h3 class="bestsellers-name">${n}</h3>
            <p class="bestsellers-description">${o}</p>
          </div>
          <div class="bestsellers-wrapper">
            <p class="bestsellers-price">${i} грн</p>
            <button class="bestsellers-modal-btn js-dessert-modal-open" type="button" aria-label="Подивитись детальну інформацію" data-id="${u}">
              <svg width="24" height="24" aria-hidden="true">
                <use href="${U}#icon-arrow_outward"></use>
              </svg>
            </button>
          </div>
        </li>`).join("");v.bestsellersList.innerHTML=s,p&&(p.destroy(!0,!0),p=null),p=new M(".swiper-bestsellers",{modules:[O,D,X],keyboard:{enabled:!0,onlyInViewport:!0},slidesPerView:1,slidesPerGroup:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:16},1440:{slidesPerView:3,slidesPerGroup:3,spaceBetween:24}},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0},navigation:{prevEl:".page-left-btn",nextEl:".page-right-btn"},on:{init(){H(),Ce(),v.buttonWrapper.style.display="flex"},resize(){H()}}})}let m=null;const qe=()=>{m=new M(".about-us__viewport",{modules:[O,D],slidesPerView:2,slidesPerGroup:1,spaceBetween:24,watchOverflow:!1,navigation:{nextEl:".about-us__button--next",prevEl:".about-us__button--prev"},pagination:{el:".about-us__pagination",clickable:!0,bulletClass:"about-us__pagination-bullet",bulletActiveClass:"about-us__pagination-bullet--active"},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:2,spaceBetween:32}}})},Pe=()=>{m&&(m.destroy(!0,!0),m=null)},Z=()=>{const e=window.innerWidth>=768;e&&!m&&qe(),!e&&m&&Pe()};Z();window.addEventListener("resize",Z);
//# sourceMappingURL=index.js.map
