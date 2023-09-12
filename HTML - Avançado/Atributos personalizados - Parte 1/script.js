let lista = document.getElementById("lista");
let conteudo = "";
let num = parseInt(lista.getAttribute("num"));
for(let i = 0; i < num; i++){
    conteudo += `<li>${ i } </li>`;
}
lista.innerHTML = conteudo;