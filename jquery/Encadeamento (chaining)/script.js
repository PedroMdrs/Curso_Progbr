// let jq = $("#lista1").slideUp(1000).slideDown(2000);


// let js = document.getElementById("lista1")
// console.log(js)

let print = {
    print10: function(){
        console.log(10)
        return this
    },

    print20:  function(){
        console.log(20)
        return this
    },
}
print.print10().print20().print10()
