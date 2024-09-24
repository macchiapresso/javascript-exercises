const repeatString = function(string, times) {
	let repeated = [];
	if(times < 0) {
		return "ERROR";
	}
	else {	
		for(let i = 0; i < times; i++) {
			repeated.push(string);
		}
		return repeated.join("").toString();
	}
};

// Do not edit below this line
module.exports = repeatString;
