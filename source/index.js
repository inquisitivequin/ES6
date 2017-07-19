function log(msg) {
	console.log('Log fool ' + msg)
}

let han = {
	apply: function(tar, thisAr, argList) {
		if (argList.length == 1) {
			return Reflect.apply(tar, thisAr, argList)
		}
	}
}

let prox = new Proxy(log, han)

prox('hola')