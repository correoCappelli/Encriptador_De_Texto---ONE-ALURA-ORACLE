let texto_original = "hello world!";
let lista_de_caracteres = Array.from(texto_original);
console.log(lista_de_caracteres);
// Output: ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d", "!"]

const lista_de_caracteres_especiales = [
    '´','!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '\\', '|', ';', ':', '\'', '"', ',', '.', '<', '>', '/', '?', '`', '~'
  ];

const lista_vocales_acentuadas = [
    'á', 'é', 'í', 'ó', 'ú', 'ü', 'ñ', 'Á', 'É', 'Í', 'Ó', 'Ú', 'Ü', 'Ñ'
  ];

const lista_letras_mayusculas = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Á', 'É', 'Í', 'Ó', 'Ú', 'Ü'
  ];
  
const lista_letras_prohibidas=lista_de_caracteres_especiales.concat(lista_vocales_acentuadas,lista_letras_mayusculas);  

function contieneCaracteresNoPermitidos(texto,listaNoPermitida) {
    return listaNoPermitida.some(char => texto.includes(char));    
}



console.log(contieneCaracteresNoPermitidos(lista_de_caracteres,lista_letras_prohibidas)); // Output: true

const texto_encriptado=[];

// function encriptarTexto(elem) {
//   switch (elem.toLowerCase()) {
//       case 'a':
//           return 'ai';
//       case 'e':
//           return 'enter';
//       case 'i':
//           return 'imes';
//       case 'o':
//           return 'ober';
//       case 'u':
//           return 'ufat';
//       default:
//           return elem;
//   }
// }

// var matriz_encriptada=lista_de_caracteres.map(encriptarTexto);

// console.log(matriz_encriptada.join(''));
// console.log(lista_de_caracteres.join(''));

// Version 2

// function encriptarTexto(elem) {
//   switch (elem.toLowerCase()) {
//       case 'a':
//           texto_encriptado.push('ai');
//       case 'e':
//           texto_encriptado.push('enter');
//       case 'i':
//           texto_encriptado.push('imes');
//       case 'o':
//           texto_encriptado.push('ober');
//       case 'u':
//           texto_encriptado.push('ufat');
//       default:
//         texto_encriptado.push(elem);
//   }
// }

let str = "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!";





function cambiarADesktop2() {
  // se usa display:none ya que hidden ocuparia espacio en la pagina
  var rectanguloDesktop1=document.querySelector("#desktop1")
  console.log(rectanguloDesktop1)
  rectanguloDesktop1.style.display='none'
  
  var rectanguloDesktop2=document.querySelector("#desktop2")
  console.log(rectanguloDesktop2)
  rectanguloDesktop2.style.display='flex';
}

function cambiarADesktop1() {
  // se usa display:none ya que hidden ocuparia espacio en la pagina
  var rectanguloDesktop1=document.querySelector("#desktop1")
  console.log(rectanguloDesktop1)
  rectanguloDesktop1.style.display='flex'
  
  var rectanguloDesktop2=document.querySelector("#desktop2")
  console.log(rectanguloDesktop2)
  rectanguloDesktop2.style.display='none';
}

function encriptador(elem) {
  switch (elem.toLowerCase()) {
      case 'a':
          return 'ai';
      case 'e':
          return 'enter';
      case 'i':
          return 'imes';
      case 'o':
          return 'ober';
      case 'u':
          return 'ufat';
      default:
          return elem;
  }
}

function desencriptador(str){

  let result = str.replace(/ober/g, 'o');
  let result1 = result.replace(/ai/g, 'a');
  let result2 = result1.replace(/enter/g, 'e');
  let result3 = result2.replace(/ufat/g, 'u');
  let result4 = result3.replace(/imes/g, 'i');

      return result4;
}


function encriptarTexto() {
  var textoAEncriptar=document.querySelector('#textarea').value
  console.log(textoAEncriptar);

  if (contieneCaracteresNoPermitidos(textoAEncriptar,lista_letras_prohibidas)){
    
    alert("El texto ingresado no es valido")

    cambiarADesktop1();

    document.querySelector('#textarea').value="";
 
  }else{

  cambiarADesktop2();

  let lista_de_caracteres = Array.from(textoAEncriptar);
  var matriz_encriptada=lista_de_caracteres.map(encriptador);
  document.querySelector("#textarea__dos").value=matriz_encriptada.join('');

  document.querySelector('#textarea').value="";

  }
}

function desencriptarTexto() {
  var textoADesencriptar=document.querySelector('#textarea').value
  console.log(textoADesencriptar);
  
  if (contieneCaracteresNoPermitidos(textoADesencriptar,lista_letras_prohibidas)){
    
    alert("El texto ingresado no es valido")

    cambiarADesktop1();

    document.querySelector('#textarea').value="";
 
  }else{

  cambiarADesktop2();

  document.querySelector("#textarea__dos").value=desencriptador(textoADesencriptar);

  document.querySelector('#textarea').value="";

  }
}

//CLIPBOARD API 



let botonCopiar=document.querySelector(".desktop2__rectangulo__boton__copiar");

botonCopiar.addEventListener('click',()=> escribirClipboard(document.querySelector("#textarea__dos").value));


botonCopiar.addEventListener('click',()=>{
  
  let textoResaltar=document.querySelector("#textarea__dos")
  
  textoResaltar.select();
});


async function escribirClipboard(texto){
  try {
    await navigator.clipboard.writeText(texto);
  } catch(error){
    console.error(error);
  }
}