function getCounter(num){
	let counter = num || 0;
	return function(){
		return counter++;
	}
}

let count = getCounter(5);
