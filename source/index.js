class Person  {

	constructor(name) {
		this.name = name;
	}

	greet() {console.log(this.name + ' and I am ' + this.age + ' fool')}
}


let poat = new Person('Poat');

poat.greet()

class Pwt extends Person {
	constructor(age) {
		super('Pwt');
		this.age = age
	}
}

let pet = new Pwt(42)

pet.greet()