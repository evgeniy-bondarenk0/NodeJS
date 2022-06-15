// const name = 'Eugene'
// const userAge = 24
// 
// const user = {
//     name,
//     age: userAge,
//     locaton: 'Lviv'
// }
// console.log(user)

// Object destructuring


const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}
// 
// // const label = product.label
// // const stock = product.stock
// 
// const {label: productLabel, stock, rating = 5} = product
// 
// console.log(productLabel, stock, rating);


const transaction = (type, {label, stock = 0} = {}) => {
    console.log(type, label, stock);

}

transaction('order', product)