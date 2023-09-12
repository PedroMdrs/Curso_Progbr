// fetch permite pegar dados dinamicos
// dados dinamicos significam dados que mudam e que estao armazenados em outro 

let url = "https://dsadpasdapskdp"
// fetch retorna uma promise
fetch(url).then((res) =>{
    // retorna uma promise
    return res.json()
})
.then((data) =>{
    console.log(data)
})
