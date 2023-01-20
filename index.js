import {coffeeStock as stock , isCoffeeMachineReady} from './state.js';

console.log("Hello FROM NODE.JS")

console.log(stock);
console.log(isCoffeeMachineReady);

const makeCoffee = (type, miligrams) => {
    if (stock[type] >= miligrams) {
        console.log("Kopi berhasil dibuat!");
    } else {
        console.log("Biji kopi habis!");
    }
}

makeCoffee("robusta", 80);