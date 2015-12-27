
	var x = +prompt ('укажите число', '');
	var n = +prompt ('укажите степень', '');

	function pow(x, n) {
		var result = 1;

		for (var i = 0; i < n; i++) {
		result = result * x; 
		}

		return result;
	}

	var powResult = pow(x, n);

	console.log(powResult);

	
	if (isNaN(n) ) {
		alert('нужно вводить только цифры');
	}