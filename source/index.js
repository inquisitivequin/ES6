let arr = [1,2,3,4]

let it = arr[Symbol.iterator]()

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next() != true)
console.log(it.next().done != true)
console.log(arr)

