function waSec(sec) {
	return new Promise(function(resolve, reject) {
		if (sec > 2) {
			reject('Rejected Fool!')
		} else {
		setTimeout(function() {
			sec++;
			resolve(sec)
		}, 1500)
	  }
	})
}

waSec(2)
.then(waSec)
.then(function(sec) {
	console.log(sec)
})
.catch(function(err) {
	console.log(err)
})