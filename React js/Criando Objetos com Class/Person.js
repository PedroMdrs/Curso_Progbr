class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }
    greetings(name,age) {
        console.log("ola meu noeme eh", this.name , "e tenho", this.age, "anos")
    }
}
module.exports = Person
