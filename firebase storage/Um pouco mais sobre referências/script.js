// pra acessar o bucket eh necessario uma referencia, dependendo se a referencia for uma pasta ou um arquivo vai ter outros metodos
// se for uma pasta vai ter o metodo list all que lista todos os arquivos de qtem detnro
const ref = storage.ref("images/06a8d06346f404c0ecca1db809917852.jpg");
// ref.root.listAll().then(res => {
//     console.log(res)
// })
console.log(ref.name)
console.log(ref.fullPath)
// const fileRef = ref.child("06a8d06346f404c0ecca1db809917852.jpg")
// const fileParent = fileRef.parent.parent;
// fileParent.listAll().then(res => {
    // res.items[0].getDownloadURL().then(url => {
    //     console.log(url)
    // })
    // console.log(res)
    // res.items[0].listAll().then(res => {
    //     console.log(res)
    // })
    // fileRef.getDownloadURL().then(url =>{
    // console.log(res)
    // })
// })