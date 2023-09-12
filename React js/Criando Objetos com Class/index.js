const Person = require('./Person')
const Alumn = require('./Alumn')


let joao = new Person('jao', 23)
let marcos = new Alumn("marcos", 30, 1001)

marcos.greetings()
joao.greetings()