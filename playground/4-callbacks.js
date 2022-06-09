const addFunc = (a, b, callback) => {
    setTimeout( () => {
        callback(a + b)
}, 2000)
}

addFunc(1,4, (sum) => {
    console.log(sum);
})
