let inventory = ['молоток', 'дробовик', 'металлический блок', 'кувалда', 'батареи']
console.log(inventory)

// inventory[0] = "кувалда"
// inventory[3] = 'молоток'
// console.log(inventory)

//console.log(inventory.indexOf('батареи'))

//inventory.push("двигатель");
//inventory.push('колесо');
//console.log(inventory)

//inventory.shift()
//console.log(inventory)

let num = 0
while (num <= inventory.length - 1) {
    console.log(num  + 1);
    console.log(inventory[num])
    num++
}
