import{a as b,i,A as ne,S as R,N,P as U,K as ie}from"./assets/vendor-BRBGmNfy.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const k={body:document.body},K="/sugar-rush-labs/assets/sprite-BU3it7Y0.svg",G=`<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg"
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
`,le=async e=>{const s="https://deserts-store.b.goit.study/api",{data:t}=await b.get(`${s}/desserts/${e}`);return t},z=()=>window.matchMedia("(max-width: 374px)").matches?window.innerWidth-32:window.matchMedia("(max-width: 767px)").matches?335:640,de=async e=>{const s=e.target.closest(".js-dessert-modal-open");if(!s)return;const t=s.dataset.id;if(!t){i.error({message:"Не вдалося визначити десерт. Спробуйте ще раз.",position:"topRight",color:"#F5B6B6",messageColor:"#000000",class:"custom-toast",maxWidth:z()});return}we();try{const o=await le(t);Le(o)}catch(o){w(),i.error({message:"Не вдалося завантажити інформацію про десерт. Спробуйте ще раз.",position:"topRight",color:"#FFC9C9",messageColor:"#000000",class:"custom-toast",maxWidth:z()}),console.log(o)}},ce=e=>{const s=_e();e.target===s&&w()},Y=e=>{e.key==="Escape"&&w()},ue=()=>{w()},me=e=>{const s=e.currentTarget.dataset.dessertId;w();const t=new CustomEvent("open-order-modal",{detail:{dessertId:s}});document.dispatchEvent(t)},q={body:document.body},pe="https://deserts-store.b.goit.study/api",ge=async e=>{const{data:s}=await b.post(`${pe}/orders`,e);return s},m=()=>window.matchMedia("(max-width: 374px)").matches?window.innerWidth-32:window.matchMedia("(max-width: 767px)").matches?320:640,Q=e=>{e.target.classList.contains("order-modal-backdrop")&&B()},Z=e=>{e.key==="Escape"&&B()},J=()=>{B()},X=async e=>{var $,O,W,D;e.preventDefault();const s=e.currentTarget,t=ve();if(!t){i.error({message:"Не вдалося визначити десерт для замовлення",position:"topRight",color:"#FFC9C9",messageColor:"#000000",class:"custom-toast",maxWidth:m()});return}const o=new FormData(s),r=o.get("name").trim(),d=o.get("phone").trim().replace(/\D/g,""),u=o.get("comment").trim();if(!r){i.error({message:"Будь ласка, введіть Ваше ім`я",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast",maxWidth:m()});return}if(r.length<2){i.error({message:"Ім`я має містити щонайменше 2 символи",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast",maxWidth:m()});return}if(!/^380[0-9]{9}$/.test(d)){i.error({message:"Введіть телефон у форматі 380961234568",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast",maxWidth:m()});return}if(!u){i.error({message:"Для нас важлива Ваша думка",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast",maxWidth:m()});return}if(u.length<5){i.error({message:"Коментар має містити щонайменше 5 символів",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast",maxWidth:m()});return}const h={name:r,phone:d,dessertId:t,comment:u};try{await ge(h),i.success({message:"Замовлення успішно відправлено!",position:"topRight",color:"#aefcd2",messageColor:"#000000",class:"custom-toast",maxWidth:m()}),s.reset(),B()}catch(L){console.log("Error in order submit:",L),console.log("Server response:",($=L.response)==null?void 0:$.data),console.log("Status:",(O=L.response)==null?void 0:O.status),i.error({message:((D=(W=L.response)==null?void 0:W.data)==null?void 0:D.message)||"Не вдалося надіслати заявку. Спробуйте ще раз.",position:"topRight",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast",maxWidth:m()})}};let l=null,j=null;const be=()=>{document.addEventListener("open-order-modal",e=>{const{dessertId:s}=e.detail||{};s&&he(s)})},he=e=>{j=e,l=document.createElement("div"),l.classList.add("order-modal-backdrop"),l.innerHTML=`
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
          <use href="${K}#icon-close"></use>
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
  `,q.body.append(l),q.body.classList.add("no-scroll"),l.addEventListener("click",Q),document.addEventListener("keydown",Z),l.querySelector(".js-order-modal-close").addEventListener("click",J),l.querySelector(".js-order-form").addEventListener("submit",X)},B=()=>{if(!l)return;const e=l.querySelector(".js-order-modal-close");e==null||e.removeEventListener("click",J);const s=l.querySelector(".js-order-form");s==null||s.removeEventListener("submit",X),l.removeEventListener("click",Q),document.removeEventListener("keydown",Z),l.remove(),l=null,j=null,q.body.classList.remove("no-scroll")},ve=()=>j;be();let c=null;const ye=()=>{if(document.querySelector(".js-rating-icons-sprite"))return;const e=document.createElement("div");e.classList.add("js-rating-icons-sprite"),e.style.display="none",e.innerHTML=G,k.body.prepend(e)},fe=()=>{ye(),document.addEventListener("click",de)},we=()=>{c=document.createElement("div"),c.classList.add("dessert-modal-backdrop"),c.innerHTML=`
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
          <use href="${K}#icon-close"></use>
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
  `,k.body.append(c),k.body.classList.add("no-scroll"),c.addEventListener("click",ce),document.addEventListener("keydown",Y),c.querySelector(".dessert-modal__close-btn").addEventListener("click",ue)},w=()=>{c&&(c.remove(),c=null,k.body.classList.remove("no-scroll"),document.removeEventListener("keydown",Y))},_e=()=>c,Le=e=>{if(!c)return;const s=c.querySelector(".dessert-modal__content"),{_id:t,name:o,price:r,rate:a,description:d,composition:u,image:_}=e,h=u||"";s.innerHTML=`
    <img
      class="dessert-modal__image"
      src="${_}"
      alt="${o}"
    />

    <div class="dessert-modal__info">

      <h2 class="dessert-modal__title">${o}</h2>

      <p class="dessert-modal__price">${r} грн</p>

      <div class="dessert-modal__rating">
        ${Me(a)}
      </div>

      <p class="dessert-modal__description">
        ${d}
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
  `,s.querySelector(".dessert-modal__order-btn").addEventListener("click",me)},ke=e=>{const s=Number(e);if(Number.isNaN(s))return 0;const t=Math.round(s*2)/2;return Math.min(Math.max(t,0),5)},Me=e=>{const s=ke(e),t=Math.floor(s),o=s%1!==0;return`
    <div
      class="rating medium star-svg color-default direction-ltr value-${t} ${o?"half":""}"
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
  `};fe();const n={dessertList:document.querySelector(".dessert-list"),dessertCategory:document.querySelector(".dessert-category"),dessertLoadMoreBtn:document.querySelector(".dessert-load-more-btn"),dropdown:document.querySelector(".category-dropdown"),dropdownBtn:document.querySelector(".category-dropdown__btn"),dessertLoader:document.querySelector(".dessert-loader")},Se=async()=>{const e="https://deserts-store.b.goit.study/api",{data:s}=await b.get(`${e}/categories`);return s},Ee=async()=>{try{const e=await Se(),s=`
    <li class="dessert-category__item">
        <button class="dessert-category__btn active__btn" type="button" data-id="all" aria-label="Перейти до всіх категорій">Всі десерти</button>
    </li>
  `,t=e.map(({_id:o,name:r})=>`
        <li class="dessert-category__item">
            <button class="dessert-category__btn" type="button" data-id="${o}" aria-label="Перейти до категорії ${r}">${r}</button>
        </li>
      `).join("");n.dessertCategory.insertAdjacentHTML("beforeend",s+t)}catch{i.error({message:"Виникла помилка при завантаженні категорій, спробуйте пізніше.",position:"topRight"})}},A=async(e=1,s="all")=>{const t=s==="all"?"https://deserts-store.b.goit.study/api/desserts":`https://deserts-store.b.goit.study/api/desserts?category=${s}`,{data:o}=await b.get(`${t}`,{params:{page:e,limit:8}});return o},ee="/sugar-rush-labs/assets/sprite-BU3it7Y0.svg",Be=()=>window.matchMedia("(min-width: 1440px)").matches?278:window.matchMedia("(min-width: 768px)").matches?312:303,xe=()=>window.matchMedia("(min-width: 1440px)").matches?209:window.matchMedia("(min-width: 768px)").matches?234:227,T={getImgWidth:Be,getImgHeight:xe},I=e=>{const s=T.getImgWidth(),t=T.getImgHeight(),o=e.map(({_id:r,name:a,description:d,price:u,category:_,image:h})=>`
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

          <img class="dessert-list__image" src="${h}" alt="${a}" width="${s}" height="${t}" />
          <p class="dessert-list__category">${_.name}</p>

          <p class="dessert-list__title">${a}</p>
          <p class="dessert-list__description">${d}</p>
        </div>
        <div class="dessert-list__wrapper__bottom">
          <p class="dessert-list__price">${u} грн</p>
          <button class="dessert-list__btn js-dessert-modal-open" type="button" data-id="${r}" aria-label="Подивитись детальну інформацію">
            <svg width="24" height="24" class="dessert-list__icon" aria-hidden="true">
              <use href="${ee}#icon-arrow_outward"></use>
            </svg>
          </button>
        </div>
      </li>
      `).join("");n.dessertList.insertAdjacentHTML("beforeend",o),n.dessertList.querySelectorAll(".dessert-list__image").forEach(r=>{const a=r.previousElementSibling;if(r.complete){a.style.display="none",r.classList.add("img__is-loaded");return}r.addEventListener("load",()=>{a.style.display="none",r.classList.add("img__is-loaded")}),r.addEventListener("error",()=>{a.style.display="none",r.classList.add("img__is-loaded")})})},$e=()=>{n.dessertLoader.style.display="block"},Ce=()=>{n.dessertLoader.style.display="none"},M={showLoader:$e,hideLoader:Ce};let S=document.createElement("ul");S.classList.add("custom-skeleton__desserts");const qe=(e=8)=>{const s=Array.from({length:e}).map(()=>`
        <li class="dessert-list__skeleton">
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
          </div>
        </li>
        `).join("");S.innerHTML=s,n.dessertList.appendChild(S)},He=()=>{S.remove()},E={dessertsCreateSkeleton:qe,dessertsRemoveSkeleton:He},Pe=async(e=1,s="all")=>{E.dessertsCreateSkeleton();try{const{desserts:t}=await A(e,s);I(t),M.hideLoader(),n.dessertLoadMoreBtn.classList.remove("dessert-button-hidden")}catch{i.error({message:"Виникла помилка при завантаженні десертів, спробуйте пізніше.",position:"topRight"})}finally{E.dessertsRemoveSkeleton()}};let y=1,H="all";const se=e=>{const s=Math.ceil(e/8);y<s?(n.dessertLoadMoreBtn.classList.remove("dessert-button-hidden"),n.dessertLoadMoreBtn.disabled=!1):(n.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),n.dessertLoadMoreBtn.disabled=!0)},Re=async e=>{const s=e.target.closest(".dessert-category__btn");if(s){y=1,H=s.dataset.id,document.querySelectorAll(".dessert-category__btn").forEach(t=>t.classList.remove("active__btn")),s.classList.add("active__btn"),n.dessertList.innerHTML="",E.dessertsCreateSkeleton();try{const t=await A(y,H);I(t.desserts),se(t.totalItems)}catch{i.error({message:"Виникла помилка при зміні категорії, спробуйте пізніше.",position:"topRight"})}finally{M.hideLoader(),E.dessertsRemoveSkeleton()}}},je=async()=>{n.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),n.dessertLoadMoreBtn.disabled=!0,M.showLoader(),y+=1;try{const{desserts:e,totalItems:s}=await A(y,H);I(e),se(s)}catch{i.error({message:"Виникла помилка при завантаженні десертів, спробуйте пізніше.",position:"topRight"})}finally{M.hideLoader()}},te={handleCategoryFilter:Re,handleLoadMoreDesserts:je};n.dropdownBtn.addEventListener("click",()=>{n.dropdown.classList.toggle("is-open")});n.dropdown.addEventListener("click",e=>{const s=e.target.closest(".dessert-category__btn");s&&(n.dropdownBtn.textContent=s.textContent,n.dropdown.classList.remove("is-open"))});document.addEventListener("click",e=>{n.dropdown.contains(e.target)||n.dropdown.classList.remove("is-open")});Ee();Pe();n.dessertCategory.addEventListener("click",te.handleCategoryFilter);n.dessertLoadMoreBtn.addEventListener("click",te.handleLoadMoreDesserts);new ne(".accordion-container",{showMultiple:!1,duration:300});const C={reviewsList:document.querySelector("#feedback-list"),loader:document.querySelector(".loader-backdrop")},Ae=()=>{const e=window.innerWidth<768;new R(".feedback-swiper",{loop:!e,speed:600,slidesPerView:1,centeredSlides:!0,spaceBetween:24,observer:!0,observeParents:!0,watchSlidesProgress:!0,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:1},on:{init(){F()},resize(){F()}},keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".button-next",prevEl:".button-prev"},breakpoints:{768:{slidesPerView:3,spaceBetween:24,centeredSlides:!1},1440:{slidesPerView:3,spaceBetween:24,centeredSlides:!1}}})},Ie=e=>{const s=Math.floor(e.rate),t=e.rate%1!==0?"half":"";return`
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
  `},Oe=async e=>{try{const{data:s}=await b.get("https://deserts-store.b.goit.study/api/feedbacks");return s.feedbacks}catch{i.error({message:"Йой, здається, розробники щось нахімічили з відгуками, спробуйте пізніше.",position:"topRight",messageSize:16,messageLineHeight:26,closeOnClick:!0,progressBar:!1})}},We=async()=>{document.querySelector("#stars-sprite")||document.body.insertAdjacentHTML("beforeend",`<div id="stars-sprite" style="display:none">${G}</div>`),C.loader.classList.remove("is-hidden");try{const s=(await Oe()).map(t=>Ie(t)).join("");C.reviewsList.innerHTML=s,Ae()}catch{i.error({message:"Йой, щось пішло не так, спробуйте пізніше.",position:"topRight",messageSize:16,closeOnClick:!0,progressBar:!1})}finally{C.loader.classList.add("is-hidden")}};function F(){const e=document.querySelectorAll(".feedback-item");e.forEach(s=>{s.style.height="auto",s.style.display="flex",s.style.flexDirection="column",s.style.justifyContent="space-between"}),requestAnimationFrame(()=>{let s=0;e.forEach(t=>{t.offsetHeight>s&&(s=t.offsetHeight)}),e.forEach(t=>t.style.height=s+"px")})}document.addEventListener("DOMContentLoaded",We);const re=window.matchMedia("(min-width: 768px)");function oe(e){const s=document.querySelector(".feedback-button-wrapper"),t=document.querySelector(".nav-paginations-feedbacks"),o=document.querySelector(".feedback-slider-container");e?o.appendChild(s):t.appendChild(s)}oe(re.matches);re.addEventListener("change",e=>oe(e.matches));const p={burgerBtn:document.querySelector(".open-burger-btn"),burgerMenu:document.querySelector(".burger-menu"),closeBurgerBtn:document.querySelector(".close-burger-icon"),burgerLogoLinkMain:document.querySelector(".logo-link-burger"),burgerLinkSection:document.querySelectorAll(".burger-nav-link"),burgerOrderBtn:document.querySelector(".burger-order-btn")},De=()=>{p.burgerMenu.classList.add("is-open"),document.body.classList.add("no-scroll")},x=()=>{p.burgerMenu.classList.remove("is-open"),document.body.classList.remove("no-scroll")};p.burgerBtn.addEventListener("click",De);p.closeBurgerBtn.addEventListener("click",x);p.burgerOrderBtn.addEventListener("click",x);p.burgerLogoLinkMain.addEventListener("click",x);p.burgerLinkSection.forEach(e=>e.addEventListener("click",x));const f={bestsellersList:document.querySelector(".bestsellers-list"),loaderBestsellers:document.querySelector(".bestsellers-loader"),buttonWrapper:document.querySelector(".bestsellers-nav-btn")},ze=async()=>{try{const e="https://deserts-store.b.goit.study/api",{data:s}=await b.get(`${e}/desserts?type=popular&limit=18`);return s}catch{i.error({message:"Йой, здається, розробники щось нахімічили з ТОП-десертами, спробуйте пізніше.",position:"topRight",messageSize:16,messageLineHeight:26,closeOnClick:!0,progressBar:!1})}};async function Te(){const e=f.loaderBestsellers;e.style.display="block";try{const{desserts:s}=await ze();Ve(s)}catch{i.error({message:"Йой, здається, розробники щось нахімічили з ТОП-десертами, спробуйте пізніше.",position:"topRight",messageSize:16,messageLineHeight:26,closeOnClick:!0,progressBar:!1})}finally{e.style.display="none"}}document.addEventListener("DOMContentLoaded",Te);f.buttonWrapper.style.display="none";let g=null;function V(){const e=document.querySelectorAll(".bestsellers-list-item");e.forEach(s=>{s.style.height="auto",s.style.display="flex",s.style.flexDirection="column",s.style.justifyContent="space-between"}),requestAnimationFrame(()=>{let s=0;e.forEach(t=>{t.offsetHeight>s&&(s=t.offsetHeight)}),e.forEach(t=>t.style.height=s+"px"),g&&g.update()})}function Fe(){f.bestsellersList.querySelectorAll(".bestsellers-image").forEach(e=>{if(e.complete&&e.naturalWidth!==0){e.style.display="block";return}const s=document.createElement("div");s.className="bestsellers-image-loader-dynamic",s.setAttribute("aria-hidden","true"),s.innerHTML=`
        <div class='loader'>
          <div class="cup">
            <div class="cup-handle"></div>
            <div class="smoke one"></div>
            <div class="smoke two"></div>
            <div class="smoke three"></div>
          </div>
          <div class="load">..........................</div>
        </div>
      `,e.closest(".bestsellers-list-item").insertAdjacentElement("afterbegin",s);const t=()=>{s.remove(),e.style.display="block"};e.addEventListener("load",t,{once:!0}),e.addEventListener("error",t,{once:!0})})}function Ve(e){const s=e.map(({image:t,category:o,description:r,name:a,price:d,_id:u})=>`<li class="bestsellers-list-item swiper-slide">
          <div class="bestsellers-top">
            <img class="bestsellers-image" src="${t}" alt="${a}"  style="display:none" loaling="lazy" />
            <p class="bestsellers-category">${o.name}</p>
            <h3 class="bestsellers-name">${a}</h3>
            <p class="bestsellers-description">${r}</p>
          </div>
          <div class="bestsellers-wrapper">
            <p class="bestsellers-price">${d} грн</p>
            <button class="bestsellers-modal-btn js-dessert-modal-open" type="button" aria-label="Подивитись детальну інформацію" data-id="${u}">
              <svg width="24" height="24" aria-hidden="true">
                <use href="${ee}#icon-arrow_outward"></use>
              </svg>
            </button>
          </div>
        </li>`).join("");f.bestsellersList.innerHTML=s,g&&(g.destroy(!0,!0),g=null),g=new R(".swiper-bestsellers",{modules:[N,U,ie],keyboard:{enabled:!0,onlyInViewport:!0},slidesPerView:1,slidesPerGroup:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:16},1440:{slidesPerView:3,slidesPerGroup:3,spaceBetween:24}},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0},navigation:{prevEl:".page-left-btn",nextEl:".page-right-btn"},on:{init(){V(),Fe(),f.buttonWrapper.style.display="flex"},resize(){V()}}})}let v;const Ne=()=>{v=new R(".about-us__viewport",{modules:[N,U],slidesPerView:2,slidesPerGroup:1,spaceBetween:24,watchOverflow:!1,navigation:{prevEl:".about-us__button--prev",nextEl:".about-us__button--next"},pagination:{el:".about-us__pagination",clickable:!0,bulletClass:"about-us__pagination-bullet",bulletActiveClass:"about-us__pagination-bullet--active"},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:2,spaceBetween:24}}})},Ue=()=>{v&&(v.destroy(!0,!0),v=void 0)},ae=()=>{if(window.innerWidth<768){Ue();return}v||Ne()};ae();window.addEventListener("resize",ae);const P=document.querySelector(".scroll-top");window.addEventListener("scroll",()=>{window.scrollY>3e3?P.classList.remove("hidden"):P.classList.add("hidden")});P.addEventListener("click",()=>{window.scrollTo({top:0})});
//# sourceMappingURL=index.js.map
