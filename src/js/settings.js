export const select = {
  templateOf: {
    productList: '#template-product',
  },
  nav: {
    links: '.main-nav a',
  },
  containerOf: {
    pages: '#pages',
    menu: '.product-list',
  },
};
export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  },
};
export const settings = {
  db: {
    url:
      '//' +
      window.location.hostname +
      (window.location.hostname == 'localhost' ? ':3131' : ''),
    products: 'products',
  },
};

export const templates = {
  product: Handlebars.compile(
    document.querySelector(select.templateOf.productList).innerHTML
  ),
};
