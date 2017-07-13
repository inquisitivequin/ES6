let ar = [1,2,3,4,5]

let it = ar.entries()

console.log(it.next())

for (let el of it) {
	console.log(el)
}