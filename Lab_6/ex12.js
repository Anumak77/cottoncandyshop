function add(x, y){
	// console.log(x + y);
	return x + y;
}


function printer(a, b){
	// console.log(add(a, b))
	return add(a, b)
}

function anonymous_function(v, w){
	console.log(printer(v,w))
}

anonymous_function(2, 3)