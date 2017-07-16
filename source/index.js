let pers = {
	name: 'poat'
}

let han = {
	get: function(tar, na) {
		return na in tar ? tar[na] : 0
	},
	set: function(target, prop, val) {
		if(val.length >= 2) {
			Reflect.set(target, prop, val)
		}
	}
}

var prox = new Proxy(pers, han);
prox.name = 'jurd'

console.log(prox.name)