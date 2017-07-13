let pers = {
	name: 'toad'
}

let bo = {
	name: 'poat'
}

console.log(pers.__proto__ == Object.prototype)

Object.setPrototypeOf(pers, bo)