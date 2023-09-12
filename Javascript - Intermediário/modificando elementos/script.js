let p = document.getElementById("p1");
// tem tres maneiras da gente mudar o conteudo
// innerhtml > recebe um html
// innerText > nao recebe um html e mostra so o que ta na tela
// textcontent > tambem nao recebe um html e mostra todo texto que ta no html
console.log(p.innerText)
console.log(p.textContent)
// A gente pode tambem modificar os atributos
p.className = ""; /* tira a classe */
console.log(p.meuATT) /* nao aparece o atributo porque so podemos usar os atributos classicos como p.style */
// pra acessasr o atributo que eu criei da pra acessar assim:
let x = p.getAttribute("meuATT");
console.log(x)
// serve pra modificar ou criar um atributo
p.setAttribute("meuATT", "outro nome");
console.log(p)
p.setAttribute("novoATT", "sexo");
p.style.backgroundColor = "blue"