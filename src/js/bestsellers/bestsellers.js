import {
  onInitBestsellers,
  onLeftBtnBestsellersClick,
  onRightBtnBestsellersClick,
} from './handlers';
import { refsBestsellers } from './refs';

document.addEventListener('DOMContentLoaded', onInitBestsellers);
refsBestsellers.leftBtn.addEventListener('click', onLeftBtnBestsellersClick);
refsBestsellers.rightBtn.addEventListener('click', onRightBtnBestsellersClick);
