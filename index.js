import{a as b,i as l,A as G,S as B,N as O,P as D,K as Z}from"./assets/vendor-BRBGmNfy.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const w={body:document.body},H="/sugar-rush-labs/assets/sprite-CbHn4Fkf.svg",J=`<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg"
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
`,Q=async e=>{const s="https://deserts-store.b.goit.study/api",{data:t}=await b.get(`${s}/desserts/${e}`);return t},X=async e=>{const s=e.target.closest(".js-dessert-modal-open");if(!s)return;const t=s.dataset.id;if(!t){l.error({message:"Не вдалося визначити десерт. Спробуйте ще раз.",position:"topRight"});return}de();try{const r=await Q(t);ue(r)}catch(r){y(),l.error({message:"Не вдалося завантажити інформацію про десерт. Спробуйте ще раз.",position:"topRight"}),console.log(r)}},Y=e=>{const s=ce();e.target===s&&y()},I=e=>{e.key==="Escape"&&y()},ee=()=>{y()},se=e=>{const s=e.currentTarget.dataset.dessertId;y();const t=new CustomEvent("open-order-modal",{detail:{dessertId:s}});document.dispatchEvent(t)},M={body:document.body},te="https://deserts-store.b.goit.study/api",re=async e=>{const{data:s}=await b.post(`${te}/orders`,e);return s},T=e=>{e.target.classList.contains("order-modal-backdrop")&&L()},z=e=>{e.key==="Escape"&&L()},F=()=>{L()},N=async e=>{var E,P,R,j;e.preventDefault();const s=e.currentTarget,t=ne();if(!t){l.error({message:"Не вдалося визначити десерт для замовлення",position:"topRight",color:"#FA5053",messageColor:"#ffffff",class:"custom-toast"});return}const r=new FormData(s),o=r.get("name").trim(),d=r.get("phone").trim().replace(/\D/g,""),u=r.get("comment").trim();if(!o){l.error({message:"Введіть ім’я",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast"});return}if(o.length<2){l.error({message:"Ім’я має містити щонайменше 2 символи",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast"});return}if(!/^380[0-9]{9}$/.test(d)){l.error({message:"Введіть телефон у форматі 380961234568",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast"});return}if(!u){l.error({message:"Введіть коментар",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast"});return}if(u.length<5){l.error({message:"Коментар має містити щонайменше 5 символів",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast"});return}const k={name:o,phone:d,dessertId:t,comment:u};try{await re(k),l.success({message:"Замовлення успішно відправлено!",position:"topRight",color:"#24922E",messageColor:"#ffffff",class:"custom-toast"}),s.reset(),L()}catch(h){console.log("Error in order submit:",h),console.log("Server response:",(E=h.response)==null?void 0:E.data),console.log("Status:",(P=h.response)==null?void 0:P.status),l.error({message:((j=(R=h.response)==null?void 0:R.data)==null?void 0:j.message)||"Не вдалося надіслати заявку. Спробуйте ще раз.",position:"topRight",color:"#FA5053",messageColor:"#ffffff",class:"custom-toast"})}};let i=null,$=null;const oe=()=>{document.addEventListener("open-order-modal",e=>{const{dessertId:s}=e.detail||{};s&&ae(s)})},ae=e=>{$=e,i=document.createElement("div"),i.classList.add("order-modal-backdrop"),i.innerHTML=`
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
          <use href="${H}#icon-close"></use>
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
  `,M.body.append(i),M.body.classList.add("no-scroll"),i.addEventListener("click",T),document.addEventListener("keydown",z),i.querySelector(".js-order-modal-close").addEventListener("click",F),i.querySelector(".js-order-form").addEventListener("submit",N)},L=()=>{if(!i)return;const e=i.querySelector(".js-order-modal-close");e==null||e.removeEventListener("click",F);const s=i.querySelector(".js-order-form");s==null||s.removeEventListener("submit",N),i.removeEventListener("click",T),document.removeEventListener("keydown",z),i.remove(),i=null,$=null,M.body.classList.remove("no-scroll")},ne=()=>$;oe();let c=null;const le=()=>{if(document.querySelector(".js-rating-icons-sprite"))return;const e=document.createElement("div");e.classList.add("js-rating-icons-sprite"),e.style.display="none",e.innerHTML=J,w.body.prepend(e)},ie=()=>{le(),document.addEventListener("click",X)},de=()=>{c=document.createElement("div"),c.classList.add("dessert-modal-backdrop"),c.innerHTML=`
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
          <use href="${H}#icon-close"></use>
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
  `,w.body.append(c),w.body.classList.add("no-scroll"),c.addEventListener("click",Y),document.addEventListener("keydown",I),c.querySelector(".dessert-modal__close-btn").addEventListener("click",ee)},y=()=>{c&&(c.remove(),c=null,w.body.classList.remove("no-scroll"),document.removeEventListener("keydown",I))},ce=()=>c,ue=e=>{if(!c)return;const s=c.querySelector(".dessert-modal__content"),{_id:t,name:r,price:o,rate:n,description:d,composition:u,image:q}=e,k=u||"";s.innerHTML=`
    <img
      class="dessert-modal__image"
      src="${q}"
      alt="${r}"
    />

    <div class="dessert-modal__info">

      <h2 class="dessert-modal__title">${r}</h2>

      <p class="dessert-modal__price">${o} грн</p>

      <div class="dessert-modal__rating">
        ${me(n)}
      </div>

      <p class="dessert-modal__description">
        ${d}
      </p>

      <p class="dessert-modal__ingredients">
        <b>Склад:</b> ${k}
      </p>

      <button
        class="dessert-modal__order-btn"
        type="button"
        data-dessert-id="${t}"
      >
        Перейти до замовлення
      </button>
    </div>
  `,s.querySelector(".dessert-modal__order-btn").addEventListener("click",se)},pe=e=>{const s=Number(e);if(Number.isNaN(s))return 0;const t=Math.round(s*2)/2;return Math.min(Math.max(t,0),5)},me=e=>{const s=pe(e),t=Math.floor(s),r=s%1!==0;return`
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
  `};ie();const a={dessertList:document.querySelector(".dessert-list"),dessertCategory:document.querySelector(".dessert-category"),dessertLoadMoreBtn:document.querySelector(".dessert-load-more-btn"),dropdown:document.querySelector(".category-dropdown"),dropdownBtn:document.querySelector(".category-dropdown__btn"),dropdownText:document.querySelector(".category-dropdown__text"),dessertLoader:document.querySelector(".dessert-loader")},ge=async()=>{const e="https://deserts-store.b.goit.study/api",{data:s}=await b.get(`${e}/categories`);return s},be=async()=>{try{const e=await ge(),s=`
    <li class="dessert-category__item">
        <button class="dessert-category__btn active__btn" type="button" data-id="all">Всі десерти</button>
    </li>
  `,t=e.map(({_id:r,name:o})=>`
        <li class="dessert-category__item">
            <button class="dessert-category__btn" type="button" data-id="${r}">${o}</button>
        </li>
      `).join("");a.dessertCategory.insertAdjacentHTML("beforeend",s+t)}catch{l.error({message:"Виникла помилка при завантаженні категорій, спробуйте пізніше.",position:"topRight"})}},C=async(e=1,s="all")=>{const t=s==="all"?"https://deserts-store.b.goit.study/api/desserts":`https://deserts-store.b.goit.study/api/desserts?category=${s}`,{data:r}=await b.get(`${t}`,{params:{page:e,limit:8}});return r},V="/sugar-rush-labs/assets/sprite-CbHn4Fkf.svg",x=e=>{const s=e.map(({_id:t,name:r,description:o,price:n,category:d,image:u})=>`
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
              <use href="${V}#icon-arrow_outward"></use>
            </svg>
          </button>
        </div>
      </li>
      `).join("");a.dessertList.insertAdjacentHTML("beforeend",s),a.dessertList.querySelectorAll(".dessert-list__image").forEach(t=>{const r=t.previousElementSibling;if(t.complete){r.style.display="none",t.classList.add("img__is-loaded");return}t.addEventListener("load",()=>{r.style.display="none",t.classList.add("img__is-loaded")}),t.addEventListener("error",()=>{r.style.display="none",t.classList.add("img__is-loaded")})})},fe=()=>{a.dessertLoader.style.display="block"},ve=()=>{a.dessertLoader.style.display="none"},g={showLoader:fe,hideLoader:ve},ye=async(e=1,s="all")=>{g.showLoader();try{const{desserts:t}=await C(e,s);x(t),g.hideLoader(),a.dessertLoadMoreBtn.classList.remove("dessert-button-hidden")}catch{l.error({message:"Виникла помилка при завантаженні десертів, спробуйте пізніше.",position:"topRight"})}};let f=1,S="all";const U=e=>{const s=Math.ceil(e/8);f<s?(a.dessertLoadMoreBtn.classList.remove("dessert-button-hidden"),a.dessertLoadMoreBtn.disabled=!1):(a.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),a.dessertLoadMoreBtn.disabled=!0)},he=async e=>{const s=e.target.closest(".dessert-category__btn");if(s){f=1,S=s.dataset.id,document.querySelectorAll(".dessert-category__btn").forEach(t=>t.classList.remove("active__btn")),s.classList.add("active__btn"),a.dessertList.innerHTML="",g.showLoader();try{const t=await C(f,S);x(t.desserts),U(t.totalItems)}catch{l.error({message:"Виникла помилка при зміні категорії, спробуйте пізніше.",position:"topRight"})}finally{g.hideLoader()}}},_e=async()=>{a.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),a.dessertLoadMoreBtn.disabled=!0,g.showLoader(),f+=1;try{const{desserts:e,totalItems:s}=await C(f,S);x(e),U(s)}catch{l.error({message:"Виникла помилка при завантаженні десертів, спробуйте пізніше.",position:"topRight"})}finally{g.hideLoader()}},K={handleCategoryFilter:he,handleLoadMoreDesserts:_e};a.dropdownBtn.addEventListener("click",()=>{a.dropdown.classList.toggle("is-open")});a.dropdown.addEventListener("click",e=>{const s=e.target.closest(".dessert-category__btn");s&&(a.dropdownText.textContent=s.textContent,a.dropdown.classList.remove("is-open"))});document.addEventListener("click",e=>{a.dropdown.contains(e.target)||a.dropdown.classList.remove("is-open")});be();ye();a.dessertCategory.addEventListener("click",K.handleCategoryFilter);a.dessertLoadMoreBtn.addEventListener("click",K.handleLoadMoreDesserts);new G(".accordion-container",{showMultiple:!1,duration:300});const _={reviewsList:document.querySelector("#feedback-list"),loader:document.querySelector(".loader-backdrop")};console.log(_.reviewsList);const we=()=>{new B(".feedback-swiper",{loop:!0,speed:600,slidesPerView:1,centeredSlides:!0,spaceBetween:24,observer:!0,observeParents:!0,watchSlidesProgress:!0,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:2},navigation:{nextEl:".button-next",prevEl:".button-prev"},breakpoints:{768:{slidesPerView:3,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24,centeredSlides:!1}}})},Le=e=>{const s=Math.floor(e.rate),t=e.rate%1!==0?"half":"";return`
    <li class="swiper-slide feedback-item">
      <div class="rating star-svg value-${s} ${t} color-default">
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
      <p class="feedback-text">${e.description}</p>
      <p class="feedback-user-name">${e.author}</p>
    </li>
  `},ke=async e=>{try{const{data:s}=await b.get("https://deserts-store.b.goit.study/api/feedbacks");return s.feedbacks}catch{l.error({message:"Йой, здається, розробники щось нахімічили з відгуками, спробуйте пізніше.",position:"topRight",messageSize:16,messageLineHeight:26,closeOnClick:!0,progressBar:!1})}},Ee=async()=>{_.loader.classList.remove("is-hidden");try{const s=(await ke()).map(t=>Le(t)).join("");_.reviewsList.innerHTML=s,requestAnimationFrame(()=>{we()})}catch{l.error({message:"Йой, щось пішло не так, спробуйте пізніше.",position:"topRight",messageSize:16,closeOnClick:!0,progressBar:!1})}finally{_.loader.classList.add("is-hidden")}};document.addEventListener("DOMContentLoaded",Ee);const v={bestsellersList:document.querySelector(".bestsellers-list"),loaderBestsellers:document.querySelector(".bestsellers-loader"),buttonWrapper:document.querySelector(".bestsellers-nav-btn")},Me=async()=>{try{const e="https://deserts-store.b.goit.study/api",{data:s}=await b.get(`${e}/desserts?type=popular&limit=18`);return s}catch{l.error({message:"Йой, здається, розробники щось нахімічили з ТОП-десертами, спробуйте пізніше.",position:"topRight",messageSize:16,messageLineHeight:26,closeOnClick:!0,progressBar:!1})}};async function Se(){const e=v.loaderBestsellers;e.style.display="block";try{const{desserts:s}=await Me();$e(s)}catch{l.error({message:"Йой, здається, розробники щось нахімічили з ТОП-десертами, спробуйте пізніше.",position:"topRight",messageSize:16,messageLineHeight:26,closeOnClick:!0,progressBar:!1})}finally{e.style.display="none"}}document.addEventListener("DOMContentLoaded",Se);v.buttonWrapper.style.display="none";let p=null;function A(){const e=document.querySelectorAll(".bestsellers-list-item");e.forEach(s=>{s.style.height="auto",s.style.display="flex",s.style.flexDirection="column",s.style.justifyContent="space-between"}),requestAnimationFrame(()=>{let s=0;e.forEach(t=>{t.offsetHeight>s&&(s=t.offsetHeight)}),e.forEach(t=>t.style.height=s+"px"),p&&p.update()})}function Be(){v.bestsellersList.querySelectorAll(".bestsellers-image").forEach(e=>{if(e.complete&&e.naturalWidth!==0){e.style.display="block";return}const s=document.createElement("div");s.className="bestsellers-image-loader-dynamic",s.setAttribute("aria-hidden","true"),s.innerHTML=`
        <div class='loader'>
          <div class="cup">
            <div class="cup-handle"></div>
            <div class="smoke one"></div>
            <div class="smoke two"></div>
            <div class="smoke three"></div>
          </div>
          <div class="load">..........................</div>
        </div>
      `,e.closest(".bestsellers-list-item").insertAdjacentElement("afterbegin",s);const t=()=>{s.remove(),e.style.display="block"};e.addEventListener("load",t,{once:!0}),e.addEventListener("error",t,{once:!0})})}function $e(e){const s=e.map(({image:t,category:r,description:o,name:n,price:d,_id:u})=>`<li class="bestsellers-list-item swiper-slide">
          <div class="bestsellers-top">
            <img class="bestsellers-image" src="${t}" alt="${n}"  style="display:none"/>
            <p class="bestsellers-category">${r.name}</p>
            <h3 class="bestsellers-name">${n}</h3>
            <p class="bestsellers-description">${o}</p>
          </div>
          <div class="bestsellers-wrapper">
            <p class="bestsellers-price">${d} грн</p>
            <button class="bestsellers-modal-btn js-dessert-modal-open" type="button" aria-label="Подивитись детальну інформацію" data-id="${u}">
              <svg width="24" height="24" aria-hidden="true">
                <use href="${V}#icon-arrow_outward"></use>
              </svg>
            </button>
          </div>
        </li>`).join("");v.bestsellersList.innerHTML=s,p&&(p.destroy(!0,!0),p=null),p=new B(".swiper-bestsellers",{modules:[O,D,Z],keyboard:{enabled:!0,onlyInViewport:!0},slidesPerView:1,slidesPerGroup:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:16},1440:{slidesPerView:3,slidesPerGroup:3,spaceBetween:24}},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0},navigation:{prevEl:".page-left-btn",nextEl:".page-right-btn"},on:{init(){A(),Be(),v.buttonWrapper.style.display="flex"},resize(){A()}}})}let m=null;const Ce=()=>{m=new B(".about-us__viewport",{modules:[O,D],slidesPerView:2,slidesPerGroup:1,spaceBetween:24,watchOverflow:!1,navigation:{nextEl:".about-us__button--next",prevEl:".about-us__button--prev"},pagination:{el:".about-us__pagination",clickable:!0,bulletClass:"about-us__pagination-bullet",bulletActiveClass:"about-us__pagination-bullet--active"},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:2,spaceBetween:32}}})},xe=()=>{m&&(m.destroy(!0,!0),m=null)},W=()=>{const e=window.innerWidth>=768;e&&!m&&Ce(),!e&&m&&xe()};W();window.addEventListener("resize",W);
//# sourceMappingURL=index.js.map
