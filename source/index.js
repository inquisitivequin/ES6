class Pers {
	constructor(name, age) {
		this._name = name;
		this.age = age
	}
	get name() {
		return this._name
	}
	set name(val) {
		this._name = val
	}
}

let proto = {
	age:234
}

let pers = new Pers('poat', 23)


//Reflect.preventExtensions(pers)


Reflect.defineProperty(pers, 'hobs', {
	value: ['food', 'food']
})



console.log(pers.hobs)
console.log(Reflect.ownKeys(pers))