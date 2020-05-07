const a = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('first promise')
	}, 1000)
})
const b = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('second promise')
	}, 3000)
})

function all(p1, p2) {
	let arr = [];
	let counter = 0;
	return new Promise((resolve) => {
		p1.then((data) => {
			counter++;
			arr.push(data);
			if (counter == 2) resolve(arr)
		})
	p2.then((data) => {
		counter++;
		arr.push(data)
		if (counter == 2)resolve(arr)
		})
	})
}


all(a,b).then((data) => {
	console.log(data)
})
