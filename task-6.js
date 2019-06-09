'use strict';

/* несколько неудачный способ оказался
* let hill =['x'];
*
* for( let i = 0; i < 20; ++i){
*	
* 	console.log(hill);
* 	hill.push('x');
} */

let mountain = 'X';

for( let j = 0; j < 20; j++){
	console.log(mountain);
	mountain = mountain.concat('X');
}