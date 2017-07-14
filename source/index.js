let ace = {
	name: 'Ace of Diamonds'
}

let king ={
	name: 'King of Diamonds'
}

let deck = new Map()

deck.set('as', ace)

deck.set('k', king)



for (key of deck) {
	console.log(key)
}

for (key of deck.keys()) {

}

