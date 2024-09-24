const reverseString = function(string) {
	const toBeReversed = string.split("");
	const max = string.length;
	let reversed = []
	for(let i = 0; i <= max; i++) {
		reversed.push(toBeReversed[max - i]);
	}
	return reversed.join("").toString();
};

// Do not edit below this line
module.exports = reverseString;
