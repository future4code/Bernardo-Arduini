const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3       //False
console.log("a. ", resultado)

resultado = (bool2 || bool1) && !bool3      //False  
console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool1)    //True
console.log("c. ", resultado)

resultado = (resultado && (!bool1 || bool2)) && !bool3     //False
console.log("d. ", resultado)

console.log("e. ", typeof resultado)        //Boolean




let array
console.log('I. ', array)    //I. undefined

array = null
console.log('II. ', array)        // II. null


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]      //  III. 11
console.log('III. ', array.length)

let i = 0
console.log('IV. ', array[i], " e ", array[i+1])      // IV. 3 e 4

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor)        //  V. 19 e 9

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i])       //  VI.  3

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]        //  VII. 1
console.log('VII. ', resultadoC)



let nome=prompt("Qual o seu nome?")
console.log("1. Qual seu nome?")
console.log("resposta: "+ nome)

let nome = prompt("Qual sua idade?")
console.log("2. Qual sua idade?")
console.log("resposta: "+ idade)

let nome = prompt("Qual nome da sua mae?")
console.log("3. ual nome da sua mae?")
console.log("resposta: "+ mae)

let nome = prompt("Qual nome do seu pai?")
console.log("4. Qual nome do seu pai?")
console.log("resposta: "+ pai)

let nome = prompt("Qual nome do seu irmao?")
console.log("5. Qual nome do seu irmao?")
console.log("resposta: "+ irmao)





