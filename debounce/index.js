let debounce = (func, delay) => {
	let timeout;
	return function(){
		const context = this, args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout( () => func.call(context, args), delay );
	}
}