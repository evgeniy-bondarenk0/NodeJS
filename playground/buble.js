let num = [3,1,7,4,9,6,5,2,8]

function sortItems(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	return array;
}

function factorial (number) {
    let f = 1
    let i = 0
    while (i < number) {
        i = i+1
        console.log(f)
        f = f * i
    }
    return f;
	}
	

console.log(factorial(4))