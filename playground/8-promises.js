

const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([3,1,6,2,4,9])
        reject('Error conect')
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Success!', result)

}).catch((error)=>{
    console.log('Error: ',error)
})