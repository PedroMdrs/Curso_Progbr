// "Bind" eh um metodo que toda funcao tem
// o "this" vai funcionar de maneira diferente dependendo daonde for chamado


function speakGeneric(){
    console.log(this.sound)
}
let dog = {
    sound: "auau",
    speak: speakGeneric
}
let cat = {
    sound: "miaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaau",
    speak: speakGeneric
}
dog.speak();
cat.speak();
// da indefinido pq a funcao nao sabe oq eh o "this". Perdeu o contexto.
speakGeneric();
// eh possivel dar contexto pra uma funcao
let bindedFunction = speakGeneric.bind(/*contexto*/ dog);
bindedFunction();