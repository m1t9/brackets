module.exports = function check(str, bracketsConfig) {
	
	while (true) {
		let loop = 0;
		bracketsConfig.forEach(item => {
			if (str.includes(item[0] + item[1])) {
				str = str.replace(item[0] + item[1], '');
				loop += 1;
			}
		})
		if (loop === 0) break;
	}

	return (str === '') ? true : false;
}