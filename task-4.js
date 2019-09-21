'use strict';

const products1 = [ 
		{ 
			id: 3, 
			price: 127, 
			photos: [ 
				"1.jpg", 
				"2.jpg", 
			] 
		}, 
		{ 
			id: 5, 
			price: 499, 
		}, 
		{ 
			id: 10, 
			price: 26, 
			photos: [ 
				"3.jpg" 
			] 
		}, 
		{ 
			id: 8, 
			price: 78, 
		}, 
	];

const goodsWithPhoto = products1.filter(products1 => products1.photos); // по наличию фото
console.log(goodsWithPhoto);

products1.sort((a, b) => a.price - b.price);//сортируем по цене
console.log(products1);