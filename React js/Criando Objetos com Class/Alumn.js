const Person = require('./Person')
class Alumn extends Person {
    constructor(name,age,turma){
        super(name,age)
        this.turma = turma
    }

    greetings() {
        console.log("ola meu nome eh ", this.name, "tenho", this.age, "anos e sou da turma", this.turma )
    }
}
module.exports = Person
