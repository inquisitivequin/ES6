let pers = {
	name: 'poat',
	hobs: ['food', 'more food'],
	[Symbol.iterator]: function() {
		let i = 0
		let hobs = this.hobs
		return {
			next: () => {
				let val = hobs[i]
				i++
				return {
					done: i > hobs.length ? true : false,
					value: val
				}
			}
		}
	}
}


for (let hob of pers) {
	console.log(hob)
}