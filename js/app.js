import { select, settings } from './settings.js';
import Home from './components/HomePage';

const app = {
  initPages: function () {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
  },
  initData: function () {
    const url = settings.db.url + '/' + settings.db.products;
    this.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        this.data.products = parsedResponse;
      });
  },
  initHome: function () {
    const thisApp = this;

    const homePageContainer = document.querySelector(
      select.containerOf.homePage
    );

    thisApp.home = new Home(homePageContainer);
  },
  init: function () {
    const thisApp = this;

    thisApp.initData();
    thisApp.initHome();
  },
};

app.init();
