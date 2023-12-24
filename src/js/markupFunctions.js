import svg_sprite from '../img/sprite.svg';


// products

const productMarkup = arrey => {
  if (!arrey.length) {
    return;
  }
  return arrey
    .map(
      ({
        _id,
        name,
        img,
        category,
        price,
        size,
        is10PercentOff,
        popularity,
      }) => {
        if (!is10PercentOff) {
          return `<li class="card js-card" data-id=${_id}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${img}" alt="${name}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${name}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category:
                    <span>${category.replace('_', ' ')}</span>
                  </li>
                  <li class="card-prodcuts-item">Size:
                    <span>${size}</span>
                  </li>
                  <li class="card-prodcuts-item">Popularity:
                    <span>${popularity}</span>
                  </li>
              </ul>
              
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${price}</p>
  
              <button class="card-btn js-cart" type="button">
  
                  <svg class="card-btn-icon" width="18" height="18">
                      <use href="${svg_sprite}#cart"></use>
                  </svg>
  
              </button>
  
            </div>
        </li>`;
        } else {
          return `<li class="card js-card" data-id=${_id}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${img}" alt="${name}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${name}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category: <span>${category.replace(
                    '_',
                    ' '
                  )}</span></li>
                  <li class="card-prodcuts-item">Size: <span>${size}</span></li>
                  <li class="card-prodcuts-item">Popularity: <span>${popularity}</span></li>
              </ul>
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${price}</p>
  
              <button class="card-btn js-cart" type="button">
                  <svg class="card-btn-icon" width="18" height="18">
                      <use href="${svg_sprite}#cart"></use>
                  </svg>
              </button>
              <svg class="discount-icon" width="60" height="60">
                <use href="${svg_sprite}#discount"></use>
              </svg>
              
            </div>
        </li>`;
        }
      }
    )
    .join('');
};

const errorMarkup = (element, status) => {
  element.innerHTML = ` <div class="error_box">
                                <p class="error_title">
                                    Error<span>${status}</span>
                                </p>
                                <p class="error_text">
                                    Ой, щось пішло не так ....
                                </p>
                              </div>
  `;
};

const notFoundMarkup = element => {
  element.innerHTML = `<div class="notFound_box">
                              <p class="notFound_title">
                                  Nothing was found for the selected <span>filters...</span>
                              </p>
                              <p class="notFound_text">
                                Try adjusting your search parameters or browse our range by other criteria to
                                find the perfect product for you.
                              </p>
                              </div>
                            `;
};

// filters

const createCategoryMarkup = arrey => {
  if (!arrey.length) {
    return `<option value="not_found_categories">Not found categories</option>`;
  }
  return arrey
    .map(
      category =>
        `<option value="${category}">${category
          .replace('_', ' ')
          .replace('_', ' ')}</option>`
    )
    .join('');
};

const createSortMarkup = array => {
  return array
    .map(category => {
      return `<option value="${category.value}">${category.label}</option>`;
    })
    .join('');
};

export {
  productMarkup,
  errorMarkup,
  notFoundMarkup,
  createCategoryMarkup,
  createSortMarkup,
};
