class Pers {
	constructor(name, age) {
		this.name = name;
		this.age = age
	}
	greet() {
		console.log('Hola ' + this.name)
	}
}

let proto = {
	age:234
}



let pers = new Pers('poat', 42)

Reflect.setPrototypeOf(pers,proto)

console.log(Reflect.getPrototypeOf(pers))