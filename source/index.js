let pers = {
	name: 'poat'
}

let han = {

	}

let phan = {
	get: function(tar, na) {
		return na in tar ? tar[na] : 0
	},
	set: function(target, prop, val) {
		if(val.length >= 2) {
			Reflect.set(target, prop, val)
		}
	}
}

var prox = new Proxy({}, han);

let pprox = new Proxy(prox, phan)

Reflect.setPrototypeOf(pers, pprox)

console.log(pers.hobs)