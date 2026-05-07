import refs from './refs';
import renderDesserts from './renderDesserts';
import renderDessertsById from './renderDessertsById';

const handleCategoryFilter = async e => {
  const btn = e.target.closest('.dessert-category__btn');
  if (!btn) return;

  const categoryId = btn.dataset.id;

  document
    .querySelectorAll('.dessert-category__btn')
    .forEach(btn => btn.classList.remove('active__btn'));

  btn.classList.add('active__btn');

  if (categoryId === 'all') {
    refs.dessertList.innerHTML = '';
    renderDesserts();
    return;
  }

  refs.dessertList.innerHTML = '';
  renderDessertsById(categoryId);
};

export default handleCategoryFilter;
