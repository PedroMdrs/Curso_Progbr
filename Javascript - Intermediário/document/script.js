// Document eh uma propriedade do objeto window
// atraves do document eh possivel acessar o codigo HTML
// DOM significa Document Object Model, ou modelo de objeto do documento
// Cada Tag Html no java script pode ser transformada em um objeto JS
// 
console.log(document);
// body, que eh um objeto, tambem eh uma propriedade de document
console.log(document.body);
// innner html eh uma propriedade do objeto body
console.log(document.body.innerHTML);
window.document.body.innerHTML += "<h1> fodase </h1>";
// body.innerHTML += "<h2> fodase </h2>"; /* nao funciona porque body n foi declarado, o js n sabe oq eh esse body, oq a gente quer mexer eh na propriedade body dentro de document certo? No entanto so pode declarar de forma direta assim se for uma propriedade de window, body nao eh uma propriedade de window e sim de document, document sim eh uma propriedade de window e pode ser declarada de forma direta assim como o console, por isso nesse caso aqui teria que fazer da seguinte forma: */
document.body.innerHTML += "<h2> fodase </h2>";
