/*

1- Take original array
2- Organize

*/

const removeFromArray = function(array, ...removeSlot) {
	let postArray = array.filter(i => !removeSlot.includes(i));
	return postArray;
};

// Do not edit below this line
module.exports = removeFromArray;
