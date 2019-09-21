'use strict';

for(let i = 0; i <= 10; i++ ){
	if (i == 0) {
		document.write(i + '- это ноль <br>');
		continue;
	}
	if ((i % 2) == 0) {
		document.write(i + '- четное число <br>');
	}else{
		document.write(i + '- нечетное число <br>');
	}
}