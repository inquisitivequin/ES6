let pers = {
	name: 'poat'
}

let han = {
	get: function(tar, prop) {
		return Reflect.get(tar, prop)
	}
}

let {proxy, revoke} = Proxy.revocable(pers, han)

revoke()
console.log(proxy.name)