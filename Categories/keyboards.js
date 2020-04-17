import { products } from '../products.js';
import { renderProuctList } from '../App.js';

const productsList = document.getElementById('prodList');

renderProuctList(products, 'Keyboards and Mouse', productsList, '.');
$(function() {
	$('[data-toggle="tooltip"]').tooltip();
});
