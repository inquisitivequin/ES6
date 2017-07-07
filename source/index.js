let arr = [1,2,3,4]

arr[Symbol.iterator] = () => {
	let nextValue = 10;
	return {
		next: () =>  {
			nextValue++
			return
			done: nextValue > 15 ? true : false
			value: nextValue
		}
	}
}

let it = arr[Symbol.iterator]()

for (let element of arr) {
	console.log(element)
}




