//Flatten an array:
// the array to use
let arr = [
	[1,2],
	[3,4],
	[5,6,[7,8],9],
];

//
//let flattened = [].concat(...arr);
//console.log(arr);
//to flatten completely then - console.log(arr.flat(2)); #the number references the depth of layers that need be flattened.

function customFlat(arr, depth = 1){
	let result = [];
	arr.forEach((ar) => {
	    if (Array.isArray(ar) && depth > 0){
		  result.push(...customFlat(ar, depth - 1));
	    } else result.push(ar);
	});
return result;
}
console.log(customFlat(arr, 2))