	
	var arr = [];

	for (var i = 0; i < 5; i++) {

		var name = prompt('введите имя пользователя');
		name = name.toLowerCase();
		arr[i] = name;
	};

	console.log(arr);

	var userName = prompt('введите имя пользователя');
	name = name.toLowerCase();
	var flag = false;

	for (var i = 0; i < 5; i++) {
		if (arr[i] === userName) {
			flag = true;
			break;
		}
		
	};

	if (flag){
		alert(userName + 'Игорь, вы успешно вошли')
	} else {
		alert('имя пользователя не существует')
	}
	

