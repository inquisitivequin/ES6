let num = [1,2,3,4,5]

num[Symbol.toPrimitive] = function() {
	let sum = 0;
	for (var i = num.length - 1; i >= 0; i--) {
		sum = num[i] + sum
	}
	return sum
}

console.log(num + 1)