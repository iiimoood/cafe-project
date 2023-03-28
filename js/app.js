import { select } from './settings.js';
import Home from './components/HomePage';

const app = {
  initPages: function () {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
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

    thisApp.initHome();
  },
};

app.init();
