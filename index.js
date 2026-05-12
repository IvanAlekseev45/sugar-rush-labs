import{a as h,i,A as oe,S as H,N as T,P as V,K as ae}from"./assets/vendor-BRBGmNfy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const M={body:document.body},N="/sugar-rush-labs/assets/sprite-CbHn4Fkf.svg",U=`<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg"
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
`,ne=async e=>{const t="https://deserts-store.b.goit.study/api",{data:s}=await h.get(`${t}/desserts/${e}`);return s},W=()=>window.matchMedia("(max-width: 374px)").matches?window.innerWidth-32:window.matchMedia("(max-width: 767px)").matches?335:640,ie=async e=>{const t=e.target.closest(".js-dessert-modal-open");if(!t)return;const s=t.dataset.id;if(!s){i.error({message:"Не вдалося визначити десерт. Спробуйте ще раз.",position:"topRight",color:"#F5B6B6",messageColor:"#000000",class:"custom-toast",maxWidth:W()});return}fe();try{const o=await ne(s);we(o)}catch(o){_(),i.error({message:"Не вдалося завантажити інформацію про десерт. Спробуйте ще раз.",position:"topRight",color:"#FFC9C9",messageColor:"#000000",class:"custom-toast",maxWidth:W()}),console.log(o)}},le=e=>{const t=ve();e.target===t&&_()},K=e=>{e.key==="Escape"&&_()},de=()=>{_()},ce=e=>{const t=e.currentTarget.dataset.dessertId;_();const s=new CustomEvent("open-order-modal",{detail:{dessertId:t}});document.dispatchEvent(s)},$={body:document.body},ue="https://deserts-store.b.goit.study/api",pe=async e=>{const{data:t}=await h.post(`${ue}/orders`,e);return t},p=()=>window.matchMedia("(max-width: 374px)").matches?window.innerWidth-32:window.matchMedia("(max-width: 767px)").matches?320:640,G=e=>{e.target.classList.contains("order-modal-backdrop")&&E()},Q=e=>{e.key==="Escape"&&E()},Y=()=>{E()},Z=async e=>{var B,A,I,O;e.preventDefault();const t=e.currentTarget,s=be();if(!s){i.error({message:"Не вдалося визначити десерт для замовлення",position:"topRight",color:"#FFC9C9",messageColor:"#000000",class:"custom-toast",maxWidth:p()});return}const o=new FormData(t),r=o.get("name").trim(),d=o.get("phone").trim().replace(/\D/g,""),u=o.get("comment").trim();if(!r){i.error({message:"Будь ласка, введіть Ваше ім`я",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast",maxWidth:p()});return}if(r.length<2){i.error({message:"Ім`я має містити щонайменше 2 символи",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast",maxWidth:p()});return}if(!/^380[0-9]{9}$/.test(d)){i.error({message:"Введіть телефон у форматі 380961234568",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast",maxWidth:p()});return}if(!u){i.error({message:"Для нас важлива Ваша думка",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast",maxWidth:p()});return}if(u.length<5){i.error({message:"Коментар має містити щонайменше 5 символів",position:"center",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast",maxWidth:p()});return}const y={name:r,phone:d,dessertId:s,comment:u};try{await pe(y),i.success({message:"Замовлення успішно відправлено!",position:"topRight",color:"#aefcd2",messageColor:"#000000",class:"custom-toast",maxWidth:p()}),t.reset(),E()}catch(k){console.log("Error in order submit:",k),console.log("Server response:",(B=k.response)==null?void 0:B.data),console.log("Status:",(A=k.response)==null?void 0:A.status),i.error({message:((O=(I=k.response)==null?void 0:I.data)==null?void 0:O.message)||"Не вдалося надіслати заявку. Спробуйте ще раз.",position:"topRight",color:"#f5b6b6",messageColor:"#000000",class:"custom-toast",maxWidth:p()})}};let l=null,P=null;const me=()=>{document.addEventListener("open-order-modal",e=>{const{dessertId:t}=e.detail||{};t&&ge(t)})},ge=e=>{P=e,l=document.createElement("div"),l.classList.add("order-modal-backdrop"),l.innerHTML=`
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
          <use href="${N}#icon-close"></use>
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
  `,$.body.append(l),$.body.classList.add("no-scroll"),l.addEventListener("click",G),document.addEventListener("keydown",Q),l.querySelector(".js-order-modal-close").addEventListener("click",Y),l.querySelector(".js-order-form").addEventListener("submit",Z)},E=()=>{if(!l)return;const e=l.querySelector(".js-order-modal-close");e==null||e.removeEventListener("click",Y);const t=l.querySelector(".js-order-form");t==null||t.removeEventListener("submit",Z),l.removeEventListener("click",G),document.removeEventListener("keydown",Q),l.remove(),l=null,P=null,$.body.classList.remove("no-scroll")},be=()=>P;me();let c=null;const he=()=>{if(document.querySelector(".js-rating-icons-sprite"))return;const e=document.createElement("div");e.classList.add("js-rating-icons-sprite"),e.style.display="none",e.innerHTML=U,M.body.prepend(e)},ye=()=>{he(),document.addEventListener("click",ie)},fe=()=>{c=document.createElement("div"),c.classList.add("dessert-modal-backdrop"),c.innerHTML=`
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
          <use href="${N}#icon-close"></use>
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
  `,M.body.append(c),M.body.classList.add("no-scroll"),c.addEventListener("click",le),document.addEventListener("keydown",K),c.querySelector(".dessert-modal__close-btn").addEventListener("click",de)},_=()=>{c&&(c.remove(),c=null,M.body.classList.remove("no-scroll"),document.removeEventListener("keydown",K))},ve=()=>c,we=e=>{if(!c)return;const t=c.querySelector(".dessert-modal__content"),{_id:s,name:o,price:r,rate:a,description:d,composition:u,image:L}=e,y=u||"";t.innerHTML=`
    <img
      class="dessert-modal__image"
      src="${L}"
      alt="${o}"
    />

    <div class="dessert-modal__info">

      <h2 class="dessert-modal__title">${o}</h2>

      <p class="dessert-modal__price">${r} грн</p>

      <div class="dessert-modal__rating">
        ${Le(a)}
      </div>

      <p class="dessert-modal__description">
        ${d}
      </p>

      <p class="dessert-modal__ingredients">
        <b>Склад:</b> ${y}
      </p>

      <button
        class="dessert-modal__order-btn"
        type="button"
        data-dessert-id="${s}"
      >
        Перейти до замовлення
      </button>
    </div>
  `,t.querySelector(".dessert-modal__order-btn").addEventListener("click",ce)},_e=e=>{const t=Number(e);if(Number.isNaN(t))return 0;const s=Math.round(t*2)/2;return Math.min(Math.max(s,0),5)},Le=e=>{const t=_e(e),s=Math.floor(t),o=t%1!==0;return`
    <div
      class="rating medium star-svg color-default direction-ltr value-${s} ${o?"half":""}"
      aria-label="Рейтинг ${t} з 5"
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
  `};ye();const n={dessertList:document.querySelector(".dessert-list"),dessertCategory:document.querySelector(".dessert-category"),dessertLoadMoreBtn:document.querySelector(".dessert-load-more-btn"),dropdown:document.querySelector(".category-dropdown"),dropdownBtn:document.querySelector(".category-dropdown__btn"),dessertLoader:document.querySelector(".dessert-loader")},ke=async()=>{const e="https://deserts-store.b.goit.study/api",{data:t}=await h.get(`${e}/categories`);return t},Me=async()=>{try{const e=await ke(),t=`
    <li class="dessert-category__item">
        <button class="dessert-category__btn active__btn" type="button" data-id="all" aria-label="Перейти до всіх категорій">Всі десерти</button>
    </li>
  `,s=e.map(({_id:o,name:r})=>`
        <li class="dessert-category__item">
            <button class="dessert-category__btn" type="button" data-id="${o}" aria-label="Перейти до категорії ${r}">${r}</button>
        </li>
      `).join("");n.dessertCategory.insertAdjacentHTML("beforeend",t+s)}catch{i.error({message:"Виникла помилка при завантаженні категорій, спробуйте пізніше.",position:"topRight"})}},j=async(e=1,t="all")=>{const s=t==="all"?"https://deserts-store.b.goit.study/api/desserts":`https://deserts-store.b.goit.study/api/desserts?category=${t}`,{data:o}=await h.get(`${s}`,{params:{page:e,limit:8}});return o},J="/sugar-rush-labs/assets/sprite-CbHn4Fkf.svg",Ee=()=>window.matchMedia("(min-width: 1440px)").matches?278:window.matchMedia("(min-width: 768px)").matches?312:303,Se=()=>window.matchMedia("(min-width: 1440px)").matches?209:window.matchMedia("(min-width: 768px)").matches?234:227,D={getImgWidth:Ee,getImgHeight:Se},R=e=>{const t=D.getImgWidth(),s=D.getImgHeight(),o=e.map(({_id:r,name:a,description:d,price:u,category:L,image:y})=>`
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

          <img class="dessert-list__image" src="${y}" alt="${a}" width="${t}" height="${s}" />
          <p class="dessert-list__category">${L.name}</p>

          <p class="dessert-list__title">${a}</p>
          <p class="dessert-list__description">${d}</p>
        </div>
        <div class="dessert-list__wrapper__bottom">
          <p class="dessert-list__price">${u} грн</p>
          <button class="dessert-list__btn js-dessert-modal-open" type="button" data-id="${r}" aria-label="Подивитись детальну інформацію">
            <svg width="24" height="24" class="dessert-list__icon" aria-hidden="true">
              <use href="${J}#icon-arrow_outward"></use>
            </svg>
          </button>
        </div>
      </li>
      `).join("");n.dessertList.insertAdjacentHTML("beforeend",o),n.dessertList.querySelectorAll(".dessert-list__image").forEach(r=>{const a=r.previousElementSibling;if(r.complete){a.style.display="none",r.classList.add("img__is-loaded");return}r.addEventListener("load",()=>{a.style.display="none",r.classList.add("img__is-loaded")}),r.addEventListener("error",()=>{a.style.display="none",r.classList.add("img__is-loaded")})})},Be=()=>{n.dessertLoader.style.display="block"},xe=()=>{n.dessertLoader.style.display="none"},b={showLoader:Be,hideLoader:xe},$e=async(e=1,t="all")=>{b.showLoader();try{const{desserts:s}=await j(e,t);R(s),b.hideLoader(),n.dessertLoadMoreBtn.classList.remove("dessert-button-hidden")}catch{i.error({message:"Виникла помилка при завантаженні десертів, спробуйте пізніше.",position:"topRight"})}};let v=1,C="all";const X=e=>{const t=Math.ceil(e/8);v<t?(n.dessertLoadMoreBtn.classList.remove("dessert-button-hidden"),n.dessertLoadMoreBtn.disabled=!1):(n.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),n.dessertLoadMoreBtn.disabled=!0)},Ce=async e=>{const t=e.target.closest(".dessert-category__btn");if(t){v=1,C=t.dataset.id,document.querySelectorAll(".dessert-category__btn").forEach(s=>s.classList.remove("active__btn")),t.classList.add("active__btn"),n.dessertList.innerHTML="",b.showLoader();try{const s=await j(v,C);R(s.desserts),X(s.totalItems)}catch{i.error({message:"Виникла помилка при зміні категорії, спробуйте пізніше.",position:"topRight"})}finally{b.hideLoader()}}},qe=async()=>{n.dessertLoadMoreBtn.classList.add("dessert-button-hidden"),n.dessertLoadMoreBtn.disabled=!0,b.showLoader(),v+=1;try{const{desserts:e,totalItems:t}=await j(v,C);R(e),X(t)}catch{i.error({message:"Виникла помилка при завантаженні десертів, спробуйте пізніше.",position:"topRight"})}finally{b.hideLoader()}},ee={handleCategoryFilter:Ce,handleLoadMoreDesserts:qe};n.dropdownBtn.addEventListener("click",()=>{n.dropdown.classList.toggle("is-open")});n.dropdown.addEventListener("click",e=>{const t=e.target.closest(".dessert-category__btn");t&&(n.dropdownBtn.textContent=t.textContent,n.dropdown.classList.remove("is-open"))});document.addEventListener("click",e=>{n.dropdown.contains(e.target)||n.dropdown.classList.remove("is-open")});Me();$e();n.dessertCategory.addEventListener("click",ee.handleCategoryFilter);n.dessertLoadMoreBtn.addEventListener("click",ee.handleLoadMoreDesserts);new oe(".accordion-container",{showMultiple:!1,duration:300});const x={reviewsList:document.querySelector("#feedback-list"),loader:document.querySelector(".loader-backdrop")},He=()=>{const e=window.innerWidth<768;new H(".feedback-swiper",{loop:!e,speed:600,slidesPerView:1,centeredSlides:!0,spaceBetween:24,observer:!0,observeParents:!0,watchSlidesProgress:!0,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:1},on:{init(){z()},resize(){z()}},keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".button-next",prevEl:".button-prev"},breakpoints:{768:{slidesPerView:3,spaceBetween:24,centeredSlides:!1},1440:{slidesPerView:3,spaceBetween:24,centeredSlides:!1}}})},Pe=e=>{const t=Math.floor(e.rate),s=e.rate%1!==0?"half":"";return`
    <li class="swiper-slide feedback-item">
      <div class="rating star-svg value-${t} ${s} color-default">
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
  `},je=async e=>{try{const{data:t}=await h.get("https://deserts-store.b.goit.study/api/feedbacks");return t.feedbacks}catch{i.error({message:"Йой, здається, розробники щось нахімічили з відгуками, спробуйте пізніше.",position:"topRight",messageSize:16,messageLineHeight:26,closeOnClick:!0,progressBar:!1})}},Re=async()=>{document.querySelector("#stars-sprite")||document.body.insertAdjacentHTML("beforeend",`<div id="stars-sprite" style="display:none">${U}</div>`),x.loader.classList.remove("is-hidden");try{const t=(await je()).map(s=>Pe(s)).join("");x.reviewsList.innerHTML=t,He()}catch{i.error({message:"Йой, щось пішло не так, спробуйте пізніше.",position:"topRight",messageSize:16,closeOnClick:!0,progressBar:!1})}finally{x.loader.classList.add("is-hidden")}};function z(){const e=document.querySelectorAll(".feedback-item");e.forEach(t=>{t.style.height="auto",t.style.display="flex",t.style.flexDirection="column",t.style.justifyContent="space-between"}),requestAnimationFrame(()=>{let t=0;e.forEach(s=>{s.offsetHeight>t&&(t=s.offsetHeight)}),e.forEach(s=>s.style.height=t+"px")})}document.addEventListener("DOMContentLoaded",Re);const te=window.matchMedia("(min-width: 768px)");function se(e){const t=document.querySelector(".feedback-button-wrapper"),s=document.querySelector(".nav-paginations-feedbacks"),o=document.querySelector(".feedback-slider-container");e?o.appendChild(t):s.appendChild(t)}se(te.matches);te.addEventListener("change",e=>se(e.matches));const m={burgerBtn:document.querySelector(".open-burger-btn"),burgerMenu:document.querySelector(".burger-menu"),closeBurgerBtn:document.querySelector(".close-burger-icon"),burgerLogoLinkMain:document.querySelector(".logo-link-burger"),burgerLinkSection:document.querySelectorAll(".burger-nav-link"),burgerOrderBtn:document.querySelector(".burger-order-btn")},Ae=()=>{m.burgerMenu.classList.add("is-open"),document.body.classList.add("no-scroll")},S=()=>{m.burgerMenu.classList.remove("is-open"),document.body.classList.remove("no-scroll")};m.burgerBtn.addEventListener("click",Ae);m.closeBurgerBtn.addEventListener("click",S);m.burgerOrderBtn.addEventListener("click",S);m.burgerLogoLinkMain.addEventListener("click",S);m.burgerLinkSection.forEach(e=>e.addEventListener("click",S));const w={bestsellersList:document.querySelector(".bestsellers-list"),loaderBestsellers:document.querySelector(".bestsellers-loader"),buttonWrapper:document.querySelector(".bestsellers-nav-btn")},Ie=async()=>{try{const e="https://deserts-store.b.goit.study/api",{data:t}=await h.get(`${e}/desserts?type=popular&limit=18`);return t}catch{i.error({message:"Йой, здається, розробники щось нахімічили з ТОП-десертами, спробуйте пізніше.",position:"topRight",messageSize:16,messageLineHeight:26,closeOnClick:!0,progressBar:!1})}};async function Oe(){const e=w.loaderBestsellers;e.style.display="block";try{const{desserts:t}=await Ie();De(t)}catch{i.error({message:"Йой, здається, розробники щось нахімічили з ТОП-десертами, спробуйте пізніше.",position:"topRight",messageSize:16,messageLineHeight:26,closeOnClick:!0,progressBar:!1})}finally{e.style.display="none"}}document.addEventListener("DOMContentLoaded",Oe);w.buttonWrapper.style.display="none";let g=null;function F(){const e=document.querySelectorAll(".bestsellers-list-item");e.forEach(t=>{t.style.height="auto",t.style.display="flex",t.style.flexDirection="column",t.style.justifyContent="space-between"}),requestAnimationFrame(()=>{let t=0;e.forEach(s=>{s.offsetHeight>t&&(t=s.offsetHeight)}),e.forEach(s=>s.style.height=t+"px"),g&&g.update()})}function We(){w.bestsellersList.querySelectorAll(".bestsellers-image").forEach(e=>{if(e.complete&&e.naturalWidth!==0){e.style.display="block";return}const t=document.createElement("div");t.className="bestsellers-image-loader-dynamic",t.setAttribute("aria-hidden","true"),t.innerHTML=`
        <div class='loader'>
          <div class="cup">
            <div class="cup-handle"></div>
            <div class="smoke one"></div>
            <div class="smoke two"></div>
            <div class="smoke three"></div>
          </div>
          <div class="load">..........................</div>
        </div>
      `,e.closest(".bestsellers-list-item").insertAdjacentElement("afterbegin",t);const s=()=>{t.remove(),e.style.display="block"};e.addEventListener("load",s,{once:!0}),e.addEventListener("error",s,{once:!0})})}function De(e){const t=e.map(({image:s,category:o,description:r,name:a,price:d,_id:u})=>`<li class="bestsellers-list-item swiper-slide">
          <div class="bestsellers-top">
            <img class="bestsellers-image" src="${s}" alt="${a}"  style="display:none" loaling="lazy" />
            <p class="bestsellers-category">${o.name}</p>
            <h3 class="bestsellers-name">${a}</h3>
            <p class="bestsellers-description">${r}</p>
          </div>
          <div class="bestsellers-wrapper">
            <p class="bestsellers-price">${d} грн</p>
            <button class="bestsellers-modal-btn js-dessert-modal-open" type="button" aria-label="Подивитись детальну інформацію" data-id="${u}">
              <svg width="24" height="24" aria-hidden="true">
                <use href="${J}#icon-arrow_outward"></use>
              </svg>
            </button>
          </div>
        </li>`).join("");w.bestsellersList.innerHTML=t,g&&(g.destroy(!0,!0),g=null),g=new H(".swiper-bestsellers",{modules:[T,V,ae],keyboard:{enabled:!0,onlyInViewport:!0},slidesPerView:1,slidesPerGroup:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:16},1440:{slidesPerView:3,slidesPerGroup:3,spaceBetween:24}},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0},navigation:{prevEl:".page-left-btn",nextEl:".page-right-btn"},on:{init(){F(),We(),w.buttonWrapper.style.display="flex"},resize(){F()}}})}let f;const ze=()=>{f=new H(".about-us__viewport",{modules:[T,V],slidesPerView:2,slidesPerGroup:1,spaceBetween:24,watchOverflow:!1,navigation:{prevEl:".about-us__button--prev",nextEl:".about-us__button--next"},pagination:{el:".about-us__pagination",clickable:!0,bulletClass:"about-us__pagination-bullet",bulletActiveClass:"about-us__pagination-bullet--active"},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:2,spaceBetween:24}}})},Fe=()=>{f&&(f.destroy(!0,!0),f=void 0)},re=()=>{if(window.innerWidth<768){Fe();return}f||ze()};re();window.addEventListener("resize",re);const q=document.querySelector(".scroll-top");window.addEventListener("scroll",()=>{window.scrollY>3e3?q.classList.remove("hidden"):q.classList.add("hidden")});q.addEventListener("click",()=>{window.scrollTo({top:0})});
//# sourceMappingURL=index.js.map
