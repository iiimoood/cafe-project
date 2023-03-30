export const select = {
  templateOf: {
    productList: '#template-product-list',
    contactPage: '#template-contact-page',
    homePage: '#template-home-page',
  },
  containerOf: {
    pages: '#pages',
    contact: '#contact',
    homePage: '#home',
  },
  nav: {
    links: '.main-nav a',
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
  productList: Handlebars.compile(
    document.querySelector(select.templateOf.productList).innerHTML
  ),
  contactPage: Handlebars.compile(
    document.querySelector(select.templateOf.contactPage).innerHTML
  ),
  homePage: Handlebars.compile(
    document.querySelector(select.templateOf.homePage).innerHTML
  ),
};
