import { getDiscount } from './api_service';
import { refs } from './refs';
import { createDiscountMarkup } from './markupFunctions';

// fetch data
const dataDiscountProd = async () => {
  const data = await getDiscount();
  const markup = createDiscountMarkup(data.slice(0, 2));
  refs.dicsProd.innerHTML = markup;
};

// add to ul

// add listner to products

const clickOnDiscount = () => {};

refs.discProdList.addEventListener('click', clickOnDiscount());

export { dataDiscountProd };
