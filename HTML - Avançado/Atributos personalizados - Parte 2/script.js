let lista = document.getElementById("lista");
let attribute = parseInt(lista.dataset.num);

for(let i = 0; i < attribute; i++){
    lista.innerHTML += `<li> ${i} </li>`
}