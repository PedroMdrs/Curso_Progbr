
// A variavel nome nao foi criada, vai dar erro e o JS nao vai executar o resto do codigo

// console.log(nome);
// console.log("boa noite")

// ----------------------------------------------------------------------

// Pra executar o resto do codigo eh preciso tratar o erro.
// Pra tratar erro usa-se o tryCatch
// tryCatch = tentar fazer alguma coisa, se nao conseguir ele vai tratar de alguma maneira

// try { /* dento do try vai oq voce quer tentar fazer */

//     console.log(nome);

// } catch (error) { /* no catch passa um argumento erro */

//     console.log("houve um erro", error)

// } finally { /* finally = independente de ter acontecido o erro ele vai 
// executar o resto */

//     console.log("boa noite")

// }

// ----------------------------------------------------------------------
// let nome = 'pedro'

// try { 

//     console.log(nome);

// } catch (error) {

//     console.log("houve um erro", error)

// } finally {  /* nesse codigo n precisa ter o finally */

//     console.log("boa noite")

// }

// ----------------------------------------------------------------------
// Se o nome for vazio ele imprimi mesmo assim, se quiser evitar isso da pra usar o throw
// let nome = ''

// try { 
//     if(nome == ""){
//         throw "o nome nao pode ser vazio" /* joga uma excessao */
//     }
//     console.log(nome);

// } catch (error) {

//     console.log("houve um erro", error)

// } finally {  /* nesse codigo n precisa ter o finally */

//     console.log("boa noite")

// }
// ----------------------------------------------------------------------

// se botar o throw antes do try catch ele para de executar e da um codigo vermelho
let nome = ''
if(nome == ""){
    throw "o nome nao pode ser vazio"
}

try { 
    console.log(nome);

} catch (error) {

    console.log("houve um erro", error)

} finally {  /* nesse codigo n precisa ter o finally */

    console.log("boa noite")

}

