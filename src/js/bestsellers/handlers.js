import { getBestsellers } from '../api-requests/getBestsellers';
import { refsBestsellers } from './refs';

let page = 1;
let total = 0;
let limit = 3;
export async function onInitBestsellers(event) {
  refsBestsellers.loaderBestsellers.style.display = 'block';
  refsBestsellers.bestsellersList.innerHTML = '';
  try {
    const { desserts, totalItems } = await getBestsellers(page);
    total = totalItems;
    renderBestsellers(desserts);
  } catch (error) {
    console.log(error);
  } finally {
    refsBestsellers.loaderBestsellers.style.display = 'none';
  }
}

function renderBestsellers(array) {
  const markup = array.map(
    ({ image, category, description, name, price, _id }) =>
      `<li class="bestsellers-list-item">
    <img class="bestsellers-image" src="${image}"/>
    <p class="bestsellers-category">${category.name}</p>
    <h2 class="bestsellers-name">${name}</h2>
    <p class="bestsellers-description">${description}</p>
    <div class="bestsellers-wrapper">
        <p class="bestsellers-price">${price} грн</p>
        <button class="bestsellers-modal-btn" type="button" data-id="${_id}">
        <svg class="bestsellers-button-cvg" width="13" height="13" aria-hidden="true"><use href="/img/sprite.svg#icon-arrow_outward"></use></svg>
        </button>
    </div>
    </li>`
  );
  refsBestsellers.bestsellersList.innerHTML = markup;
}

export function onLeftBtnBestsellersClick(event) {
  if (page <= 1) return;
  page -= 1;
  onInitBestsellers();
}

export function onRightBtnBestsellersClick(event) {
  const totalPages = Math.ceil(total / limit);
  if (page >= totalPages) return;
  page += 1;
  onInitBestsellers();
}
