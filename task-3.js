'use strict';

const products = [ 
	{ 
		id: 3, 
		price: 200, 
	}, 
	{ 
		id: 4, 
		price: 900, 
	}, 
	{ 
		id: 1, 
		price: 1000, 
	}, 
];

/* подсмотренный вариант, создает отдельный массив только с дисконтом.
 * let discount = products.map(item => item.price * 0.5); 
 * console.log(discount); */


/* const discount = products.slice(0);// почему то массив не копируется целиком, как обещали в описании, а лишь по ссылке.
* это я уже потом нашел, что slice() копирует только литеральные занчения [], а не структуру {}, как у нас */ 

const discount = JSON.parse(JSON.stringify(products)); /* Ну вот, гугл рулит. Нашел как скопировать массив структур по значению.
* В данном решении и базовые данные сохраним и новый массив с дискоунтом получим. */

for(let i = 0; i <= 2; i++){
 discount[i].price = discount[i].price - discount[i].price * 0.5;
} 
console.log(discount);
console.log(products);


