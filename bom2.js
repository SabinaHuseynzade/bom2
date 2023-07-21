// 1)
// //какие типы встроенных всплывающих окон в js вы знаете?

//окно предупреждения, окно подтверждения и окно запроса.

// 2)
// //выведите всплывающее окно с предупреждением 'Осторожно'

window.alert('Осторожно') 

// 3)
// //выведите всплывающее окно с кнопками подтверждения и отмены

window.confirm('Ok?') 

// 4)
// //выведите всплывающее окно с вопросом и возможностью записать ответ

window.prompt("ok?") 

// 5)
// //какое временное событие выполняется после ожидания указанного количества миллисекунд?

//setTimeout

// 6)
// //какое временное событие непрерывно повторяет выполнение функции?

//setInterval

// 7)
// //выведите в консоли сообщение 'НАЧАЛО' с помощью setTimeout

setTimeout(function(){
console.log('НАЧАЛО');
}, 10)

// 8)
// //выведите в консоли сообщение 'ПОВТОР' с помощью setInterval каждые 2 секунды

setInterval(function(){
console.log('ПОВТОР');
}, 10)


// 9)
// //что такое куки?

//Файлы cookie - это данные, которые хранятся на вашем компьютере в небольших текстовых файлах

// 10)
// //как создать куки файл?

//document.cookie 

// 11)
// //как изменить ранее записанный куки?

//так же как записывали

// 12)
// //как удалить ранее записанный куки?

//Просто установите параметр expires на прошедшую дату

//mapping

function mapping(arr) {
    const contain = {};
  
    for (let i = 0; i < arr.length; i++) {
      const lowLet = arr[i];
      const upLet = lowLet.toUpperCase();
      contain[lowLet] = upLet;
    }
  
    return contain;
  }

console.log(mapping(["s", "p"]));

//inkLevels

function inkLevels(obj){
    let valObj = Object.values(obj);
    let minLev = Math.min(...valObj);
    return minLev;
}
console.log(inkLevels({
    "cyan": 23,
    "magenta": 12,
    "yellow": 10
}));

