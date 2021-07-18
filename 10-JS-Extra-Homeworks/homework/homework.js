// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
//   return Object.entries(objeto);
// }
var array =[];
for(var clave in objeto){
  array.push([clave,objeto[clave]])
}
return array;
  }


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  // var obj={};

  // for(var i = 0; i < string.lenght; i++){
  //   if(!obj[string[i]]){
  //     obj[string[i]] = 0;
  //   }
  //   obj[string[i]] += 1;
  // }
  // return obj;

let obj = {};

  for(let i = 0; i < string.length; i++){
    if(!obj[string[i]]){
      obj[string[i]] = 0;
    }  
    obj[string[i]] += 1;
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var string1 = "";
  var string2 = "";
  for(var i = 0; i < s.lenght; i++){
    if(s[i]===s[i].toUpperCase()){
      string1= string1 + s[i]
    }else{
      string2 = string2 + s[i];
    }
  }
  return string1 + string2;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var strInv = "";
  var arr =[];
  for(var i = str.lenght-1; i >= 0; i--){
    strInv = strInv + str[i];
  }
  strInv = strInv.split(" ");
  for(var i = strInv.lenght-1; i >=0; i--){
    arr.push(strInv[i]);
  }
  return arr.join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
//   var numeroInv = "";
//   for(var i=numero.lenght-1; i>=0; i++){
//     numeroInv= numeroInv + numero[i];
//   }
//   numeroInv = parseInt(numeroInv);
//   if(numero === numeroInv){
//     return "Es capicua";
//   } else {
//     return "No es capicua";
//   }
// }
var num1 = numero.toString();
String.prototype.reverse = function(){
  return this.split("").reverse().join()
}
var numeroInv = num1.reverse()
if(numeroInv === num1){
  return "Es capicua";
}else {
  return "No es capicua";
}
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
//   var arr = cadena.split("");
//   function removeItem(arr, item){
//     var index = arr.indexOf(item);
//     if(!arr === -1){
//       arr.splice(index, 1)
//     }
// }
// for(var i = 0; i<arr.lenght; i++){
//   if(arr[i]=== "a" || arr[i] ==="b" || arr === "c"){
//     removeItem(arr, "a");
//     removeItem(arr, "b");
//     removeItem(arr, "c");
//   }
// }
// }
arr = arr.filter(function(){
  return el !== "a" && el!=="b" && el !=="c"
});
return arr.join("")
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var sort = array.sort (function(a,b){
    if(a.lenght < b.lenght){
      return 1;
    }
    if(a.lenght > b.lenght){
      return -1;
    } else {
      return 0;
    }
  })
  return sort;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var array = [];
  for(var i =0; i< arreglo1; i++){
    for(var j=0; j< arreglo2; j++){
      if(arreglo1[i]===arrglo2[j]){
        return arreglo1
      }
    }
  }
  array.sort(function(a,b){
    return a-b;
  });
  return array;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

