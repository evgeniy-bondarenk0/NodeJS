const fs = require('fs');
const path = require('path');

const pathFile = path.join(__dirname,'./text.txt'); //Визнааємо шлях до файлу з текстом

// Функція поосимвольного читання
const fileRead = async (n) => {   
    const length = fs.readFileSync(pathFile).length; //Визначаємо довжину файлу
    //Визначаємо потік для читання файлу
    const strm = fs.createReadStream(pathFile,{ 
        encoding: 'UTF8',
        start: length - n,
        end: length});
    
    //Відкриваємо потік та виводимо інформацію
    const streamToString = (stream) => {
        const chunks = [];
        return new Promise((resolve, reject) => {
          stream.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
          stream.on("error", (err) => reject(err));
          stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
        });
      };

    return streamToString(strm)
};
//Викликаємо фунцію читання та задаємо к-ть останніх символів, які треба вивести
fileRead(4).then((result) => {
    console.log(result)
}).catch((e)=>{
console.log(e)
})