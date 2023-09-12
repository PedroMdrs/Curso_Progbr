const ref = storage.ref("images");
const fileInput = document.getElementById("fileInput")
fileInput.addEventListener("change", (e) =>{
    const file = e.target.files[0];
    ref.child(file.name).put(file).then((snapshot) =>{
        console.log(snapshot)
    })
})