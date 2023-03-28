import { templates, select, utils } from '../settings.js';
class Home {
  constructor() {
    const thisHome = this;

    thisHome.render();
  }

  render() {
    const thisHome = this;

    const generatedHTML = templates.homePage();

    thisHome.dom = utils.createDOMFromHTML(generatedHTML);
    const homeContainer = document.querySelector(select.containerOf.homePage);
    homeContainer.appendChild(thisHome.dom);
  }
}
export default Home;
