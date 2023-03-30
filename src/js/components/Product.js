import { select, templates } from './settings.js';
import utils from '../utils.js';

class Product {
  constructor(id, data) {
    const thisProduct = this;

    thisProduct.id = id;
    thisProduct.data = data;

    thisProduct.renderInMenu();
  }
  renderInMenu() {
    const thisProduct = this;
    const generatedHTML = templates.menuProduct(thisProduct.data);
    thisProduct.elementOne = utils.createDOMFromHTML(generatedHTML);
    thisProduct.elementTwo = utils.createDOMFromHTML(generatedHTML);

    const menuContainerAll = document.querySelectorAll(select.containerOf.menu);
    menuContainerAll[0].appendChild(thisProduct.elementOne);
    menuContainerAll[1].appendChild(thisProduct.elementTwo);
  }
}

export default Product;
