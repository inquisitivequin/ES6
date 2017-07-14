class Pers {
	constructor(name) {
		this.name = name;
	}
}

function tOb() {
	this.age = 4
}

let pers = Reflect.construct(Pers, ['poat'], tOb)

console.log(pers)