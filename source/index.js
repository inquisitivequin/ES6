class ConvArr extends Array {
	convert() {
		let returnArray = []
		this.forEach(val => returnArray.push("con'd" + val))
		return returnArray
	}
}

let numArr = new ConvArr();

numArr.push(1)
numArr.push(2)
numArr.push(3)

console.log(numArr.convert())