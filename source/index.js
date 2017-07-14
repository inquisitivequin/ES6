let ace = {
	name: 'Ace of Diamonds'
}

let king ={
	name: 'King of Diamonds'
}

let deck = new Map()

deck.set('as', ace)
deck.set('as', ace)
deck.set('k', king)

deck.clear()

console.log(deck)

console.log(deck.get('as'))

