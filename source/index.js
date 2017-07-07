let sym = Symbol('dabug')

let altsym = Symbol('dabog')

let obj = {
	name: 'poat',
	[sym]: 22
}

console.log(obj[sym])