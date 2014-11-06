function nameCheck(name){
	return 'Your name is ' + name + '!';
}

function nameCheer(name){
	var nameArray = name.split('');
	var cheersArray = nameArray.map(function(letter){
		return 'Give me a...' + letter + '!'
	});
	return cheersArray.join('\n');
}

function postCheer(name){
	return 'Risse is GREAT!';
}
