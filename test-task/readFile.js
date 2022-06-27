const fs = require('fs');
const path = require('path');

const pathFile = path.join(__dirname,'./text.txt'); //Визнааємо шлях до файлу з текстом

// Функція поосимвольного читання
const fileRead = (n) => {   
    const length = fs.readFileSync(pathFile).length; //Визначаємо довжину файлу

    //Визначаємо потік для читання файлу
    const strm = fs.createReadStream(pathFile,{ 
        encoding: 'UTF8',
        start: length - n,
        end: length});
        
        //Відкриваємо потік та виводимо інформацію
        strm.on('data', (chunk) => {    
            console.log(chunk.toString());
   });
   //Встановлюємо час на читання та закриваємо потік
   setTimeout(() => {
    strm.close(); 
}, 2000);
};
//Викликаємо фунцію читання та задаємо к-ть останніх символів, які треба вивести
fileRead(13);
