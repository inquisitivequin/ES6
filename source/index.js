function *sel() {
	yield 'Shea'
	yield 'Poat'
}

let it = sel()

console.log(it.next())
console.log(it.next())
console.log(it.next())