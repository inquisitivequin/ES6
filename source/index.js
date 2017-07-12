function *g(end) {
	for (let i = 0; i < end; i++)
		try{
		yield i
	} catch (e) {
		console.log(e)
	}
}

let it = g(3)

console.log(it.next())
console.log(it.throw('Look an error'))
console.log(it.next())
console.log(it.next())