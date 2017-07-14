let set = new Set([1,1,1,2])

set.add(3)
set.add(3)
set.add(7)


for (el of set.keys()) {
	console.log(el)
}
