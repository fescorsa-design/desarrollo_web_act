//Array(Arreglo) para las imagenes, aquí van a poner las imagenes//
// de cada uno ( ES INDIVIDUAL) //

const imagenes = [
"https://images.unsplash.com/photo-1599600197870-4bfaf17d5f42?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXRhcmRlY2VyZXN8ZW58MHx8MHx8fDA%3D"

"https://images.unsplash.com/photo-1581832122640-fe77bded3f0f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF0YXJkZWNlcmVzfGVufDB8fDB8fHww"

"https://images.unsplash.com/photo-1514575464533-dbc388a5e7f7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF0YXJkZWNlcmVzfGVufDB8fDB8fHww"

"https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF0YXJkZWNlcmVzfGVufDB8fDB8fHww"

"https://media.istockphoto.com/id/2162451866/es/foto/hermosa-vista-del-amanecer-en-el-bosque-brumoso-en-la-toscana-italia-con-colinas-verdes-y.webp?a=1&b=1&s=612x612&w=0&k=20&c=xFvEF9QPl9jBNBeyuFwh-fWqEFUMzcsRsYSCGiREgtU="];

// Selección de elementos//

const boton = document.getElementById("btn-cambiar");

const imagenCard = document.getElementById("card-img");

const textoCard = documentalismo.getElementById("card-text");

//contador de las imagenes//

let indice = 0;

// Evento de click //

boton.addEventListener("click",()=>
    {
  //lo siguiente es para que avance la foto//
  indice++;
  
  //el siguiente if es para cuando llegue al final se regreso al inicio//
  if(indice >= imagenes.length){
    indice = 0;
  }
  // Cambiar imagen y texto//
  imagenCard.src = imagenes[indice];
  textoCard.textContent = `Mostrando imagen ${indice + 1} de ${imagenes.length}`;
});