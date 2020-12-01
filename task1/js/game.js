var number = prompt("Введите число от 0 до 999");
var obj={};

function f(number){
        obj.hundreds=Math.floor(number/100);
        obj.dozens=Math.floor((number-(obj.hundreds*100))/10);
        obj.units=number-(obj.hundreds*100+obj.dozens*10);
}
if (isNaN(number)||number<0||number>999) {
    console.log("Введите число >0, не превышающее 999");
} else {
f(number);
console.log("Сотни "+obj.hundreds);
console.log("Десятки "+obj.dozens);
console.log("Единицы "+obj.units);
    }